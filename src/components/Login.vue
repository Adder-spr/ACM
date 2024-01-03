<template>
  <div>
    <el-row>
      <el-row :gutter="20">
        <el-col :span="3">了解</el-col>
        <el-col :span="3">接触</el-col>
        <el-col :span="3">联系</el-col>
        <el-col :span="3">修改</el-col>
        <el-col :span="3">申请</el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          走马灯
        </el-col>
        <el-col :span="5" :gutter="1">
          <el-row>
            <el-tabs type="border-card" stretch>
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
          </el-row>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      form: {
        account:'',
        psd:'',
        code_psd:'',
        emil:'',
        code_emil:''
      }
    }
  },
  methods: {
    Login(){
      
    },
    register(){
      
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
