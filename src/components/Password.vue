<template>
<Row type="flex" justify="center" align="middle">
    <Col :span="12">
        <Card style="margin:0px auto; width=450px">
            <p slot="title">变更密码</p>
            <span style="color: red;">{{ msg }}</span>
            <Input v-model="oldpwd" placeholder="在此处输入旧密码" type="password" required />
            <br><br>
            <Input v-model="newpwd" placeholder="此处输入新密码" type="password" required />
            <br><br>
            <Input v-model="confirm" placeholder="再输一次新密码" type="password" required />
            <br><br>
            <Button type="warning" @click="changePwd">确认</Button>
        </Card>
    </Col>
</Row>
</template>

<script>
export default {
    data() {
        return {
            oldpwd: '',
            newpwd: '',
            confirm: '',
            msg: ''
        }
    },

    methods: {
        changePwd() {
            // 验证两次密码是否一致
            if (this.oldpwd == '') {
                this.msg = '请输入密码'
                return;
            } else if (this.newpwd != this.confirm) {
                this.msg = '两次密码输入不一致'
                return;
            }
            this.$axios.post('/api/user/pwd', {
                "id": String(this.$store.state.user.id),
                "oldpwd": this.oldpwd,
                "newpwd": this.newpwd
            }).then(m => {
                this.msg = m.data.msg;
            })
        }
    }
}
</script>
