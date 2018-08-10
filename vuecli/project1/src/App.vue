<template>
  <div id="app">
    <Nav @currentPageName="getPageName"></Nav>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

<script>
  import Nav from '@/components/Nav.vue'
  export default {
      components:{
          Nav
      },
      methods:{
          getPageName(val){
//              console.log(val);
              alert(val);
          }
      }
  }
</script>
