<template>
  <div class="about">
    <h1>This is an about page</h1>
      <div>
          <h2>局部方法</h2>
        <button @click="add">+1</button>
        <button @click="reduce">-1</button>
        <div>{{num}}</div>
      </div>
      <div>
          <h2>全局方法</h2>
          <button @click="$store.commit('add',3)">+1</button>
          <button @click="reduce">-1</button>
          <button @click="actionAdd">action</button>
          <div>{{count}}</div>
      </div>
  </div>
</template>

<script>
    import  {mapState,mapMutations,mapGetters,mapActions} from 'vuex';      //方法2

    export default {
//        beforeRouteEnter(to, from, next) {
////            console.log(to);
////            console.log(from);
////            next();
//        },
//        beforeRouteLeave(to, from, next) {
////            console.log(to);
////            console.log(from);
//        }


        data(){
            return{
                num:0
            }
        },
//        methods:{
//            add(){
//                this.num++;
//            },
//            reduce(){
//                this.num--;
//            }
//        },
//        methods:mapMutations(["add","reduce"]),
        methods:{
            ...mapMutations(["add","reduce"]),
            ...mapActions(["actionAdd"])
        },
        computed:{
            ...mapState(["count"]),
            ...mapGetters(["count"])
        }
//        computed:{                 //方法1
//            sum(){
//                return this.$store.state.count;
//            },
//        },
//        computed:mapState({                  //方法2
//            sum1(state){
//                return state.count;
//            }
//        }),

//        computed:mapState(["count"]),         //方法3
    }
</script>