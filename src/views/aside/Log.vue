<template>
  <div class="main-container">
    <div class="block">
      <el-timeline class="timeline">
        <el-timeline-item v-for="(item, index) in logs" :key='index' :timestamp="item.time" placement="top">
          <el-card>
            <h4>{{ item.content }}</h4>
            <p>{{ item.username }} 提交于 {{ item.time }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    logs () {
      return this.$store.state.logsModule.logs
    }
  }
}
</script>
<style lang="less">
.timeline {
  width: 100%;
}
</style>
