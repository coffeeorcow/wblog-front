<template>
<Row type="flex" justify="center" align="middle">
    <Col :span="12">
        <Card style="margin:0px auto; width=450px">
            <p slot="title">个人信息</p>
            <label for="name">姓名</label>
            <Input v-model="user.userName" id="name" type="text" required />
            <br><br>
            <label for="email">邮箱</label>
            <Input v-model="user.email" id="email" type="email" required />
            <br><br>
            <label for="gender">性别</label>
            <br>
            <RadioGroup v-model="user.gender" id="gen">
                <Radio label="1">
                    <span>男</span>
                </Radio>
                <Radio label="2">
                    <span>女</span>
                </Radio>
                <Radio label="0">
                    <span>未知</span>
                </Radio>
            </RadioGroup>
            <br><br>
            <label for="avatar">头像: </label>
            <Input v-model="user.avatar" id="avatar" type="text" />
            <br><br>
            <span>预览: <Avatar v-if="user.avatar != ''" :src="user.avatar"></Avatar> </span>
            <br><br>
            <Button type="error" @click="update">修改</Button>
        </Card>
    </Col>
</Row>
</template>

<script>
export default {
    data() {
        return {
            user: {
                id: '',
                userName: '',
                email: '',
                gender: '',
                avatar: ''
            }
        }
    },

    mounted() {
        this.user = this.$store.state.user;
        this.user.gender = String(this.user.gender);
    },

    methods: {
        update() {
            this.$axios.post('/user/update', {
                "id": this.user.id,
                "userName": this.user.userName,
                "email": this.user.email,
                "gender": this.user.gender,
                "avatar": this.user.avatar
            }).then(m => {
                alert(m.data.msg);
            });
        }
    }
}
</script>
