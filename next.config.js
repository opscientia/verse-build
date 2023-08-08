module.exports = async (phase, { defaultConfig, }) => {
  /**
   * @type {import('next').NextConfig}
   */
  return {
    reactStrictMode: true,
    staticPageGenerationTimeout: 100,
    env: {
      PARTICLE_APP_PROJECT_ID: process.env.PARTICLE_APP_PROJECT_ID,
      PARTICLE_APP_CLIENT_KEY: process.env.PARTICLE_APP_CLIENT_KEY,
      PARTICLE_APP_APP_ID: process.env.PARTICLE_APP_APP_ID,
    },
  };
};
