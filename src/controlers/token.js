const crypto = require('crypto');
const debug = require('debug')('router')
const secret = require('../../config/index').appSecrcet;
let verify = async (ctx,next)=>{
    let signature = ctx.get('X-Hub-Signature');
    debug(signature)
    let body = ctx.request.body
    if(!signature || !body){
        ctx.throw(401)
    }else{
        let hash = 'sha1=' + crypto.createHmac('sha1',secret).update(JSON.stringify(ctx.request.body)).digest('hex');
        if(signature != hash){
            ctx.throw(401)
        }else{
            await next()
        }
    }
}


module.exports = {
    verify
}