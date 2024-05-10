const siteUrl = "https://www.peter-o.tech";

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};