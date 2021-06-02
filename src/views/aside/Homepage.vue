<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="u">
          <div class="l">
            <img :src="squareUrl" alt="" class="user-avator">
          </div>
          <div class="r">
            <div class="username">123</div>
            <div class="opertion">
              <a href="javascript:;">退出</a>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">2</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }
  }
}
</script>
<style lang="less" scope>
.u{
  border:1px solid red;
  display: flex;
  height: 150px;
  box-sizing: border-box;
  padding: 20px;
  .l{
    width: 120px;
    .user-avator{
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
