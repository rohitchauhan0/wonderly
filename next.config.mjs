/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com', 'media.licdn.com', 'ajay-portfolio-theta.vercel.app','plus.unsplash.com'],
    },
    webpack(config) {
      // Add a rule to handle audio files
      config.module.rules.push({
        test: /\.(mp3|wav)$/i, // Match .mp3 and .wav files
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/songs',
              outputPath: 'static/songs',
              name: '[name].[hash].[ext]', // Name format for output files
              esModule: false, // Set to false for compatibility
            },
          },
        ],
      });
  
      return config; // Return the modified config
    },
  };
  
  export default nextConfig;
  