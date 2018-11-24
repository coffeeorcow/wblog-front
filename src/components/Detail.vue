<template>
    <Row class="detail" type="flex" justify="space-around" align="top" :gutter="20">
        <Col span="18" class="article">
            <div class="title">
                <h1> {{ article.title }} </h1>
                <Tag v-for="(item, index) in article.tags" :key="index" :color="color[index%7]">
                    {{ item.tagName }}
                </Tag>
                <br><br><hr class="divide-line"/><br><br>
            </div>
            <div class="content" v-html="article.content"></div>
            <br><br>
            
            <h1> 评论区 </h1>
            <Card style="margin: 20px 0px; width: 100%;">
                <Input style="width: 90%;" v-model="comment" type="textarea" :autosize="true" placeholder="对作者说点什么友好的话~" />
                <Button icon="ios-chatbubbles" type="success" @click="addComment"></Button>
            </Card>
            <Card v-for="(item, index) in article.comments" :key="index">
                <div slot="title">
                    <Avatar v-if="article.user.avatar == null || article.user.avatar == ''"
                            icon="ios-person">{{ article.user.userName }}</Avatar>
                    <Avatar v-else="item" :src="article.user.avatar"></Avatar>
                    <span>{{ }} </span>
                    <span>发布在：<Time :time="item.createdTime" /></span>
                </div>
                <p>{{item.content}}</p>
            </Card>
        </Col>
        <Col span="6">
            <Affix :offset-top="50">
                <Card>
                    <div slot="title">
                        <Avatar v-if="article.user.avatar == null || article.user.avatar == ''"
                            icon="ios-person">{{ article.user.userName }}</Avatar>
                        <Avatar v-else="item" :src="article.user.avatar"></Avatar>
                        <span>  {{ article.user.userName }} </span>
                    </div>
                    <p> 分类：{{ article.cate.cateName }}</p>
                    <p> 创建时间：
                    <Time v-if="createdTime != ''" :time="createdTime"/>
                    <span v-if="createdTime == ''">未知</span>
                    </p>
                </Card>
            </Affix>
        </Col>
    </Row>
</template>

<script>
export default {
  data() {
    return {
      article: {
          id: 0,
          title: '',
          content: '',
          createdTime: '',
          cate: {
              cateName: ''
          },
          user: {
              userName: '',
              avatar: ''
          },
          comments: []
      },
      comment: '',
      color: ['red', 'green', 'blue', 'volcano', 'purple', 'lime', 'orange', 'gold', 'yellow'],
      createdTime: '',
      msg: ''
    };
  },

  mounted() {
    let id = this.$store.state.article.id;
    this.$axios.get("/api/article/get?id=" + id).then(m => {
        this.article = m.data;
        this.createdTime = new Date(String(this.article.createdTime).replace('T', ' ').replace('-', '/').slice(0, 19));
        this.article.content = this.$markdownIt().render(this.article.content);
        for (let i in this.article.comments) {
            this.article.comments[i].createdTime = new Date(String(this.article.comments[i].createdTime).replace('T', ' ').replace('-', '/').slice(0, 19));
        }
    });
  },

  methods: {
      addComment() {
          let userId = this.$store.state.user.id;
          if (userId == 0) {
              alert('请先登录!');
              this.$router.push('/login');
              return;
          }

          let comment = this.comment.trim();
          let articleId = this.article.id;
          console.log('id is ' + articleId);
          this.$axios.post('/api/comment/add', {
              "content": comment,
              "article": {
                  "id": articleId
              },
              "user": {
                  "id": userId
              }

          }).then(m => {
              alert(m.data.msg);
          })
      }
  }
};
</script>

<style scoped>
.detail {
  margin-top: 20px;
}
.divide-line {
    /* border: 0;
    height: 0;
    box-shadow: 0 0 10px 1px black; */
}
.comment {
    margin-left: 5px;
    box-shadow:-5px -5px 10px rgba(0, 0, 0, 0.24);
}
</style>
