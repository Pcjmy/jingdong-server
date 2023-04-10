const User = require('../models/User')

// 注册
async function register(username, password) {
  // 保存到数据库
  const newUser = await User.create({username, password})
  return newUser
}

module.exprots = {
  register
}