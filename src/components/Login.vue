<template>
<Row type="flex" justify="center" align="middle">
    <Col :span="12">
        <Card style="margin:0px auto; width=450px">
            <p slot="title">登录</p>
            <p style="color: red;">{{ msg }}</p>
            <label for="userName">用户名</label>
            <Input v-model="userName" id="userName" required />
            <br><br>
            <label for="pwd">密码</label>
            <Input v-model="password" id="pwd" required  @keyup.enter="login" />
            <br><br>
            <Button type="success" @click="login">登录</Button>
            <br><br>
            <router-link to="/reg" style="color: red;">还没有账户？现在注册</router-link>
        </Card>
    </Col>
</Row>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
      msg: ''
    };
  },

  methods: {
    login() {
      console.log('click login');
      this.$axios.post('/api/login', {
        userName: this.userName,
        password: this.password
      })
      .then(res => {
        console.log(res.data);
        alert(res.data.msg);
        let user = {}
        this.$axios.get('/api/user/name', {
          userName: this.userName
        })
        .then(u => {
          console.log(u);
          console.log(user);
          user = u.data;
          this.$store.commit("setInfo", user);
        });
        this.$router.push("/");
      });
    },
    reg() {
      console.log("reg");
      this.$router.push("/reg");
    }
  }
};
</script>
