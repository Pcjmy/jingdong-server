const router = require('koa-router')()

const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginCheck')

router.prefix('/api/order')

// 创建订单
router.post('/', loginCheck, async function(ctx, next) {
    // 当前用户名
    const userInfo = ctx.session.userInfo
    const username = userInfo.username

    // 获取订单数据
    const data = ctx.request.body
})

module.exports = router
