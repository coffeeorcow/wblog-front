<template>
<Row class="articles" type="flex" justify="center" align="middle">
    <Col>
        <Card v-for="(item, index) in articles" :key="index"
            style="margin: 20px 0px; width: 900px">
            <p slot="title">{{ item.title }}</p>
            <p>{{ item.content }}</p>
        </Card>
    </Col>
</Row>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                {
                    title: 'Article 1',
                    content: 'bilibili...'
                },
                {
                    title: 'Article 2',
                    content: 'bilibili...'
                },
                {
                    title: 'Article 3',
                    content: 'bilibili...'
                }
            ]
        }
    }
}
</script>
