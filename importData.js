import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'qi33kkqv',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-18',
  token: 'sk7moJs0pGxg77IzeNgaOQfY2smCTtHDyJvhU8qRWxtr3DY7zoXK84h0x5aQgzSGsOHpTYKNgLomSEwNO8UpZEwcbhx22j2YA5JKAmLgXrBLpdoug0OBxgBiauBieMFQXFXaIsgKddebOQInFp0xCqKFPWoDvaSLyIrNVbND71Fyzt8WTyPp',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        _id: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        sizes: product.sizes || [], // Map sizes array
        colors: product.colors || [], // Map colors array
        imageURL: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent || 0, // Default to 0 if missing
        isNew: product.isNew || false, // Default to false if missing
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();
