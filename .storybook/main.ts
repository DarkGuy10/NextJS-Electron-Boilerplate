import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'

const config: StorybookConfig = {
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
		'../frontend/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],

	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-mdx-gfm',
		'@chromatic-com/storybook',
	],

	framework: {
		name: '@storybook/nextjs',
		options: {},
	},

	webpackFinal: config => {
		config.resolve ??= {}
		config.resolve.plugins ??= []
		config.resolve.plugins.push(
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, '../frontend/tsconfig.json'),
			})
		)

		return config
	},

	docs: {},

	staticDirs: [{ from: '../frontend/app/assets', to: '/' }],

	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
}
export default config
