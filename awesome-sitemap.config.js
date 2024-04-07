/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'assuva.com.tr',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 1000,
  }
  
  export default config