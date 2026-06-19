import type { ResolvedAstroPaperConfig } from "./types/config";
import { PUBLIC_GOOGLE_SITE_VERIFICATION } from "astro:env/client";

const DEFAULT_OG_IMAGE = "default-og.jpg";

const config: ResolvedAstroPaperConfig = {
  site: {
    url: "https://primus027.github.io",
    title: "Paranoid Programming",
    description: "Welcome to my website!",
    author: "Farhan Sadique",
    ogImage: DEFAULT_OG_IMAGE,
    lang: "en",
    timezone: "UTC",
    dir: "ltr",
    googleVerification: PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  posts: {
    perPage: 4,
    perIndex: 0,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: false,
    editPost: { enabled: false },
    search: false,
  },
  socials: [],
  shareLinks: [],
};

export default config;
