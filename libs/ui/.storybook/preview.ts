import '../public/styles.css';
import '../src/styles/local.css';

// .storybook/preview.ts

// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
const preview: Preview = {
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
      theme: themes.dark,
    },
  },
};

export default preview;
