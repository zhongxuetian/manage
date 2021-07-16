
const user = {
  list: [{
    number: '5465561',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    power: {
      browse: true,
      update: true,
      del: true
    }
  },
  {
    number: '5465561',
    name: '王da虎',
    address: '上海市普陀区金沙江路 1517 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '路费',
    address: '上海市普陀区金沙江路 1519 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '雷利',
    address: '上海市普陀区金沙江路 1516 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '王da虎',
    address: '上海市普陀区金沙江路 1517 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '路费',
    address: '上海市普陀区金沙江路 1519 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '雷利',
    address: '上海市普陀区金沙江路 1516 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '王da虎',
    address: '上海市普陀区金沙江路 1517 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '路费',
    address: '上海市普陀区金沙江路 1519 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '雷利',
    address: '上海市普陀区金沙江路 1516 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '王da虎',
    address: '上海市普陀区金沙江路 1517 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '路费',
    address: '上海市普陀区金沙江路 1519 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '雷利',
    address: '上海市普陀区金沙江路 1516 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '王da虎',
    address: '上海市普陀区金沙江路 1517 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '路费',
    address: '上海市普陀区金沙江路 1519 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '雷利',
    address: '上海市普陀区金沙江路 1516 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '王da虎',
    address: '上海市普陀区金沙江路 1517 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '路费',
    address: '上海市普陀区金沙江路 1519 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '雷利',
    address: '上海市普陀区金沙江路 1516 弄',
    power: {}
  },
  {
    number: '5465561',
    name: '王da虎',
    address: '上海市普陀区金沙江路 1517 弄',
    power: {}
  }
  ],
  userPower: {
    v: null,
    get () {
      return this.v
    },
    set (v) {
      this.v = v
    }
  }
}
const userModule = {
  state: () => ({
    user
  }),
  mutations: {
    userPower (state, data) {
      state.user.userPower = data.v
    },
    updatePower (state, data) {
      data.o.power = data.v
    },
    addUser (state, data) {
      const power = {}
      data.power.forEach(item => {
        switch (item) {
          case '查询':
            power.browse = true
            break
          case '编辑':
            power.update = true
            break
          case '删除':
            power.del = true
            break
        }
      })
      const o = {
        number: data.number,
        name: data.name,
        address: data.address,
        power: power
      }
      state.user.list.push(o)
    }
  }
}
export default userModule
