// /**
//  * Internal resolved configuration used throughout the codebase.
//  *
//  * Prefer editing `astro-paper.config.ts` instead of this file. This module exists to
//  * apply defaults and expose a fully-resolved config shape (`ResolvedAstroPaperConfig`).
//  */
// import userConfig from "@/astro-paper.config";
// import type { ResolvedAstroPaperConfig } from "./types/config";
// import { PUBLIC_GOOGLE_SITE_VERIFICATION } from "astro:env/client";

// const DEFAULT_OG_IMAGE = "default-og.jpg";

// const config: ResolvedAstroPaperConfig = {
//   site: {
//     url: "https://primus027.github.io",
//   },
//   author: "Farhan Sadique",
//   ogImage: DEFAULT_OG_IMAGE,
//   profile:{
//     name: "Farhan Sadique"
//   },
//   posts: {
//     perPage: userConfig.posts?.perPage ?? 4,
//     perIndex: userConfig.posts?.perIndex ?? 4,
//     scheduledPostMargin:
//       userConfig.posts?.scheduledPostMargin ?? 15 * 60 * 1000,
//   },
//   features: {
//     lightAndDarkMode: userConfig.features?.lightAndDarkMode ?? true,
//     dynamicOgImage: userConfig.features?.dynamicOgImage ?? true,
//     showArchives: userConfig.features?.showArchives ?? true,
//     showBackButton: userConfig.features?.showBackButton ?? true,
//     editPost: userConfig.features?.editPost ?? { enabled: false },
//     search: userConfig.features?.search ?? "pagefind",
//   },
//   socials: userConfig.socials ?? [],
//   shareLinks: userConfig.shareLinks ?? [],
// };

// export default config;
export const SITE = {
  website: "https://primus027.github.io/",
  author: "Farhan Sadique",
  profile: "",
  desc: "A simple personal blog.",
  title: "Farhan's Blog",
  ogImage: "default-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
  scheduledPostMargin: 900000,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
};

export const SOCIALS = [];