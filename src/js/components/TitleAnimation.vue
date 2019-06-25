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
        transition: all 1.5s ease-out;
    }
    .slide-fade-enter {
        transform: translateX(400px);
        opacity: 0;
    }
</style>
