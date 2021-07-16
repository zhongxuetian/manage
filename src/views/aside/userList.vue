<template>
  <div class="main-container">
    <p class="title">用户列表</p>
    <el-table :data="showList" border style="width: 100%">
      <el-table-column prop="number" label="工号" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="address" label="权限">
        <template slot-scope="scope">
          <el-tag type>查询</el-tag>
          <el-tag
            v-if="scope.row.power && scope.row.power.update"
            type="success"
            style="margin-left:10px;"
          >编辑</el-tag>
          <el-tag
            v-if="scope.row.power && scope.row.power.del"
            type="warning"
            style="margin-left:10px;"
          >删除</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="open(scope.row)" type="text" size="small">权限</el-button>
        </template>
      </el-table-column>
    </el-table>
      <el-pagination
    layout="prev, pager, next, total"
    @current-change='updatePage'
    :page-size='pageSize'
    :total="tableData.length">
  </el-pagination>
    <power-dialog
      ref="power"
      :dialogPowerVisible="dialogPowerVisible"
      :userInfo="userInfo"
      @close="close"
      @savePower="savePower(arguments)"
    ></power-dialog>
  </div>
</template>

<script>
import powerDialog from '@/components/PowerMessage.vue'
export default {
  data () {
    return {
      dialogPowerVisible: false,
      userInfo: {},
      pageSize: 10,
      currentPage: 1
    }
  },
  computed: {
    tableData () {
      return this.$store.state.userModule.user.list
    },
    showList () {
      return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  },
  methods: {
    open (row) {
      this.$store.commit('userPower', { v: row })
      this.userInfo = row
      this.dialogPowerVisible = true
    },
    savePower (msg) {
      console.log(msg)
    },
    close () {
      this.dialogPowerVisible = false
    },
    updatePage (current) {
      this.currentPage = current
      console.log(current)
    }
  },
  components: {
    powerDialog
  }
}
</script>
