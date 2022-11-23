/**
| In the vite.config.js we are using https for serving
| the pages via HTTPS protocol (required by Storyblok for
| security reasons).
| In the case you don't need HTTPS protocol (for example)
| if you are using this code on Stackblitz you can skip
| the HTTPS configuration. So we created this file, for
| showing the differences.
 */
import { sveltekit } from '@sveltejs/kit/vite';
//import mkcert from 'vite-plugin-mkcert'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    server: {
        //https: true
    }
};

export default config;
