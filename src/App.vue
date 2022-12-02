<template>
  <div id="app">
   
    <HeaderComp :navBar="navBar"/>
    <MainComp />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
  },

  data(){
    return{
      navBar:['HOME', 'SERVICES', 'SKILLS', 'PARTNERS', 'BLOG', 'GET IN TOUCH']
    }
  },
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
}
</style>
