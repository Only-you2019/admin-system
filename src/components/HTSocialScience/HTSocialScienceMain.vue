<template>
    <div class="HTSocialScienceMain">
        <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column
                    label="ID">
                <template slot-scope="scope">
                    <span>{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="书名">
                <template slot-scope="scope">
                    <span>{{ scope.row.Title }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="出版社">
                <template slot-scope="scope">
                    <span>{{ scope.row.Press }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="作者">
                <template slot-scope="scope">
                    <span>{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="价格">
                <template slot-scope="scope">
                    <span>{{ scope.row.Price }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="类别">
                <template slot-scope="scope">
                    <span>{{ scope.row.category }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "HTSocialScienceMain",
        data() {
            return {
                tableData: [{
                    date: '0001',
                    Title: '新中国成立初期延安地区社会变迁研究',
                    Press:'中国社会科学出版社',
                    name:'张雪梅',
                    Price:"71.25",
                    category:"人文社科"
                }, {
                    date: '0002',
                    Title: '史记',
                    Press:'中华书局',
                    name:'(汉)司马迁',
                    Price:"560.50",
                    category:"人文社科"
                }, {
                    date: '0003',
                    Title: '大汗天下',
                    Press:'中国铁道出版社',
                    name:'丁守卫',
                    Price:"56.81",
                    category:"人文社科"
                }, {
                    date: '0004',
                    Title: '三国史话',
                    Press:'北京人民出版社',
                    name:'吕思勉',
                    Price:"17.10",
                    category:"人文社科"
                }, {
                    date: '0005',
                    Title: '延安时期青年学生的史学教育与社会实践',
                    Press:'中国科学出版社',
                    name:'杨东',
                    Price:"61.75",
                    category:"人文社科"
                }, {
                    date: '0006',
                    Title: '杏坛追梦我思我在',
                    Press:'光明日报出版社',
                    name:'汪瀛',
                    Price:"55.10",
                    category:"人文社科"
                }, {
                    date: '0007',
                    Title: '华大史学论坛',
                    Press:'华中师范大学出版社',
                    name:'吴琦',
                    Price:"45.60",
                    category:"人文社科"
                }, {
                    date: '0008',
                    Title: '道德经',
                    Press:'凤凰出版社',
                    name:'(春秋)老子',
                    Price:"55.10",
                    category:"人文社科"
                }, {
                    date: '0009',
                    Title: '穿越春秋品管仲',
                    Press:'中国青年出版社',
                    name:'李任飞',
                    Price:"45.60",
                    category:"人文社科"
                }, {
                    date: '0010',
                    Title: '庄子发微',
                    Press:'上海古籍出版社',
                    name:'钟泰',
                    Price:"85.50",
                    category:"人文社科"
                }, {
                    date: '0011',
                    Title: '儒学小史',
                    Press:'上海人民社出版',
                    name:'干春松',
                    Price:"56.05",
                    category:"人文社科"
                }]
            }
        },
        methods: {
            handleEdit() {
                console.log("编辑");
            },
            handleDelete() {
                console.log("删除");
            }
        }
    }
</script>

<style scoped>
    .HTSocialScienceMain{
        padding: 20px 100px;
    }
</style>
