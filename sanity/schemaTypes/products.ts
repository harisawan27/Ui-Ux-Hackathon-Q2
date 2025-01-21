export default{
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    { name: 'id', type: 'string', title: 'Product ID' },
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'price', type: 'number', title: 'Price' },
    {
      name: 'sizes',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Available Sizes',
    },
    {
      name: 'colors',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Available Colors',
    },
    { name: 'category', type: 'string', title: 'Product Category' },
    { name: 'imageURL', type: 'image', title: 'Product Image' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'discountPercent', type: 'number', title: 'Discount Percent' },
    { name: 'isNew', type: 'boolean', title: 'Is New' },
  ],
};
