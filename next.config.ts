import path from "path";
import createNextIntlPlugin from "next-intl/plugin";
import { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const config : NextConfig = {
  eslint:{
    ignoreDuringBuilds:true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/shared/scss")],
    prependData: `
      @use 'src/shared/scss/abstracts/variables' as variables;
      @use 'src/shared/scss/abstracts/utils' as utils;
    `,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       port: "",
  //       pathname: "/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "swiperjs.com/demos",
  //       port: "",
  //       pathname: "/**",
  //     },
  //     {
  //       protocol: "http",
  //       hostname: "135.181.42.5",
  //       port: "330",
  //       pathname: "/**",
  //     },
  //   ],
  // },
};


export default withNextIntl(config);
