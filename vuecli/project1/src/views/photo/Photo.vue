<template>
    <div class="container">
        <div>
            <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" @tap="onSwipeTap">Swipe me!</v-touch>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch, {name: 'v-touch'});
    export default {
        created(){
            this.$emit('routerChange','photo');
        },
        methods:{
            onSwipeLeft(){
                console.log('zuohua')
            },
            onSwipeRight(){
                console.log('youhua')
            },
            onSwipeTap(){
                console.log('back');
            }
        }
    }
</script>
