<template>
  <div>
    <el-tabs type="border-card" stretch @tab-click="LoginType">
      <el-tab-pane label="账号密码登录">
        <el-form ref="form" :model="form" label-width="70px">
          <el-form-item label="账号：">
            <el-input v-model="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="form.psd"></el-input>
          </el-form-item>
          <el-form-item label="验证码：">
            <el-col :span="13">
              <el-input placeholder="输入验证码" v-model="form.code_psd"/>
            </el-col>
            <!-- <el-col class="line" :span="2">|</el-col> -->
            <el-col :span="9" :offset="2">
              <el-image src="https://img.pconline.com.cn/images/bbs4/200810/17/1224206085128.jpg" style="height: 40px;width:105px;"></el-image>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col :span="6" :offset="2">
                <el-button type="primary" @click="Login">登录</el-button>
              </el-col>
              <el-col :span="6" :offset="3">
                <el-button @click="register">注册</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="邮箱登录">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="邮箱：">
            <el-input v-model="form.emil"></el-input>
          </el-form-item>
          <el-form-item label="验证码：">
            <el-input v-model="form.code_emil"></el-input>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col :span="4" :offset="3">
                <el-button type="primary" @click="Login" style="width: 120px;">登录</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'loginCom',
  data(){
    return {
      form: {
        account:'',
        psd:'',
        code_psd:'',
        emil:'',
        code_emil:''
      },
      type: 0,
    }
  },
  methods: {
    Login(){
      this.$emit('Login',this.form,this.type)
    },
    register(){
      this.$emit('register',{register:true})
    },
    LoginType(info){
      let type = info.type
      if(type != this.type){
        Object.keys(this.form).forEach(key => { this.form[key] = '' })
      }
      this.type = info.index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .line {
    text-align: center;
  }

</style>
