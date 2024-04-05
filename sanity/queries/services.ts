import { groq } from "next-sanity";

export const getServicesPreviewData = `
*[_type == 'service'] | order(_createdAt desc) {
  hr_title,
  en_title,
  hr_description,
  en_description,
  slug,
  image
}`;
// Get all services slugs
export const servicesPathsQuery = groq`*[_type == "services" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;
export const serviceQuery = groq`*[_type == "service" && slug.current == $slug][0]{ 
  hr_title,
  en_title,
  hr_description,
  en_description,
  slug,
  image
}`;

export const buildServiceQuery = (
  slug: string
) => groq`*[_type == "service" && slug.current == '${slug}'][0]{ 
  hr_title,
  en_title,
  en_body,
  hr_body,
  hr_description,
  en_description,
  slug,
  image
}`;
