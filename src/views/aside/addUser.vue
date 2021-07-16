<template>
 <div class="main-container">
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="姓名">
    <el-col :span='11'>
    <el-input v-model="form.name"  @blur='checkName'></el-input>
    </el-col>
    <el-col :span='11' class="check" v-show='checkNameShow'>请输入2-4个中文字符</el-col>
 </el-form-item>
  <el-form-item label="工号">
    <el-col :span='11'>
    <el-input v-model="form.number" @blur='checkNumber'></el-input>
    </el-col>
    <el-col :span='11' class="check"  v-show='checkNumberShow'>请输入6个数字</el-col>
  </el-form-item>
  <el-form-item label="性别">
    <el-select v-model="form.gender" placeholder="性别" >
      <el-option label="男" value="shanghai"></el-option>
      <el-option label="女" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="入职时间">
    <el-col :span="5">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="权限">
    <el-checkbox-group v-model="form.power">
      <el-checkbox label="查询" :disabled='true' name="type"></el-checkbox>
      <el-checkbox label="编辑" name="type"></el-checkbox>
      <el-checkbox label="删除" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="住址">
    <el-col :span='11'>
      <el-input type="textarea" v-model="form.address" @blur="checkAddress"></el-input>
    </el-col>
    <el-col :span='11' class="check"  v-show='checkAddressShow'>不能为空</el-col>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
 </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        gender: '',
        date: '',
        delivery: false,
        power: ['查询'],
        resource: '',
        address: '',
        number: ''
      },
      checkNameShow: false,
      checkNumberShow: false,
      checkAddressShow: false
    }
  },
  methods: {
    onSubmit () {
      this.checkName()
      this.checkNumber()
      this.checkAddress()
      if (!this.checkNameShow && !this.checkNumberShow && !this.checkAddressShow) {
        this.$store.commit('addUser', this.form)
        this.$notify({
          title: '提示',
          message: '创建成功',
          position: 'top-left',
          type: 'success',
          duration: 1500
        })
      } else {
        this.$notify.error({
          title: '提示',
          message: '输入的内容有误',
          position: 'top-left',
          duration: 1500
        })
      }
    },
    checkName () {
      const reg = /^[\u4e00-\u9fa5]{2,4}$/
      console.log(reg.test(this.form.name))
      if (reg.test(this.form.name)) {
        this.checkNameShow = false
      } else {
        this.checkNameShow = true
      }
    },
    checkNumber () {
      const reg = /^[0-9]{6}$/
      console.log(reg.test(this.form.number))
      if (reg.test(this.form.number)) {
        this.checkNumberShow = false
      } else {
        this.checkNumberShow = true
      }
    },
    checkAddress () {
      if (this.form.address.length > 0) {
        this.checkAddressShow = false
      } else {
        this.checkAddressShow = true
      }
    }
  }
}
</script>
