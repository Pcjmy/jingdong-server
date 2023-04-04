const Address = require('../../models/Address')

!(async() => {
  // 创建收获地址
  // await Address.create({
  //   username: 'zhangsan',
  //   city: 'ZhengZhou',
  //   department: '',
  //   houseNumber: '',
  //   name: '张三',
  //   phone: ''
  // })

  // 获取收到货地址列表
  // const addressList = await Address.find({ username: 'zhangsan' }).sort({updateAt: -1})
  // console.log(addressList)

  // 根据id获取单个收获地址
  // const id = '642b893a52d85a95d411dfe6'
  // const address = await Address.findById(id)
  // console.log(address)

  // 更新收获地址
  const id = '642b893a52d85a95d411dfe6'
  const newData = {
    username: 'zhangsan',
    city: 'ZhengZhou',
    department: 'School',
    houseNumber: '',
    name: '张三',
    phone: ''
  }
  const address = await Address.findOneAndUpdate(
    { _id: id, username: 'zhangsan' },
    newData,
    {
      new: true // 返回更新之后的最新数据（默认是false, 返回更新之前的数据）
    }
  )
  console.log(address)
})()