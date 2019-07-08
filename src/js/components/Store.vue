<template>
    <div>
        <div class="posts" >
            <div v-for="post in allPosts" :key="post.id">
                {{post.title}}
            </div>
        </div>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex'

    const {mapGetters, mapActions} = createNamespacedHelpers('storeModule')

    export default {
        name: "Store",
        computed: mapGetters(['allPosts']),
        methods: mapActions(['fetchPosts']),
        mounted() {
            this.fetchPosts()
        }
    }
</script>

<style scoped>
    .posts {
        display: flex;
    }

    .posts div {
        border: 1px solid #fff;
        padding: 10px;
    }
</style>

