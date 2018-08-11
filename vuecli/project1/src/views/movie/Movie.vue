<template>
    <div>
        <div class="container">
            <ul>
                <li v-for="(items,index) in dataList" :key="index+'dl'">
                    <img class="movieImg" :src="items.images.small" alt="">
                    <div class="movieInfo">
                        <div class="movieTitle">{{items.title}}</div>
                        <div>
                            <span class="casts" v-for="(item,index) in items.casts" :key="index+'castl'">{{item.name}}/</span>
                        </div>
                        <div>
                            已有
                            <span class="directors">{{items.collect_count}}</span>
                            人观看
                        </div>
                        <div>
                            <span class="genres" v-for="(item,index) in items.genres" :key="index+'generl'">{{item}}/</span>
                        </div>
                    </div>

                </li>
            </ul>
            <div class="loading" :class="{toBottom:isBottom}">
                <img src="../../assets/img/loading.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container li{
        border-bottom: 0.01rem solid #9da0a4;
    }
    .movieImg{
        height:2rem;
        margin-left:0.3rem;
        margin-top:0.2rem;
        /*float:left;*/
    }
    .movieInfo{
        float:left;
    }
    .loading{
        height:1.5rem;
        width:1.5rem;
        border-radius: 0.3rem;
        background: rgba(0,0,0,.4);
        margin:0 auto;
        line-height:100%;
        text-align: center;
        display: none;
    }
    .loading img{
        height: 0.8rem;
        width: 0.8rem;
    }
    .toBottom{
        display: block;
    }
</style>

<script>
    import axios from 'axios'

    export default {
        created(){
            this.$emit('routerChange','movie');
            this.getData();
        },
        data(){
            return{
                dataList:[],
                data:{
                    length:10,
                    num:10
                },
                isBottom:false
            }
        },
        methods:{
            getData(){
                axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters')
                    .then((response) => {
                        console.log(response);
                        this.dataList = response.data.subjects;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
//+?start=this.data.length+'&count='+this.data.num
            }
        }
    }

    window.addEventListener("scroll", function(){
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeigth = document.documentElement.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;
        if(scrollHeigth <= scrollTop + clientHeight + 10){

        }
    });


</script>
