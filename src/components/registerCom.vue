<template>
    <div>
        <el-form label-width="90px">
            <el-form-item label="用户名：">
                <el-input  />
            </el-form-item>
            <el-form-item label="密码：">
                <el-input  type="password" show-password />
            </el-form-item>
            <el-form-item label="确认密码：">
                <el-input  type="password" show-password />
            </el-form-item>
            <el-form-item label="邮箱：">
                <el-input  />
            </el-form-item>
            <el-form-item label="验证码：">
                <el-row>
                    <el-col :span="13">
                        <el-input  />
                    </el-col>
                    <el-col :span="9" :offset="2">
                        <el-image src="https://img.pconline.com.cn/images/bbs4/200810/17/1224206085128.jpg" style="height: 40px;width:105px;"></el-image>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-row>
                    <el-col :span="3" :offset="1">
                        <el-button @click="register" type="primary">注册</el-button>
                    </el-col>
                    <el-col :span="3" :offset="8">
                        <el-button @click="rest" type="warning">取消</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name:'registerCom',
        data(){
            return {

            }
        },
        methods: {
            register(){
                this.$message({
                    type:'success',
                    message:'注册成功!'
                })
                this.$emit('register',false)
            },
            rest(){
                this.$message({
                    type:'info',
                    message:'取消注册!'
                })
                this.$emit('rest')
            }
        }
    }
</script>
<style scoped>

</style>