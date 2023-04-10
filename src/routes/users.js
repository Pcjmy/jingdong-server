const router = require('koa-router')()
const { register } = require('../controller/user')

router.prefix('/api/user')

router.post('/register', async function(ctx, next) {
  const { username, password } = ctx.request.body

  try {
    const res = await register(username, password)
    ctx.body = {
      errno: 0,
      data: newUser
    }
  } catch(ex) {
    console.error(ex)
    ctx.body = {
      errno: 10001,
      message: `注册失败 - ${ex.message}`
    }
  }
})

module.exports = router
