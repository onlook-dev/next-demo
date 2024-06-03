import path from "path";
import { getCurrentCommit } from "@onlook/helpers";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [["@onlook/nextjs", { root: path.resolve("."), commit: getCurrentCommit() }]],
  },
}

export default nextConfig
