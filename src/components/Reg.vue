<template>
    <Card style="width: 500px" class="reg">
        <Form :model="regForm" :label-width="80">
            <FormItem label="邮箱">
                <Input v-model="regForm.email" type="email"></Input>
            </FormItem>
            <FormItem label="用户名">
                <Input v-model="regForm.userName" type="text"></Input>
            </FormItem>
            <FormItem label="密码">
                <Input v-model="regForm.pwd" type="password"></Input>
            </FormItem>
            <FormItem label="确认密码">
                <Input v-model="regForm.validate" type="password" placeholder="再次输入密码"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary">注册</Button>
                <Button style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
    </Card>
</template>

<script>
export default {
    data() {
        return {
            regForm: {
                email: '',
                userName: '',
                pwd: '',
                validate: ''
            }
        }
    }
}
</script>

<style scoped>
.reg {
    margin: auto;
}
</style>
