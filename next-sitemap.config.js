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
  },
};

module.exports = config;
