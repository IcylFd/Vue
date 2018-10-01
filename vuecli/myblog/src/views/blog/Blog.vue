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
                    <li v-for="(items,index) in dataList" :key="index+'dl'">
                        {{items.date}}
                    </li>
                </ul>
            </div>
            <div class="separator"></div>
            <div>
                <div class="article" v-for="(item,index) in dataList[0].article" :key="index+'al'">
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
        margin: 0 auto;
        border-bottom:1px solid #ddd;
        text-align: center;
    }
    .article img{
        flex:1;
        width:220px;
        height:220px;
    }
    .article .info{
        flex:2;
    }
</style>

<script>
    export default {
        data(){
            return{
                dataList:[
                    {
                        dateId:0,
                        date:'July 2018',
                        article:[
                            {
                                id:'0',
                                title:'Integer ultrices augue',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_1.jpg',
                                day:'25 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                            {
                                id:'1',
                                title:'Cras commodo odio ut',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_2.jpg',
                                date:'16 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                            {
                                id:'2',
                                title:'Sed at massa turpis',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_3.jpg',
                                date:'10 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },


                        ]
                    },
                    {
                        dateId:1,
                        date:'June 2018',
                        article:[
                            {
                                id:'0',
                                title:'Integer ultrices augue',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_1.jpg',
                                day:'25 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                            {
                                id:'1',
                                title:'Cras commodo odio ut',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_2.jpg',
                                day:'16 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                            {
                                id:'2',
                                title:'Sed at massa turpis',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_3.jpg',
                                day:'10 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                        ]
                    },
                    {
                        dateId:2,
                        date:'May 2018',
                        article:[
                            {
                                id:'0',
                                title:'Integer ultrices augue',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_1.jpg',
                                day:'25 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                            {
                                id:'1',
                                title:'Cras commodo odio ut',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_2.jpg',
                                day:'16 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                            {
                                id:'2',
                                title:'Sed at massa turpis',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_3.jpg',
                                day:'10 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                        ]
                    },
                    {
                        dateId:3,
                        date:'April 2018',
                        article:[
                            {
                                id:'0',
                                title:'Integer ultrices augue',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_1.jpg',
                                day:'25 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                            {
                                id:'1',
                                title:'Cras commodo odio ut',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_2.jpg',
                                day:'16 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                            {
                                id:'2',
                                title:'Sed at massa turpis',
                                img:'http://demo.cssmoban.com/cssthemes5/tpmo_518_sentra/img/blog_3.jpg',
                                day:'10 July 2018',
                                intro:'Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.',
                            },
                        ]
                    }
                ],
            }
        }
    }
</script>
