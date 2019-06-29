<template>
    <div>
        <carousel :per-page="1"
                  :mouseDrag="false"
                  :autoplay="true"
                  :autoplayTimeout="3000"
                  :loop="true"
                  :paginationEnabled="false"
                  :speed="1500"
                  class="background">

            <slide v-for="(image, index) in images" :key="index">
                <div class="background__image"
                     :style="{backgroundImage: 'url(' + image.link + ')'}"></div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        components: {
            Carousel,
            Slide
        },
        name: "BackgroundSlider",
        data() {
            return {
                images: []
            }
        },
        mounted() {
            this.images = [
                {
                    "link": "img/background0.jpg"
                },
                {
                    "link": "img/background1.jpg"
                },
                {
                    "link": "img/background2.jpg"
                },
                {
                    "link": "img/background3.jpg"
                },
                {
                    "link": "img/background4.jpg"
                }
            ]
        }
    }
</script>
