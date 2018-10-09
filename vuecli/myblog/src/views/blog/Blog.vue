<template>
    <div class="container">
        <header>
            <p class="left">
                <span>Blog</span>
                <span>Entries</span>
            </p>
            <p class="right">
                Curabitur hendrerit mauris mollis ipsum vulputate rutrum.
                Phasellus luctus odio eget dui imperdiet.
            </p>
        </header>
        <div class="content">
            <div class="monthBar">
                <ul>
                    <li v-for="(items,index) in monthlist" :key="index+'dl'" @click='clickMonthBar(items)'>
                        {{items}}
                    </li>
                </ul>
            </div>
            <div class="separator"></div>
            <div>
                <div class="article" v-for="(item,index) in article" :key="index+'al'" v-if="item.flag==true">
                    <img :src="item.img" alt="">
                    <div class="info">
                        <p class="title">{{item.title}}</p>
                        <p class="date">{{item.date}}</p>
                        <p class="intro">{{item.intro}}</p>
                        <button>Continue Reading</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        width:75%;
        position: absolute;
        left:25%;
        top:0;
    }
    header{
        display: flex;
        position: absolute;
        left:60px;
        top:60px;
        text-align: left;
    }
    .left{
        font-size: 30px;
        font-weight:bold;
        flex:20%;
    }
    .left span{
        display: block;
    }
    .left span:last-child{
        color:#4b3e99;
        margin-top:-20px;
    }
    .right{
        flex:80%;
        padding-top:22px;
        box-sizing: border-box;
    }
    .content{
        width: 90%;
        background: #f4f4f4;
        margin: 200px auto;
    }
    .monthBar ul{
        display: flex;
    }
    .monthBar ul li{
        flex:1;
        width:100px;
        height:80px;
        background: #f4f4f4;
        font-size: 20px;
        font-weight: bold;
        color:#232323;
        line-height: 80px;
        transition: all 0.6s ease;
    }
    .monthBar ul li:hover{
        background-color: #4b3e99;
        color:#f4f4f4;
    }
    .separator{
        width: 100%;
        height:10px;
        background: #4b3e99;
    }
    .article{
        display: flex;
        height:300px;
        width:90%;
        /*margin: 0 auto;*/
        border-bottom:1px solid #ddd;
        text-align: left;
        transform: translateY(10%);
    }
    .article img{
        flex:1;
        width:220px;
        height:220px;
        transform: translateX(30px);
    }
    .article .info{
        flex:2;
        transform: translateX(40px);
    }
    .info button{
        height:45px;
        width:160px;
        background-color: #4b3e99;
        color:#f4f4f4;
        font-weight: bold;
        border:none;
        transition: all 0.6s ease;
        transform: translateY(32px);
    }
    .info button:hover{
        background-color: #fff;
        color:#4b3e99;
    }
    .info .title{
        font-size:22px;
        font-color:#282828;
        font-weight: bold;

    }
    .info .date{
        font-color:#797979;
        font-weight: bold;
        font-size:16px;
    }
    .info .intro{
        font-color:#797979;
        font-size:14px;
        transform: translateY(15px);
    }
</style>

<script>
    export default {
        data(){
            return{
                article:[
                    {
                        id:'0',
                        title:'7Integer ultrices augue',
                        img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_1.jpg',
                        month:'July 2018',
                        day:'25 July 2018',
                        intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                        flag:true,
                    },
                    {
                        id:'1',
                        title:'7Cras commodo odio ut',
                        img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_2.jpg',
                        month:'July 2018',
                        day:'16 July 2018',
                        intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                        flag:true,
                    },
                    {
                        id:'2',
                        title:'7Sed at massa turpis',
                        img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_3.jpg',
                        month:'July 2018',
                        day:'10 July 2018',
                        intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                        flag:true,
                    },
                    {
                        id:'3',
                        title:'6Integer ultrices augue',
                        img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_2.jpg',
                        month:'June 2018',
                        day:'25 June 2018',
                        intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                        flag:false,
                    },
                    {
                        id:'4',
                        title:'6Cras commodo odio ut',
                        img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_3.jpg',
                        month:'June 2018',
                        day:'16 June 2018',
                        intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                        flag:false,
                    },
                    {
                        id:'5',
                        title:'6Sed at massa turpis',
                        img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_1.jpg',
                        month:'June 2018',
                        day:'10 June 2018',
                        intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                        flag:false,
                    },
                ],
                monthlist:[
                    'July 2018','June 2018','May 2018','April 2018'
                ],
            }
        },
        methods:{
            clickMonthBar(that){
                console.log(this.article);
                for(var i = 0; i < this.article.length; i++){
                    if(this.article[i].month == that){
                        this.article[i].flag = true;
                        console.log(1);
                    }else{
                        this.article[i].flag = false;
                        console.log(2);

                    }
                }

            }
        }
    }
</script>
