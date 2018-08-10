<template>
    <div>
        <div class="container">
            电影
            <ul>
                <li v-for="(items,index) in dataList" :key="index+'dl'">
                    <!--<img class="movieImg" :src="items.images.small" alt="">-->
                    <img class="movieImg" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521648155.jpg" alt="">
                    <div class="movieTitle">{{items.title}}</div>
                    <div>
                        <span class="casts" v-for="(item,index) in items.casts" :key="index+'castl'">{{item.name}}/</span>
                    </div>
                    <div>
                        已有
                        <span class="directors" v-for="(item,index) in items.directors" :key="index+'direl'">{{item.name}}/</span>
                        观看
                    </div>
                    <div>
                        类型：
                        <span class="genres" v-for="(item,index) in items.genres" :key="index+'generl'">{{item}}/</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .container li{
        border-bottom: 0.1rem solid #9da0a4;
    }
    .movieImg{
        height:2rem;
        position:absolute;
        left:1rem;
        top:0.3rem;
    }
</style>

<script>
    export default {
        created(){
            this.$emit('routerChange','movie');
            this.getData();

        },
        data(){
            return{
                dataList:[]
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

            }
        }
    }
</script>
