import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.shortName,
    short_name: "Meem",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0b",
    theme_color: "#24130d",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
