<template>
  <div class="main-container">
    <el-form label-width="40px">
      <el-form-item label="图片">
        <el-upload
          class="avatar-uploader"
          action="/"
          :show-file-list="false"
          :on-progress="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="form.url" :src="form.url" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题">
        <el-col :lg="8" :span="18">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="备注">
        <el-col :lg="8" :span="18">
          <el-input type="textarea" v-model="form.remarks"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label>
        <el-button type="primary" @click="onSubmit">上传</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.form.url = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    init () {
      this.form = {
        url: '',
        remarks: '',
        name: ''
      }
    },
    onSubmit () {
      const form = this.form
      if (form.name && form.remarks && form.url) {
        this.$store.commit('upload', { ...form, time: this.$funs.getDate() })
        this.init()
        this.$notify({
          title: '提示',
          message: '上传成功',
          position: 'top-left',
          type: 'success',
          duration: 1500
        })
      } else {
        this.$notify.error({
          title: '提示',
          message: '内容不能为空',
          position: 'top-left',
          duration: 1500
        })
      }
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
