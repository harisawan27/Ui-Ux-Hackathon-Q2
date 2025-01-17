// Product Schema:
export default {
    name: 'product',
    type: 'document',
    fields: [
      { name: '_id', type: 'string', title: 'Product ID' },
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'sizes', type: 'array', of: [{ type: 'string' }], title: 'Available Sizes' },
      { name: 'colors', type: 'array', of: [{ type: 'string' }], title: 'Available Colors' },
      { name: 'category', type: 'string', title: 'Product Category' },
      { name: 'imageURL', type: 'image', title: 'Product Image' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'discountPercent', type: 'number', title: 'Discount Percent' },
      { name: 'isNew', type: 'boolean', title: 'Is New' }
    ]
  };
/*
// Category Schema:
export default {
    name: 'category',
    type: 'document',
    fields: [
      { name: 'category', type: 'string', title: 'Category Name' },
      { name: 'name', type: 'string', title: 'Product Name' }
    ]
  };

// User Schema
export default {
  name: 'user',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'User Name' },
    { name: 'email', type: 'string', title: 'Email Address' },
    { name: 'phone', type: 'string', title: 'Phone Number' },
    { name: 'address', type: 'text', title: 'Address' }
  ]
};
  
// Order Schema:
export default {
  name: 'order',
  type: 'document',
  fields: [
    { name: 'orderId', type: 'string', title: 'Order ID' },
    { name: 'product', type: 'reference', to: [{ type: 'product' }], title: 'Product' },
    { name: 'user', type: 'reference', to: [{ type: 'user' }], title: 'User' },
    { name: 'status', type: 'string', title: 'Status' },
    { name: 'timestamp', type: 'datetime', title: 'Order Date' }
  ]
};

*/