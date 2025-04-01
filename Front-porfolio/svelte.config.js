import adapter from '@sveltejs/adapter-node';

const config = { 
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: false
		}),
		files: {
            assets: 'static'
        }
	}
};

export default config;
