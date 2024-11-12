import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html', // This is important for client-side routing
      strict: false
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/pokemon' : ''
    }
  }
};

export default config;