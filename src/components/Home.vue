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
            <div v-html="item.content" class="content"></div>
          </Card>
      </Col>
    </Row>
	</div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      query: ''
    };
  },

  computed: {
    getQuery() {
      return this.$store.state.query;
    }
  },

  watch: {
    getQuerys(val) {
      console.log('query 发生变化')
      this.query = val;
      if (this.query != "") {
      // 有参情况
      this.$axios.get("/api/article?query=" + this.query).then(m => {
        this.articles = m.data;
        console.log('query is ' + this.query);
        for (let t in this.articles) {
          this.articles[t].content = this.$markdownIt().render(this.articles[t].content);
        }
      });
    } else {
      // 无参情况
      this.$axios.get("/api/article/all").then(m => {
        this.articles = m.data;
        
        for (let t in this.articles) {
          this.articles[t].content = this.$markdownIt().render(this.articles[t].content);
        }
      });
    }
    this.$store.commit('setQuery', '');
    }
  },

  mounted() {
    let query = this.$store.state.query;
    // if (query != "") {
    //   // 有参情况
    //   this.$axios.get("/api/article?query=" + query).then(m => {
    //     this.articles = m.data;
    //     console.log('query is ' + query);
    //     for (let t in this.articles) {
    //       console.log('渲染前：' + this.articles[t].content);
    //       this.articles[t].content = this.$markdownIt().render(this.articles[t].content);
    //       console.log('渲染后：' + this.articles[t].content);
    //     }
    //   });
    // } else 
    if (query == ''){
      // 无参情况
      this.$axios.get("/api/article/all").then(m => {
        this.articles = m.data;
        
        for (let t in this.articles) {
          this.articles[t].content = this.$markdownIt().render(this.articles[t].content);
        }
      });
    }
  },

  methods: {
    detail(id) {
      // console.log('you clicked id ' + id);
      // 设置 vuex 中的 article.id 为选中的文章id
      this.$store.commit('setArticle', id);
      this.$router.push('/detail');
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
