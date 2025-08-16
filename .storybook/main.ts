import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.module && config.module.rules) {
      const scssRule = config.module.rules.find(
        (rule) => rule && typeof rule === 'object' && rule.test instanceof RegExp && rule.test.toString().includes('scss')
      );

      if (scssRule && typeof scssRule === 'object' && scssRule.use) {
        const cssLoader = (scssRule.use as any[]).find(
          (loader) => loader && typeof loader === 'object' && loader.loader && loader.loader.includes('css-loader')
        );

        if (cssLoader && typeof cssLoader === 'object') {
          cssLoader.options = { ...cssLoader.options, importLoaders: 2 };
        }
        
        const scssLoader = (scssRule.use as any[]).find(
          (loader) => loader && typeof loader === 'object' && loader.loader && loader.loader.includes('sass-loader')
        );
        
        if (scssLoader && typeof scssLoader === 'object') {
            scssLoader.options = {
                ...scssLoader.options,
                additionalData: `@use "src/app/lib/styles/variables.scss" as *;`,
            }
        }
      }
    }
    return config;
  },
};
export default config;