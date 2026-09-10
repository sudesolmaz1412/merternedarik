import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.merterdentedarik.com";

  const routes = [
    "",
    "/blog/merter-kadin-giyim-toptan",
    "/blog/merter-tekstil",
    "/blog/merter-toptan-tekstil",
    "/blog/toptan-kadin-giyim",
    "/blog/merter-kadin-giyim",
    "/blog/merter-toptan-kadin-giyim",
"/blog/merter-hazir-giyim",
  "/blog/merter-kadin-giyim-toptancilari",
    "/blog/merterden-mal-istiyorum",
    "/blog/merterden-butige-toptan-kadin-giyim",
    "/blog/toptan-kadin-giyim-merter",
    "/blog/merter-kadin-giyim-tedarikcisi",
    "/blog/bayrampasadan-mal-almak-istiyorum",
    "/blog/bayrampasa-tekstil",
    "/blog/bayrampasa-tekstil-tedarikcisi",
    "/blog/bayrampasa-toptan-kadin-giyim",
    "/blog/bayrampasa-toptan-tekstil",
    "/blog/bayrampasa-hazir-giyim",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
