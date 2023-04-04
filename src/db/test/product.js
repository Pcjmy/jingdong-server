const Product = require('../../models/Product')

!(async() => {
  // 创建商品
  // await Product.create({
  //   shopId: '642b9052f8e7ccbfdc5f5366',
  //   name: '葡萄',
  //   imgUrl: '/images/product/grape.jpg',
  //   sales: 100,
  //   price: 33,
  //   oldPrice: 36,
  //   tabs: ['all', 'seckill', 'fruit']
  // })

  // 查询某个商店，某个tab的商品列表
  const list = await Product.find({
    shopId: '642b9052f8e7ccbfdc5f5366',
    tabs: {
      $in: 'all'
    }
  })
  console.log(list)
})()