const path=require('path')

module.exports={
   entry:{
     app:'./src/index.js'
   },
   output:{
     path:path.resolve(__dirname,'build'),
     filename:'app.bundle.js'
   },
   module:{
     rules:[{
       test:/\.(js|jsx)$/,
       exclude:'/node_modules/',
       use:{
         loader:'babel-loader'
       }

     }]
   }
}
