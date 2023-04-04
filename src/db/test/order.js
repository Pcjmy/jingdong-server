const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')

!(async() => {
  // 创建订单
  const requestBody = {
    addressId: '642b893a52d85a95d411dfe6',
    shopId: '642b9052f8e7ccbfdc5f5366',
    shopName: '沃尔玛',
    isCanceled: false, // 订单是否被取消
    products: [
      {
        id: '642b953f746b1c88f2398262',
        num: 3
      }
    ]
  }
  // 获取address
  const address = await Address.findById(requestBody.addressId)

  // 获取商品列表
  const pIds = requestBody.products.map(p => p.id)
  const productList = await Product.find({
    shopId: requestBody.shopId, // 沃尔玛的商品
    _id: {
      $in: pIds
    }
  })

  // 整合订单购买数量
  const productListWidthSales = productList.map(p => {
    // 商品id
    const id = p._id.toString()

    // 找到商品的购买数量
    const filterProducts = requestBody.products.filter(item => item.id === id)
    if (filterProducts.length === 0) {
      throw Error('未找到匹配的销量数据')
    }

    return {
      product: p,
      orderSales: filterProducts[0].num
    }
  })

  await Order.create({
    username: 'zhangsan',
    shopId: requestBody.shopId,
    shopName: requestBody.shopName,
    isCanceled: requestBody.isCanceled,
    address,
    products: productListWidthSales
  })

})()
