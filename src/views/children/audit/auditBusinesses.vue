<template>
    <div>
        <el-row style="height: 60px;line-height: 60px;background-color: beige;">
            <el-col :span="3">
                <div>今日申请：<el-button type="text" @click="requestDay">{{ statistics.request_day }}</el-button> 个</div>
            </el-col>
            <el-col :span="3">
                <div>今日通过：<el-button type="text" @click="sucDay" style="color: #67C23A;">{{ statistics.suc_day }}</el-button> 个</div>
            </el-col>
            <el-col :span="3">
                <div>今日待审核：<el-button type="text" @click="awaitDay" style="color: #E6A23C;">{{ statistics.await_day }}</el-button> 个</div>
            </el-col>
            <el-col :span="3">
                <div>今日驳回：<el-button type="text" @click="overruleDay" style="color: #EC407A;">{{ statistics.overrule_day }}</el-button> 个</div>
            </el-col>
            <el-col :span="3">
                <div>累计申请：<el-button type="text" @click="requestAll">{{ statistics.request_all }}</el-button> 个</div>
            </el-col>
            <el-col :span="3">
                <div>累计通过：<el-button type="text" @click="sucAll" style="color: #67C23A;">{{ statistics.suc_all }}</el-button> 个</div>
            </el-col>
            <el-col :span="3">
                <div>累计待审核：<el-button type="text" @click="awaitAll" style="color: #F56C6C;">{{ statistics.await_all }}</el-button> 个</div>
            </el-col>
            <el-col :span="3">
                <div>累计驳回：<el-button type="text" @click="overruleAll" style="color: #EC407A;">{{ statistics.overrule_all }}</el-button> 个</div>
            </el-col>
        </el-row>
        <el-row>
            <el-table
                :data="auditTabData"
                border
                style="width: 100%;"
            >
                <el-table-column
                    prop="id"
                    width="180"
                    label="编号"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="organization_name"
                    label="公司名称"
                    width="200"
                    align="center"
                ></el-table-column>
                <el-table-column
                    prop="responsible_name"
                    label="负责人姓名"
                    width="120"
                    align="center"
                ></el-table-column>
                <el-table-column
                    prop="responsible_IDCard"
                    label="负责人身份证"
                    width="200"
                    align="center"
                ></el-table-column>
                <el-table-column
                    prop="responsible_phone"
                    label="负责人联系方式"
                    width="150"
                    align="center"
                ></el-table-column>
                <el-table-column
                    prop="responsible_emil"
                    label="负责人邮箱"
                    width="180"
                    align="center"
                ></el-table-column>
                <el-table-column
                    prop="application_time"
                    label="申请时间"
                    width="120"
                    align="center"
                ></el-table-column>
                <el-table-column
                    prop="application_file"
                    label="申请文件"
                    width="190"
                    align="center"
                >
                    <template slot-scope="scope">
                        <div v-for="(item,index) in scope.row.application_file" :key="index">
                            <el-link type="primary">{{ item.name }}</el-link>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="audit_status"
                    label="审核状态"
                    width="80"
                    align="center"
                >
                    <template slot-scope="scope">
                        <el-tag 
                            v-if="scope.row.audit_status == '2'"
                            type="danger"
                        >
                            驳回
                        </el-tag>
                        <el-tag 
                            v-if="scope.row.audit_status == '1'"
                            type="success"
                        >
                            通过
                        </el-tag>
                        <el-tag 
                            v-if="scope.row.audit_status == '0'"
                            type="warning"
                        >
                            待审核
                        </el-tag>
                    </template>
                </el-table-column>
                <!-- 其他列、操作等 -->
                <el-table-column
                    prop="audit_SucTime"
                    label="审核通过时间"
                    width="120"
                    align="center"
                >
                    <template slot-scope="scope">
                        <span v-if="scope.row.audit_status == '1'">{{ scope.row.audit_SucTime }}</span>
                        <span v-else >-</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="audit_FailTime"
                    label="审核驳回时间"
                    width="120"
                    align="center"
                >
                    <template slot-scope="scope">
                        <span v-if="scope.row.audit_status == '2'">{{ scope.row.audit_FailTime }}</span>
                        <span v-else >-</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="audit_adminName"
                    label="审核人"
                    width="220"
                    align="center"
                >
                    <template slot-scope="scope">
                        <span style="margin-right: 5px;">{{ scope.row.audit_adminName }}</span>
                        <el-tag v-if="scope.row.audit_adminType == '1'" type="danger"  effect="dark" size="small">超级管理员</el-tag>
                        <el-tag v-if="scope.row.audit_adminType == '0'" type="success" effect="plain" size="small">管理员</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="220"
                    align="center"
                >
                    <template slot-scope="scope">
                        <el-button @click="" size="mini" type="text" v-if="scope.row.audit_status == '1'">已通过无需审核</el-button>
                        <el-button @click="" size="mini" type="text" v-if="scope.row.audit_status == '2'">已驳回无需审核</el-button>
                        <el-button @click="" size="mini" type="primary" style="color: #EC407A;" v-if="scope.row.audit_status == '0'">审核</el-button>
                        <el-button @click="" size="mini" type="primary" style="color: #EC407A;" v-if="scope.row.audit_status == '0'">驳回</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'adBusniess',
    data(){
        return {
            statistics: {
                request_day:20,
                request_all:90,
                suc_day: 10,
                suc_all: 30,
                await_day: 3,
                await_all: 12,
                overrule_day: 7,
                overrule_all: 48
            },
            auditTabData: [
                {
                    id:'524NI051DSA056',//业务编号
                    organization_name: '华都一只云农贸市场',//商户名称
                    responsible_name: '王华',//负责人姓名
                    responsible_IDCard: '510224198111085724',
                    responsible_phone: '18529457102',
                    responsible_emil: '4725981287@qq.com',//负责人邮箱
                    application_time: '2021-12-13',//提价申请时间
                    application_file:[//申请上传文件
                        {
                            name:'商户证件正面照',
                            path:''
                        },
                        {
                            name:'商户证件反面照',
                            path:''
                        },
                        {
                            name:'身份证正面照',
                            path:''
                        },
                        {
                            name:'身份证反面照',
                            path:''
                        },
                        {
                            name:'管理员使用公告',
                            path:''
                        },
                    ],
                    audit_status: '1',//审核状态['0'为未审核,'1'为已审核通过,'2'为已审核驳回]
                    audit_SucTime: '2022-06-05',//审核通过时间
                    audit_FailTime: '',//审核驳回时间
                    audit_adminType: '1',//['1'为超级管理员则不展示姓名,'0'为普通管理员则可以展示姓名]
                    audit_adminName: '*****',//审核人姓名
                }
            ]
        }
    },
    methods: {
        requestDay(){
            console.log('查询今日申请列表,在下面表格中展示出来')
        },
        sucDay(){

        },
        awaitDay(){

        },
        overruleDay(){

        },
        requestAll(){
            console.log('查询累计的申请列表,在下面表格中展示出来')
        },
        sucAll(){

        },
        awaitAll(){

        },
        overruleAll(){
            
        }
    }
}
</script>
<style scoped>
 div > button {
    font-size: 16px;
 }
</style>