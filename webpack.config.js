const path = require('path');

module.exports = {
    entry: "./src/greet-box.tsx",
    output: {
        filename: "greet-box.js",
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    watch: false,
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    mode: "production"
}