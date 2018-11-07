<template>
<Row type="flex" justify="center" align="middle">
    <Col :span="12">
        <Card style="margin:0px auto; width=450px;">
            <p slot="title">注册</p>
            <p style="color: red;">{{ msg }}</p>
            <label for="user.UserName">用户名</label>
            <Input v-model="userName" id="userName" required type="text"/>
            <br><br>
            <label for="pwd">密码</label>
            <Input v-model="password" id="pwd" required type="password"/>
            <br><br>
            <label for="validate">确认密码</label>
            <Input v-model="validate" id="validate" required type="password"/>
            <br><br>
            <label for="email">电子邮箱地址</label>
            <Input v-model="email" id="email" required type="email" placeholder="如: xxx@gmail.com"/>
            <br><br>
            <Button type="info" @click="reg">注册</Button>
            <br><br>
            <router-link to="/login">已有账户？点击登录</router-link>
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
            validate: '',
            email: '',
            msg: ''
        }
    }
}
</script>

<style scoped>
.reg {
    margin: auto;
}
</style>
