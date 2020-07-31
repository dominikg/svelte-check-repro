const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  // enable run-time checks when not in production
  dev: process.env.NODE_ENV !== 'production',
    // we'll extract any component CSS out into
    // a separate file - better for performance
    css: css => {
  css.write('public/build/bundle.css');
},
  preprocess: sveltePreprocess(),
}