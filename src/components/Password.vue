<template>
<Row type="flex" justify="center" align="middle">
    <Col :span="12">
        <Card style="margin:0px auto; width=450px">
            <p slot="title">变更密码</p>
            <label for="oldpwd">旧密码</label>
            <Input v-model="oldpwd" id="oldpwd" required />
            <br><br>
            <label for="oldpwd">旧密码</label>
            <Input v-model="newpwd" id="newpwd" required />
            <br><br>
            <Button type="warning">确认</Button>
        </Card>
    </Col>
</Row>
</template>

<script>
export default {
    data() {
        return {
            oldpwd: '',
            newpwd: ''
        }
    }
}
</script>
