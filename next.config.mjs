// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//     output: 'export',
   
//     // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//     // trailingSlash: true,
   
//     // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//     // skipTrailingSlashRedirect: true,
   
//     // Optional: Change the output directory `out` -> `dist`
//     // distDir: 'dist',
//   }
   
//   module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/vultures-2",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;