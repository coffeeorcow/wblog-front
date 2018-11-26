<template>
<div class="comment">
    <Row v-if="comments.length == 0" type="flex" justify="center" align="middle">
        <h1 class="no-comments"> <Icon type="md-outlet" style="color: purple;"/> 你目前还没有评论过文章 </h1>
    </Row>
    <Row class="comment" type="flex" justify="center" align="middle">
        <Col>
            <Card v-for="(item, index) in comments" :key="index"
                style="margin: 20px 0px; width: 900px">
                <p slot="title">在 <Time :time="item.createdTime" /> 对 {{ item.article.content }} 进行了如下评论:</p>
                <p> {{ item.content }} </p>
            </Card>
        </Col>
    </Row>
</div>
</template>

<script>
export default {
    data() {
        return {
            comments: []
        }
    },

    mounted() {
        console.log('执行 mounted..')
        this.$axios.get('/comment/user?userId=' + this.$store.state.user.id)
        .then(m => {
            this.comments = m.data;
            for (let i in this.comments) {
            this.comments[i].createdTime = new Date(String(this.comments[i].createdTime).replace('T', ' ').replace('-', '/').slice(0, 19));
            }
            console.log('commnets: ');
            console.log(this.comments);
        });
    }
}
</script>
