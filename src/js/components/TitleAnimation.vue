<template>
    <div>
        <div class="content-title__wrapper">
            <transition name="slide-fade">
                <div class="content__title" v-if="show">Welcome</div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TitleAnimation",
        data() {
            return {
                show: false
            }
        },
        mounted() {
            this.show = true;
        }
    }
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: all 2.5s ease-out;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(400px);
        opacity: 0;
    }
</style>
