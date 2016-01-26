var webpackConfig = {
    entry: './src/js/entry.js',
    output: {
        path: (__dirname + '/client/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel"}
        ]
    },
};

module.exports = webpackConfig;
