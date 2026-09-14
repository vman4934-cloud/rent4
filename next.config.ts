import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: "/rent4",
        assetPrefix: "/rent4",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
