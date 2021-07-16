const logs = [
  {
    username: '刘亦菲',
    time: '2020/12/15 15:15:50',
    content: '更新了Github'
  },
  {
    username: '何必',
    time: '2020/12/15 20:15:50',
    content: '更新了Github'
  },
  {
    username: 'Boy',
    time: '2020/12/15 21:15:50',
    content: '更新了Github'
  }
]
const logsModule = {
  state: () => ({
    logs
  })
}

module.exports = logsModule
