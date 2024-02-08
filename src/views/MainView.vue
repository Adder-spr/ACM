<template>
    <div style="display: flex;">
        <div style="max-width: 12%;">
            <el-menu 
            :default-active="defaultActive"
            router
            :collapse="isCollapse"
            unique-opened
            class="load"
            background-color="#f5f5f5"
            text-color="#ce93d8"
            active-text-color="#409EFF"
            >
                <div @click="isCollapse = !isCollapse" style="color: #72d572;height: 40px;line-height: 40px;font-size: 20px;">
                    <i class="el-icon-s-unfold" v-if="isCollapse"></i>
                    <i class="el-icon-s-fold" v-if="!isCollapse"></i>
                </div>
                <el-submenu v-for="item in menu" :key="item.title" :index="item.title">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="Path in item.children" :index="Path.path" :key="Path.path" @click="changePage(Path.path)" style="padding-left: 75px;">{{ Path.title }}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <div style="min-width: 88%;">
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    name:'MainView',
    data(){
        return {
            isCollapse: false,
            defaultActive: '',
            menu:[
                {
                    icon: 'el-icon-document',
                    title: '注册审核',
                    children: [
                        {
                            title: '商户注册审核',
                            path:'/main/ad_businesses'
                        },
                        {
                            title:'农户注册审核',
                            path:'/main/ad_farmers'
                        }
                    ]
                },
                {
                    icon: 'el-icon-notebook-2',
                    title: '预约管理',
                    children: [
                        {
                            title: '已完成',
                            path:'/main/ordersFin'
                        },
                        {
                            title:'进行中',
                            path:'/main/ordersPro'
                        },
                        {
                            title:'未完成',
                            path:'/main/ordersUnFin'
                        }
                    ]
                },
                {
                    icon: 'el-icon-reading',
                    title: '系统日志',
                    children: [
                        {
                            title: '成功日志',
                            path:'/main/sucLog'
                        },
                        {
                            title:'失败日志',
                            path:'/main/failLog'
                        },
                        {
                            title:'警告日志',
                            path:'/main/warnLog'
                        },
                        {
                            title:'错误日志',
                            path:'/main/errorLog'
                        }
                    ]
                },
                {
                    icon: 'el-icon-user',
                    title: '个人中心',
                    children: [
                        {
                            title: '个人信息',
                            path:'/main/personal'
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        changePage(path){
            sessionStorage.setItem('path',path)
        }
    },
    mounted(){
        this.defaultActive = sessionStorage.getItem('path');
    }
}
</script>
<style scoped>
 .load {
    z-index: 1;
    max-width: 100%;
    min-height: 100vh;
 }
</style>