<template>
<div class="articles">
    <Row v-if="articles.length == 0" type="flex" justify="center" align="middle">
        <h1 class="no-article"> <Icon type="md-outlet" style="color: purple;" /> 尚未发布文章。。。。</h1>
    </Row>
    <Row class="my-articles" type="flex" justify="center" align="middle">
        <Col>
            <Card v-for="(item, index) in articles" :key="index"
                style="margin: 20px 0px; width: 900px">
                <p slot="title">{{ item.title }}</p>
                <Button slot="extra" type="info" @click="editArticle(item.id)">修改文章</Button>
                <div v-html="item.content"></div>
            </Card>
        </Col>
    </Row>
</div>
</template>

<script>
export default {
    data() {
        return {
            articles: []
        }
    },

    mounted() {
        this.$axios.get('/api/article/user?id=' + this.$store.state.user.id)
        .then(m => {
            this.articles = m.data;
            for (let t in this.articles) {
                console.log('渲染前：' + this.articles[t].content);
                this.articles[t].content = this.$markdownIt().render(this.articles[t].content);
                console.log('渲染后：' + this.articles[t].content);
            }
        });
    },

    methods: {
        editArticle(id) {
            this.$store.commit('setArticle', id);
            this.$router.push('/edit');
        }
    }
}
</script>
