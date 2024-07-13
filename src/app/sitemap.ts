import fs from 'fs';
import { MetadataRoute } from 'next';


// Define the sitemap function to generate the sitemap data
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://webdevsite-omega.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://webdevsite-omega.vercel.app/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://webdevsite-omega.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://webdevsite-omega.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}

// Function to generate the sitemap XML content
function generateSitemapXml(sitemapData: MetadataRoute.Sitemap): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  sitemapData.forEach((item) => {
    xml += '  <url>\n';
    xml += `    <loc>${item.url}</loc>\n`;
    xml += `    <lastmod>${item.lastModified instanceof Date ? item.lastModified.toISOString() : new Date().toISOString()}</lastmod>\n`;
    xml += `    <changefreq>${item.changeFrequency}</changefreq>\n`;
    xml += `    <priority>${item.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

// Generate the sitemap XML content
const sitemapData = sitemap();
const sitemapXml = generateSitemapXml(sitemapData);

// Define the file path where the sitemap XML file will be saved
const filePath = './public/sitemap.xml';

// Write the sitemap XML content to the file
fs.writeFile(filePath, sitemapXml, (err) => {
  if (err) {
    console.error('Error writing sitemap.xml:', err);
  } else {
    console.log('Sitemap generated successfully: sitemap.xml');
  }
});
