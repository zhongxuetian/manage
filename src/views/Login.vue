<template>
  <div class="login-container">
    <div class="box">
      <div class="title">后台管理系统</div>
      <el-form label-width="80px" ref="form" :model="form" :rules="rules" status-icon>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"  @keyup.enter.native="login('form')" show-password placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item label>
          <el-button type="primary" @click="login('form')">登录</el-button>
          <el-button @click="re('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        password: [
          {
            validator: (rule, value, callback) => {
              if (this.form.password === '') {
                callback(new Error('请输入密码'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        username: [
          {
            validator: (rule, value, callback) => {
              if (this.form.username === '') {
                callback(new Error('请输入用户名'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const username = 'admin'
          const password = 'admin'
          if (this.form.username === username && this.form.password === password) {
            this.$funs.setCookie('username', username)
            this.$notify({
              title: '登录成功',
              type: 'success',
              position: 'top-left'
            })
            this.$router.push('/')
          } else {
            this.$notify({
              title: '用户名或密码错误',
              type: 'error',
              position: 'top-left'
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    re (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less">
.login-container {
  .box {
    .title {
      font-size: 16px;
      font-weight: 600;
      padding-bottom: 30px;
      padding-left: 20px;
      color: #409eff;
    }
    padding: 20px 80px 10px 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    -ms-transform: translate(-50%, -70%); /* IE 9 */
    -webkit-transform: translate(-50%, -70%); /* Safari and Chrome */
    width: 400px;
    height: 250px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
  }
}
</style>
