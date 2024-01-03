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
                <el-col :span="12">
                走马灯
                </el-col>
                <el-col :span="5">
                    <el-row>
                        <Login @Login="Login" @register="register" />
                    </el-row>
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
    import Login from '../components/loginCom'
    import Register from '../components/registerCom'
    export default {
        name: 'LoginView',
        components: {
            Login,
            Register
        },
        data(){
            return {
                registerVisible: false
            }
        },
        methods: {
            Login(form,type){
                console.log(form,type)
            },
            register(showRegister){
                this.registerVisible = showRegister.register
            },
            closeRegister(done){
                this.$confirm('确认关闭吗？').then(_ => {
                    done();
                }).catch(_ => {})
            },
            registerSuc(whe){
                this.registerVisible = whe
            },
            restRegister(){
                this.registerVisible = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
