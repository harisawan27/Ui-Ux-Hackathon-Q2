import { type SchemaTypeDefinition } from 'sanity';
import product from './products'; // Import the product schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product], // Add product schema here
};
