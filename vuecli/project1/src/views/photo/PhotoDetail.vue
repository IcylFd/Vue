<template>
    <div class="container">
        <div>
            <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" @tap="onSwipeTap">
                <img :src="this.$route.params.src" alt="">
            </v-touch>
        </div>
    </div>

</template>
<style>

</style>

<script>
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch, {name: 'v-touch'});
    export default {
        created(){
            this.$emit('routerChange','photo');
        },
        data(){
            return{
                photoSrcList:[]
            }

        },
        mounted(){
//                this.photoSrcList = this.photoSrcList.concat(this.$route.params.src);
//                console.log(this.photoSrcList);

        },
        methods:{
            onSwipeLeft(){
//               this.route.push();
                console.log('left');
            },
            onSwipeRight(){
                console.log('right');
            },
            onSwipeTap(){

            }
        }
    }
</script>
