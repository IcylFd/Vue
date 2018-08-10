<template>
    <div>
        <div class="container">
            电影
            <ul>
                <li v-for="(items,index) in dataList" :key="index+'dl'">{{items.title}}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

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
