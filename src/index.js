const debug = require('debug')('app')
const koa = require('koa')

const koaBody = require('koa-body')

const routes = require('./routes/index');

const app = new koa()

app.use(koaBody({ multipart: true }))
app.use(routes())
app.listen(9002,()=>{
    debug('running')
    console.log('running')
})