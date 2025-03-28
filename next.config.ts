import { paraglideWebpackPlugin } from "@inlang/paraglide-js";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(
      paraglideWebpackPlugin({
        outdir: "./src/paraglide",
        project: "./project.inlang",
        strategy: ["url"],
      })
    );

    return config;
  },
};

export default nextConfig;
