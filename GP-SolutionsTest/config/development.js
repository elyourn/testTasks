/* global __dirname */

const path = require('path');
const Config = require('./webpack.config');

Config.devServer = {
	// contentBase: path.resolve(__dirname, '../src'),
	port: 8080,
	historyApiFallback: true
};

Config.devtool = "source-map";
Config.watchOptions = { // Уменьшение времени запуска пересборки на watch
	aggregateTimeout: 400
};

module.exports = Config;

