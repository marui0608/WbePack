const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'production',
    watch: true,
    entry:'./src/index.js',
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader'},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}