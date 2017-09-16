
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// App files location
const PATHS = {
	app: path.resolve(__dirname, '../src/js'),
	styles: path.resolve(__dirname, '../src/styles'),
	target: path.resolve(__dirname, '../target')
};

/**
 * Обработка таким образов влечет за собой проседания по загрузке. Надо разобратся почему.
 * Нужны зависимости, variables and mixins.
 * */
const sassLoaders = [
	'style-loader',
	'css-loader?sourceMap',
	'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true',
	'sass-resources'
];
const NODE_ENV  = process.env.NODE_ENV || 'development';
	module.exports = {
		entry: {
			app: ['babel-polyfill', path.resolve(PATHS.app, 'index.jsx')],
		},
		output: {
			path: PATHS.target,
			filename: 'js/[name].js',
			publicPath: '/'
		},
		watch: NODE_ENV == 'development',
		devtool: NODE_ENV == 'development' ? 'source-map' : 'source-map',
		resolve: {
			extensions: ['', '.js', '.jsx','.scss'],
		},
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=stage-0&presets[]=react'],
					include: PATHS.app
				},
				{
					test: /\.js?$/,
					loaders: ['babel?presets[]=es2015&presets[]=stage-0&presets[]=react'],
				},
				{
					test: /\.scss$/,
					loader: sassLoaders.join('!')
				},
				// {
				// 	test: /\.css$/,
				// 	loader: 'style-loader!css-loader'
				// },
				// Inline base64 URLs for <=8k images, direct URLs for the rest
				{
					test: /\.(png|jpg|jpeg|gif|woff|woff2})$/,
					loader: 'url-loader?limit=8192'
				},
				{
					test: /\.svg$/,
					loader: `svg-sprite?${JSON.stringify({ name: '[name]_[hash]' })}`
				},
				{
					test: /\.mp3$/,
					loader: 'url-loader'
				},
				{
					test: /\.json$/,
					loader: 'json-loader'
				}
			]
		},

		sassResources: ['src/styles/mixins.scss', 'src/styles/variables.scss'],
		plugins: [
			new webpack.NoErrorsPlugin(),
            new ExtractTextPlugin('app.css')
			// new OptimizeJsPlugin({
			// 	sourceMap: true
			// })
		]
	};