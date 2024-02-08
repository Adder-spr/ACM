<template>
  <div>
    <el-row>
      <el-row>
        <el-col :span="3">了解</el-col>
        <el-col :span="3">接触</el-col>
        <el-col :span="3">联系</el-col>
        <el-col :span="3">修改</el-col>
        <el-col :span="3">申请</el-col>
      </el-row>
      <el-row>
        <el-col :span="12"> 走马灯 </el-col>
        <el-col :span="5">
          <Login @Login="Login" @register="register" />
        </el-col>
      </el-row>
    </el-row>
    <el-dialog
      title="注册"
      :visible.sync="registerVisible"
      :before-close="closeRegister"
      width="22%"
    >
      <Register @rest="restRegister" @register="registerSuc" />
    </el-dialog>
  </div>
</template>

<script>
import {Post} from "../http/http";
import Login from "../components/loginCom";
import Register from "../components/registerCom";
export default {
  name: "LoginView",
  components: {
    Login,
    Register,
  },
  data() {
    return {
      registerVisible: false,
    };
  },
  methods: {
    Login(param) {
      let params = {
        userName: param.form.account,
        password: param.form.psd
        //还差一个验证码
      }
      let url = '';
      if(param.loginType == 0){//账号密码登录
        if(param.userType == 'farmer'){
          url = '/farmer/login'
        }else if(param.userType == 'business'){
          url = '/business/login'
        }
      }else{//手机或邮箱登录
        //手机或邮箱登录
      };;;
      Post(url,params)
      .then((res) => {
        if(res.data.status === 0){
          this.$message({
            type:'warning',
            message: '登录失败!'
          })
        }else{
          this.$message({
            type:'success',
            message: '登录成功!'
          })
          let result = res.data.result;
          sessionStorage.setItem('token',result)
          this.$router.push('/main')
        }
      }).catch((err) => {
        this.$message({
            type:'error',
            message: '登录失败!'+ err.message
          })
      })
    },
    register(showRegister) {
      this.registerVisible = showRegister.register;
    },
    closeRegister(done) {
      this.$confirm("确认关闭吗？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    registerSuc(whe) {
      this.registerVisible = whe;
    },
    restRegister() {
      this.registerVisible = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
