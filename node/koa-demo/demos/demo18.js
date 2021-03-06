const Koa = require ('koa')
const app = new Koa()

const main = ctx =>{
    ctx.throw(500)
}

const handle = async(ctx,next)=>{
    //捕捉错误，如果出错 直接输出一个错误页面
    //用P标签装内容 something error，you should concat adminster
    try{
        await next()
    }catch(err){
        ctx.response.type = 'html'
        ctx.response.body = '<p>something error，you should concat adminster</p>'
        ctx.response.status = err.statusCode | err.status | 500;
        ctx.app.emit('error',err,ctx)  //抛出异常让ON 接收到
    }
}


app.on('error',function(err){
    console.log(err)
    console.log('logger error',err.message);
    
})

app.use(handle)
app.use(main)
app.listen(3000)