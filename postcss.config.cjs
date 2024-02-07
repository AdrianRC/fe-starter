const postcssPresetEnv = require('postcss-preset-env');
const globalData = require('@csstools/postcss-global-data');
const cssnano = require('cssnano');

const config = {
	plugins: [
		globalData({
			files: ['./src/lib/styles/viewport.pcss']
		}),
		postcssPresetEnv({
			stage: 0
		}),
		cssnano({
			preset: 'default'
		})
	]
};

module.exports = config;
