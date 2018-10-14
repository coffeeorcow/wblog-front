<template>
    <Modal
        v-model="showLogin"
        title="登录"
        @on-ok="login"
        @on-cancel="cancel">
        <Input required type="text" prefix="ios-contact" placeholder="请输入用户名" style="width: auto" />
        <br><br>
        <Input required type="password" prefix="md-lock" placeholder="请输入密码" style="width: auto" />
    </Modal>
</template>

<script>
export default {
    props: ['showLogin'],

    data() {
        return {
            
        }
    },
    
    methods: {
        login() {
            console.log('login..');
            this.$emit('login-out');
            this.$router.push('/');
        },

        cancel() {
            console.log('cancel');
            this.$emit('login-out');
            this.$router.push('/');
        }
    }
}
</script>
