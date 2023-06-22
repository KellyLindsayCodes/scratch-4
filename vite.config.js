import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  // ...other configuration options
  base: '/scratch-4/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about/about.html'),
        contact: resolve(__dirname, 'pages/contact/contact.html'),
        projects: resolve(__dirname, 'pages/projects/projects.html'),
      },
    },
  },
};
