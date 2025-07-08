import { siteConfig } from '@/constant/config';

type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};

// Updated OG function to use local logo
export function openGraph({
  siteName,
  templateTitle,
  description,
  // Use the local logo as default
  logo = `${siteConfig.url}/images/rklogo_black.png`,
}: OpenGraphType): string {
  // Build query parameters for OG image generation
  const params = new URLSearchParams();

  // Add required parameters first
  params.append('siteName', siteName);
  params.append('description', description);

  // Add optional templateTitle after required parameters
  if (templateTitle) {
    params.append('templateTitle', templateTitle);
  }

  // For now, return the logo URL with query parameters
  // In the future, you can set up your own OG image generation service
  const queryString = params.toString().replace(/\+/g, '%20');
  return queryString ? `${logo}?${queryString}` : logo;
}

// Simple OG image URL generator for local use
export function generateOGImageUrl({
  title: _title,
  description: _description,
  siteName: _siteName = siteConfig.title,
  logo = `${siteConfig.url}/images/assets/rklogo_black.png`,
}: {
  title: string;
  description: string;
  siteName?: string;
  logo?: string;
}): string {
  // For now, return the logo URL directly
  // This can be enhanced to use a local OG image generation service
  return logo;
}
