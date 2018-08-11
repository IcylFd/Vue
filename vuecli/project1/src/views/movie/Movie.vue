<template>
    <div>
        <div class="container">
            <ul>
                <li v-for="(items,index) in dataList" :key="index+'dl'">
                    <div><img class="movieImg" :src="items.images.small" alt=""></div>
                    <div class="movieInfo clearfix" >
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
            <div :class="['loading',{toBottom:isFinish}]">
                <img src="../../assets/img/loading.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container li{
        border-bottom: 0.01rem solid #9da0a4;
        padding:0.2rem;
        display: flex;
    }
    /*.container li>div{*/
        /*width:0;*/
    /*}*/
    .movieImg{
        width:1.5rem;
        height:2rem;
        margin-left:0.3rem;
        flex-grow:1;
    }
    .movieInfo{
        margin-left:0.3rem;
        word-break: break-all;
        flex-grow:2;
    }
    .movieTitle{
        font-size:0.3rem;
        font-weight:bold;
    }
    .loading{
        height:1.5rem;
        width:1.5rem;
        border-radius: 0.3rem;
        background: rgba(0,0,0,.4);
        line-height:100%;
        text-align: center;
        display: none;
        position: fixed;
        top:50%;
        left:50%;
        margin-left:-0.75rem;
        margin-top:-0.75rem;
    }
    .loading img{
        height: 0.8rem;
        width: 0.8rem;
    }
    .toBottom{
        display: block !important;
    }
    .clearfix::after{
        content:"";
        clear:both;
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
                isFinish:true
            }
        },
        methods:{
            //API_PROXY+'https://api.douban.com/v2/movie/in_theaters'
            getData(){
                this.isFinish = false;
                axios.get('https://api.myjson.com/bins/nsb9g')
                    .then((response) => {
                        this.dataList = this.dataList.concat(response.data.subjects);
                    })
                    .catch((error) => {

                    });
//+?start=this.data.length+'&count='+this.data.num
            }
        },
        mounted(){
            window.addEventListener("scroll", ()=>{
                let scrollTop = document.documentElement.scrollTop;
                let scrollHeigth = document.documentElement.scrollHeight;
                let clientHeight = document.documentElement.clientHeight;
                while(scrollHeigth <= scrollTop + clientHeight + 1){
                    if(this.isFinish){
                        this.getData();
                    }


                }
            });
        }
    }




</script>
