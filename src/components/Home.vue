<template>
	<div class="main">
		<Layout>
			<Header class="header">
				<MyHeader/>
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
	</div>
</template>

<script>
import MyHeader from '@/components/Header';
import Nav from '@/components/Nav';

export default {
	components: {
		MyHeader,
		Nav
	}	
}
</script>

<style scoped>
.nav {
	background: #fff;
}
</style>
