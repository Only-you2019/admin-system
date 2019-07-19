<template>
    <div class="HTChildrensBooksMain">
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
        name: "HTChildrensBooksMain",
        data() {
            return {
                tableData: [{
                    date: '0001',
                    Title: '中国儿童文学新世界 怪兽村',
                    Press:'世界图书出版公司',
                    name:'小酷哥哥',
                    Price:"23.75",
                    category:"少儿童书"
                }, {
                    date: '0002',
                    Title: '神奇动物:格林德沃之罪',
                    Press:'人民文学出版社',
                    name:'j.k.罗琳',
                    Price:"56.05",
                    category:"少儿童书"
                }, {
                    date: '0003',
                    Title: '“愤怒的小鸟”大电影全新动漫故事2：真正的朋友',
                    Press:'人民文学出版社',
                    name:'芬兰罗威欧公司',
                    Price:"¥33.25",
                    category:"少儿童书"
                }, {
                    date: '0004',
                    Title: '银色独角兽：我想变得与众不同',
                    Press:'人民文学出版社',
                    name:'保罗 比格尔',
                    Price:"¥35.00",
                    category:"少儿童书"
                }, {
                    date: '0005',
                    Title: '中国女排(永不言弃的王者之师)/中华先锋人物故事汇/中华人物故事汇',
                    Press:'党建读物出版社',
                    name:'葛竞',
                    Price:"17.10",
                    category:"少儿童书"
                }, {
                    date: '0006',
                    Title: '中国神话故事',
                    Press:'北京联合出版公司',
                    name:'袁珂',
                    Price:"28.00",
                    category:"少儿童书"
                }, {
                    date: '0007',
                    Title: '宝葫芦的秘密',
                    Press:'延边大学出版社',
                    name:'张天翼',
                    Price:"18.81",
                    category:"少儿童书"
                }, {
                    date: '0008',
                    Title: '故宫里的大怪兽',
                    Press:'中国大百科全书出版社',
                    name:'常怡',
                    Price:"33.25",
                    category:"少儿童书"
                }, {
                    date: '0009',
                    Title: '神探鹰之队',
                    Press:'中国友谊出版社',
                    name:'董恒波',
                    Price:"28.31",
                    category:"少儿童书"
                }, {
                    date: '0010',
                    Title: '好狐狸坏狐狸/动物联盟',
                    Press:'明天出版社',
                    name:'沈石溪/李花三吉',
                    Price:"20.90",
                    category:"少儿童书"
                }, {
                    date: '0011',
                    Title: '小鲤鱼跃龙门',
                    Press:'长江少年儿童出版社有限公司',
                    name:'金近',
                    Price:"23.75",
                    category:"少儿童书"
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
    .HTChildrensBooksMain{
        padding: 20px 100px;
    }
</style>
