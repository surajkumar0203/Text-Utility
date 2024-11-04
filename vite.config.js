// import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: 'src/index.html',
//         about: 'src/about.html',
//         }
//     }
//   },
//   root: 'src', // This makes src the root for Vite to locate HTML files
//   publicDir: 'public' // For static files that don’t need processing
// });

import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // Ensures paths are relative for deployment
  root: 'src',  // Sets `src` as the root directory for Vite to find HTML files
  publicDir: '../public',  // Static assets can be placed in `public`
  build: {
    outDir: '../dist',  // Output directory for the build
    rollupOptions: {
      input: {
        main: 'src/index.html',
        about: 'src/about.html'
      }
    }
  }
});

