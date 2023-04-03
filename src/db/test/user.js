const User = require('../../models/User')

!(async() => {
  // 注册：创建一个新的用户
  // await User.create({
  //   username: 'zhangsan',
  //   password: '123456'
  // })

  // 登录：查询单个用户
  const zhangsan = await User.findOne({
    username: 'zhangsan',
    password: '123456'
  })
  console.log('zhangsan', zhangsan)

})()
