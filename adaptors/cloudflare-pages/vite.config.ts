import { cloudflarePagesAdaptor } from '@derkoe/qwik-city/adaptors/cloudflare-pages/vite';
import { extendConfig } from '@derkoe/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
	return {
		build: {
			ssr: true,
			rollupOptions: {
				input: ['src/entry.cloudflare-pages.tsx', '@qwik-city-plan'],
			},
		},
		plugins: [
			cloudflarePagesAdaptor({
				staticGenerate: true,
			}),
		],
	};
});
