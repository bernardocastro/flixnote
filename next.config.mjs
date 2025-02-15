/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { isServer }) {
      if (!isServer) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'], // Usando o SVGR para carregar SVGs como componentes React
        });
      }
      return config;
    },
  };
  
  export default nextConfig;
  