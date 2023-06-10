const router = require('koa-router')()
const { register, login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/user')

router.post('/register', async function(ctx, next) {
  const { username, password } = ctx.request.body

  try {
    const newUser = await register(username, password)
    ctx.body = new SuccessModel(newUser)
  } catch(ex) {
    console.error(ex)
    ctx.body = new ErrorModel(10001, `注册失败 - ${ex.message}`)
  }
})

// 登录
router.post('/login', async function(ctx, next) {
  const { username, password } = ctx.request.body
  const res = await login(username, password)
  if (res) {
    ctx.session.userInfo = { username }
    ctx.body = new SuccessModel()
  } else {
    ctx.body = new ErrorModel(10002, '登录验证失败')
  }
})

router.get('/info', loginCheck, async function(ctx, next) {
  const session = ctx.session
  ctx.body = new SuccessModel(session.userInfo)
})

module.exports = router
