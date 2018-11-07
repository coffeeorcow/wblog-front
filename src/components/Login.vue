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
            <Input v-model="password" id="pwd" required />
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
      console.log("login..");
      let user = {
        id: 1,
        userName: "user1",
        email: "user1@gmail.com",
        avatar: "https://xxx.com",
        gender: 1
      };
      console.log(user);
      this.$store.commit("setInfo", user);
      this.$router.push("/");
    },
    reg() {
      console.log("reg");
      this.$router.push("/reg");
    }
  }
};
</script>
