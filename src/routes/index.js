const Router = require('koa-router')
// const debug = require('debug')('pyload')
const router = new Router();
const verify = require('../controlers/token').verify
const jobs = require('../jobs')
router.post('/payload/:name',verify, async (ctx,next)=>{
    const {name} = ctx.params;
    const {ref} = ctx.request.body;
    if(ref){
        jobs.run(name,ref);
    }
    ctx.status = 200;
    ctx.body={msg:'ok'}
})

router.use(router.allowedMethods())
module.exports = ()=>{
    return router.routes()
}