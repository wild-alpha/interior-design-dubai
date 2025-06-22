/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://interiordesigndubai.studio',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/private-page'], // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // You can remove this if you're not manually generating extra sitemaps
    additionalSitemaps: [
      'https://interiordesigndubai.studio/sitemap.xml',
    ],
  },
};

module.exports = config;
