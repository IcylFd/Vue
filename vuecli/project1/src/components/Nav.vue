<template>
    <div>
        <div id="nav">
            <header>
                <a @click="choose(0)">首页</a>
                <span>{{currentPage}}</span>
            </header>
            <div class="footer">
                <ul>
                    <li v-for="(item,index) in footerNav" :key="index" @click="choose(index)"
                                  :class="[{activeBg:item.isSelected},{activeColor:item.isSelected}]">
                        {{item.title}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="routerbar">
            <!--<transition name="fade">-->
            <router-view/>
            <!--</transition>-->
        </div>
    </div>
</template>

<style>

    header,.footer{
        height:1rem;
        background: #afa7e2;
        position: fixed;
        width:100%;
        line-height:1rem;
    }
    header{
        top:0;
        font-size:0.4rem;
        font-weight:bold;
        color:#fff;
    }
    header a{
        position: absolute;
        left:0.3rem;
        color:#fff;
        font-size:0.25rem;
    }
    .footer{
        bottom:0;
        font-size:0.25rem;
    }
    .footer ul{
        display:flex;
    }
    .footer li{
        float:left;
        color:#2e2e2e;
        flex-grow:1;
    }
    .active1{
        background: #afa7e2 !important;
    }
    .active2{
        background: #E2B9A9 !important;
    }
    .active3{
        background: #83A2DA !important;
    }
    .active4{
        background: #a8e2bd !important;
    }
    .activeColor{
        color:#fff !important;
    }

</style>

<script>
    export default {
        name: 'Nav',
        props:['currentPageName'],
        data(){
            return{
               currentPage:'电影',
               footerNav:[
                   {
                       title:'电影',
                       url:'/',
                       isSelected:true,
                       activeBg:"active1"
                   },
                   {
                       title:'音乐',
                       url:'/music',
                       isSelected:false,
                       activeBg:"active2"
                   },
                   {
                       title:'书籍',
                       url:'/book',
                       isSelected:false,
                       activeBg:"active3"
                   },
                   {
                       title:'图片',
                       url:'/photo',
                       isSelected:false,
                       activeBg:"active4"
                   },
               ]
            }
        },
        methods: {
            choose(index){
                this.footerNav[index].isSelected = true;
                for(let i = 0; i < this.footerNav.length; i++){
                    if(i != index){
                        this.footerNav[i].isSelected = false;
                    }
                }
                this.currentPage = this.footerNav[index].title;
                this.$router.push(this.footerNav[index].url);
            }
        }
    }
</script>
