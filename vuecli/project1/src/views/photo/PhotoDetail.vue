<template>
    <div class="container" @click="swipetap">
        aaa
        <v-touch class='content' @swipeleft="onSwipeLeft" @swiperight="onSwipeRight" @tap="onSwipeTap" :style='styleObj'></v-touch>
    </div>

</template>
<style>
    .content{
        background: #000;
    }
</style>

<script>
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch, {name: 'v-touch'});
    export default {
        created(){
            this.$emit('routerChange','photo');
            if(this.$store.state.nowIndex == -1){
                this.$router.push('/photo');
            }
        },
        data(){
            return{
                nowIn:this.$store.state.nowIndex+1,
                thisLength:this.$store.state.listLength
            }

        },
        computed:{
          styleObj(){
            return{
                background:`#000 url('./img/${this.nowIn}.jpg') no-repeat cover/contain`
            }
          }
        },
        methods:{
            onSwipeLeft(){
                this.nowIn++;
                if(this.nowIn == this.thisLength + 1){
                    this.nowIn = 1;
                }

            },
            onSwipeRight(){
                this.nowIn--;
                if(this.nowIn == 0){
                    this.nowIn = this.thisLength;
                }
            },
            onSwipeTap(){
                this.$router.push("/photo");
            },
            swipetap(){
                this.$router.push('/photo');
            }
        }
    }
</script>
