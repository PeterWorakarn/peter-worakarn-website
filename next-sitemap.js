const siteUrl = "peter-o.tech";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};