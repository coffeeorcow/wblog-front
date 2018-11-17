<template>
	<div id="home">
    <Row v-if="articles.length == 0" type="flex" justify="center" align="middle">
      <h1 class="no-article"> <Icon type="md-outlet" style="color: purple;" /> 没有找到相关文章。。。。</h1>
    </Row>
		<Row class="articles" type="flex" justify="center" align="middle">
      <Col>
          <Card v-for="(item, index) in articles" :key="index"
            @click.native="detail(item.id)"
            style="margin: 20px 0px; width: 900px">
            <p slot="title">{{ item.title }}</p>
            <Avatar slot="extra" v-if="item.user.avatar == null || item.user.avatar == ''"
              icon="ios-person"></Avatar>
            <Avatar slot="extra" v-else="item" :src="item.user.avatar"></Avatar>
            <p class="content">{{ item.content }}</p>
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
    };
  },

  mounted() {
    let query = this.$store.state.query;
    if (query != "") {
      // 有参情况
      this.$axios.get("/api/article?query=" + query).then(m => {
        this.articles = m.data;
        console.log("articles: ");
        console.log(this.articles);
      });
    } else {
      // 无参情况
      this.$axios.get("/api/article/all").then(m => {
        this.articles = m.data;
        console.log("articles: ");
        console.log(this.articles);
      });
    }
    this.$store.commit("setQuery", "");
  },

  methods: {
    detail(id) {
      console.log('you clicked id ' + id);
      // 根据 id 查看相关文章的详情
    }
  }
};
</script>

<style scoped>
.no-article {
  color: rgb(255, 153, 0);
  margin-top: 30px;
}
</style>
