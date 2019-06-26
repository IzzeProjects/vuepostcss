<template>
    <div>
        <div class="clocks-wrap">
            <transition name="slide-fade">
                <div class="clocks-hours" :key="hours">{{hours}}:</div>
            </transition>
            <transition name="slide-fade">
                <div class="clocks-minutes" :key="minutes">{{minutes}}:</div>
            </transition>
            <transition name="slide-fade">
                <div class="clocks-seconds" :key="seconds">{{seconds}}</div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Clocks",
        data() {
            return {
                hours: 0,
                minutes: 0,
                seconds: 0,
                show: false
            }
        },
        mounted() {

            let date = new Date()
            this.hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            this.minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            this.seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

            setInterval(() => {
                this.timer()
            }, 900)

        },
        methods: {
            timer() {
                let date = new Date()
                this.hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
                this.minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
                this.seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            }
        }
    }
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: all 1.1s ease-out;
    }

    .slide-fade-enter {
        transform: translateX(70px);
        opacity: 0;
    }
</style>
