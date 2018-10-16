<template>
    <div class="publish">
        <i-editor v-model="content" class="editor" :auto-size="200"></i-editor>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: ''
        }
    }
}
</script>
