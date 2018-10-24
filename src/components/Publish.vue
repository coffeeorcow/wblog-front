<template>
    <div class="publish">
        <div class="profile">
            <Row class="title" style="margin: 10px 0px">
                <Col :span="8">
                    <label for="title"><span style="font-size: 18px; color: orange;">标题&nbsp;</span></label>
                    <Input type="text" placeholder="title" id="title" style="width:200px" />
                </Col>
                <Col :span="8">
                    <label for="cates"><span style="font-size: 15px; color: purple">选择分类&nbsp;</span></label>
                    <Select id="cates" v-model="article.cate" style="width:200px">
                        <Option v-for="(item, index) in cates" :value="item" :key="index">{{ item }}</Option>
                    </Select>
                </Col>
                <Col :span="8">
                    <Button type="info" style="float: right; margin-right: 20px;">发表</Button>
                </Col>
            </Row>
            <Row>
                <Col :span="1">
                    <label for="tags"><span style="font-size: 15px; color: green;">Tags</span></label>
                </Col>
                <Col :span="15">
                    <Input type="text" placeholder="添加标签"/>
                </Col>
            </Row>
        </div>
        <i-editor v-model="article.content" class="editor" :autosize="style"></i-editor>
    </div>
</template>

<script>
export default {
    data() {
        return {
            style: {
                minRows: 20,
                maxRows: 40
            },
            cates: [
                'Java',
                'Scale',
                'Kotlin'
            ],
            article: {
                title: '',
                cate: '',
                content: ''
            }
        }
    }
}
</script>

<style scoped>
.profile {
    margin-bottom: 10px;
}
</style>
