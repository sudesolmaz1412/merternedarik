import type { MetadataRoute } from "next";

const baseUrl = "https://www.merterdentedarik.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/blog/merter-kadin-giyim-toptan`,
    },
    {
      url: `${baseUrl}/blog/toptan-kadin-giyim`,
    },
    {
      url: `${baseUrl}/blog/merter-kadin-giyim`,
    },
    {
      url: `${baseUrl}/blog/merter-toptan-kadin-giyim`,
    },
    {
      url: `${baseUrl}/blog/merterden-mal-istiyorum`,
    },
    {
      url: `${baseUrl}/blog/merterden-butige-toptan-kadin-giyim`,
    },
    {
      url: `${baseUrl}/blog/toptan-kadin-giyim-merter`,
    },
    {
      url: `${baseUrl}/blog/merter-kadin-giyim-tedarikcisi`,
    },
  ];
}
