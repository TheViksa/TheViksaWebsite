export const getServicesPreviewData = `
*[_type == 'service'] | order(_createdAt desc) {
  title,
  description,
  slug,
  image
}`;
