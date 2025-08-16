import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'NM Library',
          [
            'Colors',
            [
              'Primary',
              'Secondary', 
              'Accent',
              'Spot',
              'Chart'
            ],
            'Typography',
            [
              'Headlines',
              'Labels',
              'Body'
            ]
          ],
          'Example',
          '*'
        ]
      }
    }
  },
};

export default preview;