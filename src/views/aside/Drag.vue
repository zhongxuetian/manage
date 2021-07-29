<template>
  <div class="box">
    <div draggable="true" @dragstart="drag($event)">可拖拽</div>
    <div class="b" v-drag='{d:list}' >
      <p v-for="item in list" :key='item'>{{ item }}</p>
    </div>
    <div class="b"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [1]
    }
  },
  created () {},
  methods: {
    // allowDrop (ev) {
    //   ev.preventDefault()
    // },
    drag (ev, d) {
      ev.dataTransfer.setData('text', d)
    }
    // drop (ev) {
    //   ev.preventDefault()
    //   //   var data = ev.dataTransfer.getData('text')
    //   //   ev.target.appendChild(document.getElementById(data))
    // }
  }
}
</script>
<style lang="less" scoped>
.box {
  background: #eee;
  height: 100%;
  .b {
    height: 200px;
    width: 200px;
    border: 1px solid red;
  }
}
</style>
