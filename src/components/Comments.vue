<template>
<Row class="comments" type="flex" justify="center" align="middle">
    <Col>
        <Card v-for="(item, index) in comments" :key="index"
            style="margin: 20px 0px; width: 900px">
            <!-- <p slot="title">{{ item.title }}</p> -->
            <p>{{ item.content }}</p>
        </Card>
    </Col>
</Row>
</template>

<script>
export default {
    data() {
        return {
            comments: [
                {
                    content: 'bilibili...'
                },
                {
                    content: 'bilibili...'
                },
                {
                    content: 'bilibili...'
                }
            ]
        }
    }
}
</script>
