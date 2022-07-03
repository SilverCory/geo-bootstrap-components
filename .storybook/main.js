const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: "[name]__[local]--[hash:base64:5]" },
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    disableTelemetry: true,
    builder: "@storybook/builder-webpack5",
  },
};
