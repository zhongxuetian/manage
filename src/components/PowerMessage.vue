<template>
  <el-dialog :title="userInfo.name+'-修改权限'" :visible.sync="dialogPowerVisible" :before-close='close'>
    <el-form>
      <el-form-item>
        <el-checkbox-group v-model="d" change="change">
          <el-checkbox
            v-for="(checkbox, index) in checkboxs"
            :label="checkbox.name"
            :key="index"
            :disabled="checkbox.disabled"
            name="type"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="savePower">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data () {
    return {
      checkboxs: [
        {
          name: '查询',
          disabled: true,
          checkbox: true
        },
        {
          name: '编辑'
        },
        {
          name: '删除'
        }
      ],
      d: []
    }
  },
  props: {
    userInfo: Object,
    dialogPowerVisible: Boolean
  },
  created () {
    // this.init()
  },
  watch: {
    userInfo () {
      this.init()
    }
  },
  computed: {
    // select: {
    //   get () {
    //     const checkboxs = this.checkboxs_init()
    //     const power = this.power || {}
    //     if (power.update) checkboxs.push('编辑')
    //     if (power.del) checkboxs.push('删除')
    //     return checkboxs
    //   }
    // }
  },
  methods: {
    init () {
      console.log(this.userInfo)
      const res = []
      const power = this.userInfo.power ? { ...this.userInfo.power } : {}

      // // if (power.browse) res.push('查询')
      res.push('查询')
      if (power.update) res.push('编辑')
      if (power.del) res.push('删除')
      // checkboxs.forEach(item => {
      //   if (item.checkbox || power)res.push(item.name)
      // })
      this.d = res
      console.log(res, power)
    },
    change (e) {
      console.log(e)
    },
    close (done) {
      this.$emit('close')
    },
    savePower () {
      const d = this.d
      const power = {}
      d.forEach(item => {
        switch (item) {
          case '查询':
            power.browse = true
            break
          case '删除' :
            power.del = true
            break
          case '编辑' :
            power.update = true
            break
        }
      })
      // this.userInfo.power = power
      this.$store.commit('updatePower', { o: this.userInfo, v: power })
      this.close()
    }
  }
}
</script>
