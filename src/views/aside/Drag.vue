<template>
    <div class="container">
        <div class="title">
            <draggable
                    v-model="list"
                    group="site"
                    animation="300"
                    dragClass="dragClass"
                    ghostClass="ghostClass"
                    chosenClass="chosenClass"
                    @start="onStart"
                    @end="onEnd"
                >
                    <transition-group>
                        <div class="item" v-for="item in list" :key="item.id">{{item.name}}</div>
                    </transition-group>
                </draggable>
        </div>
        <div class="box">
            <!-- <div draggable="true" @dragstart="drag($event)">可拖拽</div> -->
            <div class="b" v-drag>
                <div class="move">移动</div>
                <draggable
                    v-model="arr1"
                    group="site"
                    animation="300"
                    dragClass="dragClass"
                    ghostClass="ghostClass"
                    chosenClass="chosenClass"
                    @start="onStart"
                    @end="onEnd"
                >
                    <transition-group>
                        <div class="item" v-for="item in arr1" :key="item.id">{{item.name}}</div>
                    </transition-group>
                </draggable>
            </div>
            <div class="b" v-drag>
                <div class="move">移动</div>
                <draggable
                    v-model="arr2"
                    group="site"
                    animation="300"
                    dragClass="dragClass"
                    ghostClass="ghostClass"
                    chosenClass="chosenClass"
                    @start="onStart"
                    @end="onEnd"
                >
                    <transition-group>
                        <div class="item" v-for="item in arr2" :key="item.id">{{item.name}}</div>
                    </transition-group>
                </draggable>
            </div>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  data () {
    return {
      drag: false,
      list: [
        { id: 11, name: 'www.11.com' },
        { id: 12, name: 'www.22.com' },
        { id: 13, name: 'www.33.com' },
        { id: 14, name: 'www.44.com' }
      ],
      arr1: [
        { id: 1, name: 'www.itxst.com' },
        { id: 2, name: 'www.jd.com' },
        { id: 3, name: 'www.baidu.com' },
        { id: 4, name: 'www.taobao.com' }
      ],
      arr2: [
        { id: 5, name: 'www.google.com' },
        { id: 6, name: 'www.msn.com' },
        { id: 7, name: 'www.ebay.com' },
        { id: 8, name: 'www.yahoo.com' }
      ]
    }
  },
  created () {},
  methods: {
    // allowDrop (ev) {
    //   ev.preventDefault()
    // },
    // drag (ev, d) {
    //   ev.dataTransfer.setData('text', d)
    // },
    // drop (ev) {
    //   ev.preventDefault()
    //   //   var data = ev.dataTransfer.getData('text')
    //   //   ev.target.appendChild(document.getElementById(data))
    // }
    // 开始拖拽事件
    onStart () {
      this.drag = true
    },
    // 拖拽结束事件
    onEnd () {
      this.drag = false
    }

  },
  components: {
    draggable
  }
}
</script>
<style lang="less" scoped>
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.box {
    background: #eee;
    height: 100%;
    flex-grow: 1;
    .b {
        height: 200px;
        width: 200px;
        border: 1px solid red;
        background: red;
    }
}
.ghostClass{
  background-color:  blue !important;
}
.chosenClass{
  background-color: red !important;
  opacity: 1!important;
}
.dragClass{
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow:none !important;
  outline:none !important;
  background-image:none !important;
}
.itxst{
  margin: 10px;

}
.title{
  padding: 6px 12px;
}
.col{
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius:5px ;
  float: left;
}
.col+.col{
 margin-left: 10px;
}

.item{
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border:  solid 1px #eee;
   background-color: #f1f1f1;
}
.item:hover{
  background-color: #fdfdfd;
  cursor: move;
}
.item+.item{
  border-top:none ;
  margin-top: 6px;
}
</style>
