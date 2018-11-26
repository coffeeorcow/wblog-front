<template>
    <div class="edit">
        <br>
        <Button type="info" @click="updateArticle">确认修改</Button>
        <br>
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
            article: {}
        }
    },

    mounted() {
        let id = this.$store.state.article.id;
        this.$axios.get('/article/get?id=' + id)
        .then(m => this.article = m.data);
    },

    methods: {
        updateArticle() {
            this.$axios.post('/article/update', {
                "id": this.article.id,
                "title": this.article.title,
                "content": this.article.content
            })
            .then(m => {
                alert(m.data.msg);
            })
        }
    }
}
</script>
