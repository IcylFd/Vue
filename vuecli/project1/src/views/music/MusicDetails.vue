<template>
    <div class="container">
        <aplayer autoplay showLrc :music="dataList[0]" :list="dataList" :lrc="musicLrc" :slot="musicLrc[0]"/>
    </div>
</template>
<style>
    .container{
        margin-top:1.1rem;
    }
</style>
<script>
    import axios from 'axios'
    import Aplayer from 'vue-aplayer'

    export default {
        components:{
            Aplayer
        },
        data(){
            return{
                dataList:[],
                musicLrc:[]
            }
        },
        created(){
            this.$emit('routerChange','music');
            this.getData()
        },
        methods:{
            getData(){
                axios.get('./data/musicdata.json')
                    .then((res)=>{
                        console.log(res);
                        this.dataList = res.data.musicData;
                    })
                    .catch(()=>{

                    });
//                axios.get('./lrc/假如爱有天意.lrc')
//                    .then((res)=>{
//                        this.musicLrc4 = res;
//                    })
//                    .catch(()=>{
//
//                    });
//                axios.get('./lrc/刚好遇见你-李玉刚.lrc')
//                    .then((res)=>{
//                        this.musicLrc6 = res;
//                    })
//                    .catch(()=>{
//
//                    });
//                axios.get('./lrc/十年.lrc')
//                    .then((res)=>{
//                        this.musicLrc5 = res;
//                    })
//                    .catch(()=>{
//
//                    });
//                axios.get('./lrc/就是爱你.lrc')
//                    .then((res)=>{
//                        this.musicLrc3 = res;
//                    })
//                    .catch(()=>{
//
//                    });
//                axios.get('./lrc/成都-赵雷.lrc')
//                    .then((res)=>{
//                        this.musicLrc2 = res;
//                    })
//                    .catch(()=>{
//
//                    });
//                axios.get('./lrc/我要你.lrc')
//                    .then((res)=>{
//                        this.musicLrc1 = res;
//                    })
//                    .catch(()=>{
//
//                    });
                axios.get('./lrc')
                    .then((res)=>{
                        getLrc(res);
                    })
                    .catch(()=>{

                    });

            },

        }
    }
    function getLrc(val){
        for(let i = 0; i < 6; i++){
            axios.get('./lrc/'+val.data[i])
                .then((res)=>{
//                console.log(res.data);
                    this.musicLrc = res;
                    console.log(this.musicLrc);
                })
                .catch(()=>{

                });
        }

    }
</script>