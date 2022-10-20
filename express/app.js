const express = require('express')

const app = express()

app.get('/',function(req,res){
  res.send(`
    <html>
      <body>
        <h1 style="color:red">222</h1>
      </body>
    </html>
  `)
})

app.use(function(req,res,next){

  next()
})


app.listen(8001,()=>{
 console.log('服务器启动了');
})


// 安装express
// 安装中间件
