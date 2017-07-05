const path = require('path');

const phaserModulePath = path.join(__dirname, '/node_modules/phaser/');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js',
    },
    devtool: 'cheap-eval-source-map',
    module: {
        rules: [
            // assets
            {
                test: /assets\/.*\.png$/,
                use: 'file-loader'
            },
            // styles
            {
                test: /styles\/.*\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // phaser dependencies
            {
                test: /pixi\.js$/,
                use: 'expose-loader?PIXI'
            },
            {
                test: /phaser-split\.js$/, 
                use: 'expose-loader?Phaser'
            },
            {
                test: /p2\.js$/, 
                use: 'expose-loader?p2'
            },
        ]
    },
    resolve: {
        alias: {
            'phaser': path.join(phaserModulePath, 'build/custom/phaser-split.js'),
            'pixi': path.join(phaserModulePath, 'build/custom/pixi.js'),
            'p2': path.join(phaserModulePath, 'build/custom/p2.js'),
        }
    },
};