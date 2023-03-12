module.exports = {
	plugins: [
		require('stylelint'),
		require('postcss-preset-env'),
		require('postcss-nested'),
		require('cssnano')
	],
	extends: ['cssnano-preset-default']
};
