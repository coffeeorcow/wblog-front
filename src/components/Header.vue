<template>
<div class="header">
    <Menu mode="horizontal" theme="dark" @on-select="select">
        <Row type="flex" justify="space-between">
            <Col span="4">
            <router-link to="/">
                <img src="@/assets/logo.png" alt="logo" class="logo" height="40px">
            </router-link>
            </Col>
            <Col span="9"></col>
            <Col span="5">
                <MenuItem name="1">
                    <Input search placeholder="搜索相关文章" />
                </MenuItem>
            </col>
            <Col span="6">
                <MenuItem name="2" to="/publish">
                    <Icon type="md-create" />
                        发表文章
                </MenuItem>
                <MenuItem name="3">
                    登录
                </MenuItem>
                <MenuItem name="4">
                    注销
                </MenuItem>
            </col>
        </Row>
    </Menu>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    methods: {
        select(name) {
            if (name == 3)
                this.$emit('login-event')
        }
    }
}
</script>


<style scoped>
.logo {
    margin-top: 10px;
}
</style>
