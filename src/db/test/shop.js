const Shop = require('../../models/Shop')

!(async() => {
  // 创建两个商店
  await Shop.create({
    name: '沃尔玛',
    imgUrl: '/images/shop/wmt.jpeg',
    sales: 10000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: ''
  })
})()
