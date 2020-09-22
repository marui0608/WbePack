const path = require('path')

module.exports = {
    watch:true,
    mode:'production',
    entry:{
        index:'./src/index.js',
        search:'./src/search.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {test:/\.js$/,use:'babel-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}