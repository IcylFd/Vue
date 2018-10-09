<template>
    <div class="container">
        <div class="start">
            <div>SENTRA</div>
        </div>
        <ul class="nav">
            <li v-for="(item,index) in navList" :key="index+'nl'" @click="toPage(item.id)">
                <b :class="{showPoint:item.isSelect}"></b>
                <span>{{item.pageName}}</span>
            </li>
        </ul>
        <ul class="context">
            <li>CSDN</li>
            <li>git</li>
            <li>微信</li>
            <li>qq</li>
            <li>微博</li>
        </ul>
    </div>
</template>

<style scoped>
    template{
        height:100%;
    }
    .container{
        width:25%;
        height:100%;
        background: rgba(0,0,0,.85);
        position: fixed;
        top:0;
        left:0;
        color:#fff;
    }
    .start{
        height:140px;
        width:100%;
        background: #4b3e99;
        margin:0 auto;
        line-height: 120px;
        position: relative;
    }
    .start div{
        height: 80%;
        width:90%;
        background: none;
        border:1px solid rgba(255,255,255,.8);
        position: absolute;
        left:50%;
        top:50%;
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }
    .nav li b{
        display: inline-block;
        height:9px;
        width:9px;
        background: none;
        border:2px solid #fff;
        border-radius: 50%;
        line-height: 5px;
        margin-right: 10px;
    }
    .nav li:hover b{
        background: #fff;
        transition: all 0.7s ease;
    }
    .nav li:hover{
        font-weight: bold;
    }
    .nav li .showPoint{
        display: inline-block;
        height:9px;
        width:9px;
        background: #fff;
        border-radius: 50%;
        line-height: 5px;
        margin-right: 10px;
    }
    .nav li{
        margin: 10px;
        transition: all 0.7s ease;
    }
    .nav{
        font-size: 16px;
        text-align: left;
        position: absolute;
        left:20%;
        top:200px;
    }
    .context{
        position: absolute;
        bottom:10px;
        display: flex;
        left:50%;
        transform:translateX(-50%);
    }
    .context{
        flex:1;
    }

</style>

<script>
    export default {
        data(){
            return {
                navList:[
                    {
                        id:'0',
                        pageName:'Home',
                        path:'/',
                        isSelect:true,
                    },
                    {
                        id:'1',
                        pageName:'Blog',
                        path:'/blog',
                        isSelect:false,

                    },
                    {
                        id:'2',
                        pageName:'Resume',
                        path:'/resume',
                        isSelect:false,

                    },
                ],
            }
        },
        methods:{
            toPage(id){
                for(let i = 0; i < this.navList.length; i++){
                    if(this.navList[i].isSelect){
                        this.navList[i].isSelect = false;
                    }
                }
                this.navList[id].isSelect = true;

                this.$router.push(this.navList[id].path);
            }
        }
    }
</script>
