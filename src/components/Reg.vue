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
            <Input v-model="email" @keyup.enter.native="reg" 
                id="email" required type="email" placeholder="如: xxx@gmail.com"/>
            <br><br>
            <Button type="info" @click="reg">注册</Button>
            <br><br>
            <router-link to="/login" style="color: green;">已有账户？点击登录</router-link>
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
    },

    methods: {
        /**
         * 登录事件
         */
        reg() {
            // 验证输入的合法性
            if (this.userName == '') {
                this.msg = '用户名不能为空';
                return;
            }
            if (this.password == '') {
                this.msg = '密码不能为空';
                return;
            }
            if (this.validate != this.password) {
                this.msg = '两次输入的密码不一致';
                return;
            }
            if (this.email == '') {
                this.msg = '邮箱不能为空';
                return;
            }
            // 注册用户
            this.$axios.post('/api/registry', {
                "userName": this.userName,
                "password": this.password,
                "email": this.email
            }).then(success => {
                console.log(success.data);
                let code = success.data.code;
                if (code == 'success') {
                    // 存储用户信息
                    let user = {}
                    this.$axios.get('/api/user/name?userName='+ this.userName)
                    .then(u => {
                        user = u.data;
                        this.$store.commit("setInfo", user);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                    this.$router.push("/");
                } else {
                    this.msg = success.data.msg;
                }
            }).catch(error => {
                this.msg = error.error;
            });
        }
    }
}
</script>

<style scoped>
.reg {
    margin: auto;
}
</style>
