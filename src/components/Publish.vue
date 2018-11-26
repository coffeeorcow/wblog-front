<template>
    <div class="publish">
        <div class="profile">
            <Row class="title" style="margin: 10px 0px">
                <!--  添加标题 -->
                <Col :span="7">
                    <label for="title"><span style="font-size: 18px; color: orange;">标题&nbsp;</span></label>
                    <Input v-model="article.title" 
                        type="text" placeholder="title" id="title" style="width:200px" />
                </Col>
                <!-- 选择分类 -->
                <Col :span="7">
                    <label for="category"><span style="font-size: 15px; color: purple">分类&nbsp;</span></label>
                    <Select id="category"
                        v-model="cateName"
                        filterable
                        remote
                        :remote-method="getCates"
                        :loading="loading"
                        style="width:200px">
                        <Option v-for="(option, index) in cates" :value="option.cateName" :key="index">{{ option.cateName }}</Option>
                    </Select>
                </Col>
                <!-- 添加标签 -->
                <Col :span="7">
                    <label for="tags"><span style="font-size: 15px; color: green;">Tags</span></label>
                    <Input type="text" v-model="tagName" @on-enter="addTag" 
                        placeholder="添加标签" style="width:200px;" id="tags"/>
                </Col>
                <Col :span="3">
                    <Button type="info" style="float: right; margin-right: 20px;" @click="publish">发表</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span style="color: red;">添加标签，分类、管理、查找等更方便！</span>
                    <!-- 此处显示所选择的标签 -->
                    <Tag v-for="(item,index) in tags" 
                    :key="index" :name="item" closable @on-close="closeTag">
                        {{ item }} 
                    </Tag>
                </Col>
            </Row>
        </div>
        <i-editor v-model="article.content" class="editor" :autosize="style"></i-editor>
    </div>
</template>

<script>
export default {
    data() {
        return {
            style: {
                minRows: 20,
                maxRows: 40
            },
            loading: false,
            cates: [],
            tags: [],
            tagName: '',
            cateName: '',

            // 文章信息
            article : {
                title: '',
                content: '',
                user: {
                    id: 0
                },
                cate: {
                    id: 0,
                    cateName: ''
                },
                tags: []
            }
            
        }
    },

    methods: {

        publish() {
            // 设置用户信息
            this.article.user.id = this.$store.state.user.id;
            // 验证文章信息的完整性和有效性
            if (this.article.title == '') {
                alert('标题不能位空！');
                return;
            } else if (this.cateName == '' || this.cates.length == 0) {
                alert('没有该分类，请选择已有分类!');
                return;
            } else if (this.article.user.id == null || this.article.user.id == 0) {
                alert('请先登录！');
                this.$router.push('/login');
                return;
            } else if(this.content == '') {
                alert('文章内容不能位空！');
            }
            // 组装文章信息
            this.article.cate = this.cates[0];
            console.log(this.article.cate);

            for (let t = 0; t < this.tags.length; t++) {
                this.article.tags.push({tagName: tags[t]});
            }

            // 发表文章
            console.log(this.article);
            this.$axios.post('/article/add', this.article)
            .then(m => {
                console.log(m.data);
            });
        },

        // 添加标签
        addTag() {
            // console.log('added tag is ' + this.tagName);
            if (this.tagName!='') {
                this.tags.push(this.tagName);
            }
            this.tagName = '';
        },

        // 删除标签
        closeTag(event, name) {
            // console.log('deleted ' + name);
            let index = this.tags.indexOf(name);
            this.tags.splice(index, 1);
        },

        // 获取分类
        getCates(query) {
            if (query != '') {
                this.loading = true;
                // 请求分类信息
                // console.log('query:' + query);
                this.$axios.get('/cate/like?cateName=' + query)
                .then(m => {
                    this.cates = m.data;
                    this.loading = false;
                });
            } else {
                this.loading = true;
                // console.log('query is : ' + query);
                this.$axios.get('/cate/all')
                .then(m => {
                    this.cates = m.data;
                    this.loading = false;
                });
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
.profile {
    margin-bottom: 10px;
}
</style>
