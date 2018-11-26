<template>
<Row type="flex" justify="center" align="middle">
    <Col :span="12">
        <Card style="margin:0px auto; width=450px">
            <p slot="title">登录</p>
            <p style="color: red;">{{ msg }}</p>
            <label for="userName">用户名</label>
            <Input type="text" v-model="userName" id="userName" required />
            <br><br>
            <label for="pwd">密码</label>
            <Input type="password" v-model="password" id="pwd" required  @keyup.enter.native="login" />
            <br><br>
            <Button type="success" @click="login">登录</Button>
            <br><br>
            <router-link to="/reg" style="color: green;">还没有账户？现在注册</router-link>
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
      // console.log('click login');
      this.$axios.post('/login', {
        userName: this.userName,
        password: this.password
      })
      .then(res => {
        let code = res.data.code;
        if (code == 'success') {
          // 存储用户信息
          let user = {}
          this.$axios.get('/user/name?userName='+ this.userName)
          .then(u => {
            user = u.data;
            this.$store.commit("setInfo", user);
          })
          .catch(error => {
            console.log(error);
          });
          this.$router.push('/');
        } else {
          this.msg = res.data.msg;
        }
      })
      .catch(err => {
        this.msg = err.data.error;
      });
    },
    reg() {
      console.log("user");
      this.$router.push("/reg");
    }
  }
};
</script>
