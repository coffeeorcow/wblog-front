<template>
<div id="app">
  <Layout>
    <Header class="header">
      <MyHeader v-on:login-event="goLogin"/>
    </Header>
    <Layout>
      <Sider hide-trigger class="nav">
        <Nav />
      </Sider>
      <Content>
        <router-view />
      </Content>
    </Layout>
  </Layout>

  <Login :show-login="showLogin" v-on:login-out="outLogin"/>
</div>
</template>

<script>
import MyHeader from '@/components/Header';
import Nav from '@/components/Nav';
import Login from '@/components/Login'

export default {
  name: 'App',
  components: {
    MyHeader,
    Nav,
    Login
  },

  data() {
    return {
      showLogin: false
    }
  },

  methods: {
    goLogin() {
      this.showLogin = true
    },
    outLogin() {
      this.showLogin = false
    }
  }
}
</script>

<style>
#app {
  min-width: 1080px;
}
.nav {
	background: #fff;
}
</style>
