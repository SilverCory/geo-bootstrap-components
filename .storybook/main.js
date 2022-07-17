module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  core: {
    disableTelemetry: true,
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        postcssLoaderOptions: {
          // Use postcss 8
          implementation: require("postcss"),
        },
      },
    },
  ],
};
