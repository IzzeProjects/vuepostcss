<template>
    <div>
        <div>{{hours}}:{{minutes}}:{{seconds}}</div>
    </div>
</template>

<script>
    export default {
        name: "Clocks",
        data() {
            return {
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        },
        mounted() {

            let date = new Date()
            this.hours = date.getHours()
            this.minutes = date.getMinutes()
            let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            this.seconds = seconds

            setInterval(() => {
                this.timer()
            }, 980)

        },
        methods: {
            timer() {
                let date = new Date()
                this.hours = date.getHours()
                this.minutes = date.getMinutes()
                let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
                this.seconds = seconds
            }
        }
    }
</script>
