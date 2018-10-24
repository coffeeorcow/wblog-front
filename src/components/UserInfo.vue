<template>
<Row type="flex" justify="center" align="middle">
    <Col :span="12">
        <Card style="margin:0px auto; width=450px">
            <p slot="title">个人信息</p>
            <label for="name">姓名</label>
            <Input v-model="name" id="name" required />
            <br><br>
            <label for="nickname">称谓</label>
            <Input v-model="nickname" id="nickname" required />
            <br><br>
            <label for="email">邮箱</label>
            <Input v-model="email" id="email" required />
            <br><br>
            <label for="gender">性别</label>
            <br>
            <RadioGroup v-model="gender" id="gender">
                <Radio label="boy">
                    <span>Apple</span>
                </Radio>
                <Radio label="girl">
                    <span>Android</span>
                </Radio>
            </RadioGroup>
            <br><br>

            <Button type="error">确认</Button>
        </Card>
    </Col>
</Row>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            nickname: '',
            email: '',
            gender: ''
        }
    }
}
</script>
