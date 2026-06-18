import type { NextConfig } from "next";
import { legacyLocalLandingRedirects } from "./src/data/site";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return legacyLocalLandingRedirects.flatMap((redirect) => [
      {
        source: `/${redirect.source}`,
        destination: redirect.destination,
        statusCode: 301,
      },
      {
        source: `/${redirect.source}/`,
        destination: redirect.destination,
        statusCode: 301,
      },
    ]);
  },
};

export default nextConfig;
