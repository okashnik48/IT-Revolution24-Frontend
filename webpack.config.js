// webpack.config.js
module.exports = {
	// Other configuration...
	module: {
	  rules: [
		{
			test: /\.module\.scss$/,
			use: [
			  'style-loader',
			  {
				loader: 'css-loader',
				options: {
				  modules: true,
				  sourceMap: true,
				}
			  },
			  'sass-loader'
			]
		  },
		// {
		//   test: /\.scss$/,
		//   exclude: /\.module\.scss$/,
		//   use: ['style-loader', 'css-loader', 'sass-loader']
		// }
	  ],
	},
	// Other configuration...
  };
  