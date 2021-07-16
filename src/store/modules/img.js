const imgs = [
  {
    name: '汉堡1',
    url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    remarks: '哈弗哦哈诉法随风噶苏高法欧莎',
    time: '2020-02-05 15:15:50'
  },
  {
    name: '汉堡2',
    url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    remarks: '哈弗哦哈诉法随风噶苏高法欧莎',
    time: '2020-02-05 15:15:50'
  },
  {
    name: '汉堡3',
    url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    remarks: '哈弗哦哈诉法随风噶苏高法欧莎',
    time: '2020-02-05 15:15:50'
  },
  {
    name: '汉堡4',
    url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    remarks: '哈弗哦哈诉法随风噶苏高法欧莎',
    time: '2020-02-05 15:15:50'
  }
]
const imgsModule = {
  state: () => ({
    imgs
  }),
  mutations: {
    upload (state, data) {
      state.imgs.push({ ...data })
    }
  }
}

module.exports = imgsModule
