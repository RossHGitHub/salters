const path=require("path");module.exports={entry:"./src/javascriptFiles/index.js",output:{filename:"main.js",path:path.resolve(__dirname,"dist")},watch:!0,module:{rules:[{test:/\.css$/i,use:["style-loader","css-loader"]}]}};