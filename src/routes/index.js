const Router = require('koa-router')
// const debug = require('debug')('payload')
const router = new Router();
const verify = require('../controlers/token').verify
const jobs = require('../jobs')
router.get('/',async(ctx)=>{
    ctx.body = 'success';
})
router.post('/payload/:name',verify, async (ctx)=>{
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