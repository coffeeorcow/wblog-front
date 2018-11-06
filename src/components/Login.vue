<template>
    <Modal
        v-model="show"
        title="登录"
        @on-ok="login"
        @on-cancel="cancel">
        <Input required type="text" prefix="ios-contact" placeholder="请输入用户名" />
        <br><br>
        <Input required type="password" prefix="md-lock" placeholder="请输入密码" />
        <br><br>
        <span style="color:red;" @click="reg">没有账号？注册一个</span>
    </Modal>
</template>

<script>
export default {
    props: ['showLogin'],

    data() {
        return {
            show: this.showLogin
        }
    },
    
    methods: {
        login() {
            console.log('login..');
            let user = {
                id: 1,
                userName: 'user1',
                email: 'user1@gmail.com',
                avatar: 'https://xxx.com'
                // gender: 1
            }
            console.log(user);
            this.$store.commit('setInfo', user);
            this.$emit('login-out');
            this.$router.push('/');
        },

        cancel() {
            console.log('cancel');
            this.$emit('login-out');
            this.$router.push('/');
        },

        reg() {
            console.log('reg');
            this.$emit('login-out');
            this.$router.push('/reg');
        }
    }
}
</script>
