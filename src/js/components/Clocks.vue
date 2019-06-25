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
            this.hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
            this.minutes =  date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
            this.seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

            setInterval(() => {
                this.timer()
            }, 980)

        },
        methods: {
            timer() {
                let date = new Date()
                this.hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
                this.minutes =  date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
                this.seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            }
        }
    }
</script>
