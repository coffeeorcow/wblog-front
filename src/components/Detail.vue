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
            <div class="content">
                {{ article.content }}
            </div>
            <div class="comment">
            </div>
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
          }
      },
      color: ['red', 'green', 'blue', 'volcano', 'purple', 'lime', 'orange', 'gold', 'yellow'],
      createdTime: ''
    };
  },

  mounted() {
    let id = this.$store.state.article.id;
    this.$axios.get("/api/article/get?id=" + id).then(m => {
        this.article = m.data;
        this.createdTime = new Date(String(this.article.createdTime).replace('T', ' ').replace('-', '/').slice(0, 19));
    });
  }
};
</script>

<style scoped>
.detail {
  margin-top: 20px;
}
.divide-line {
    border: 0;
    height: 0;
    box-shadow: 0 0 10px 1px black;
}
</style>
