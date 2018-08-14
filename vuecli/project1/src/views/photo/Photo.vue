<template>
    <div class="container">
        <ul class='photos'>
            <li v-for="(item,index) in photoList" :key="index+'pl'" @click="$router.push({name:'photodetail',params:{src:item.src}})">
                <img :src="item.src" alt="">
            </li>
        </ul>
    </div>

</template>
<style scoped>
    .photos li{
        height:4.1rem;
        width:50%;
        float:left;
    }
</style>

<script>
    import axios from 'axios';
    import  {mapState,mapMutations,mapGetters,mapActions} from 'vuex';

    export default {
        created(){
            this.$emit('routerChange','photo');
            this.getData();
        },
        data(){
            return{
                photoList:[]
            }
        },
        methods:{
            getData(){
                axios.get('./data/photodata.json')
                    .then((res)=>{
                        this.photoList = res.data.photoData;
                    })
                    .catch(()=>{

                    })
            },
            toDetail(){

            }

        }
    }
</script>
