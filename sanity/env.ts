export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qi33kkqv';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01';

// Optionally, throw errors for missing critical variables to catch misconfiguration:
if (!dataset) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
}

if (!projectId) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
}

if (!apiVersion) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_API_VERSION');
}
