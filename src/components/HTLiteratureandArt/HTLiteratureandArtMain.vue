<template>
    <div class="HTLiteratureandArtMain">
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
        name: "HTLiteratureandArtMain",
        data() {
            return {
                tableData: [{
                    date: '0001',
                    Title: '家',
                    Press:'吉林大学出版社',
                    name:'巴金',
                    Price:"45.60",
                    category:"文学艺术"
                }, {
                    date: '0002',
                    Title: '你有一份初恋请签收',
                    Press:'贵州人民出版社',
                    name:'子非鱼//森木岛屿//冬三儿',
                    Price:"34.01",
                    category:"文学艺术"
                }, {
                    date: '0003',
                    Title: '小河山',
                    Press:'花山文艺出版社',
                    name:'长宇宙',
                    Price:"36.10",
                    category:"文学艺术"
                }, {
                    date: '0004',
                    Title: '初恋的小鹿怦怦跳',
                    Press:'百花洲文艺出版社',
                    name:'鹿拾尔',
                    Price:"34.90",
                    category:"文学艺术"
                }, {
                    date: '0005',
                    Title: '小娇妻',
                    Press:'江苏文艺出版社',
                    name:'洛心辰',
                    Price:"36.86",
                    category:"文学艺术"
                }, {
                    date: '0006',
                    Title: '我的小哥哥',
                    Press:'百花洲文艺出版社',
                    name:'城南花开',
                    Price:"36.10",
                    category:"文学艺术"
                }, {
                    date: '0007',
                    Title: '我的男朋友呀他是草莓味的',
                    Press:'江苏文艺出版社',
                    name:'周寒舟',
                    Price:"36.10",
                    category:"文学艺术"
                }, {
                    date: '0008',
                    Title: '杂牌军',
                    Press:'江苏文艺出版社',
                    name:'陈建波',
                    Price:"42.76",
                    category:"文学艺术"
                }, {
                    date: '0009',
                    Title: '我喜欢他但是我迟到了',
                    Press:'广东人民出版社',
                    name:'痞子蔡',
                    Price:"42.75",
                    category:"文学艺术"
                }, {
                    date: '0010',
                    Title: '他像风一样自由',
                    Press:'贵州人民出版社',
                    name:'子非鱼',
                    Price:"34.96",
                    category:"文学艺术"
                }, {
                    date: '0011',
                    Title: '白雪覆盖的大地',
                    Press:'安徽文艺出版社出版',
                    name:'黄梅宝',
                    Price:"47.31",
                    category:"文学艺术"
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
    .HTLiteratureandArtMain{
        padding: 20px 100px;
    }
</style>
