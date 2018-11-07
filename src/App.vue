<template>
<div id="app">
  <Layout>
    <Header class="header">
      <MyHeader/>
    </Header>
    <Layout style="background: #ffffff;">
      <Sider hide-trigger class="nav">
        <Nav />
      </Sider>
      <Content style="margin-left: 20px;">
        <router-view />
      </Content>
    </Layout>
  </Layout>
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
    Nav
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
