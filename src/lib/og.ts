import { siteConfig } from '@/constant/config';

type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};

// Updated OG function to use local logo
export function openGraph({
  siteName: _siteName,
  templateTitle: _templateTitle,
  description: _description,
  // Use the local logo as default
  logo = `${siteConfig.url}/images/rklogo_black.png`,
}: OpenGraphType): string {
  // For now, return the logo URL directly
  // In the future, you can set up your own OG image generation service
  // The parameters are kept for future extensibility
  return logo;
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
