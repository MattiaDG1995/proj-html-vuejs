<template>
  <div id="app">
   
    <HeaderComp :navBar="navBar"/>
    <MainComp />
    <FooterComp :about="about" :transport="transport" :support="support"/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },

  data(){
    return{
      navBar:['HOME', 'SERVICES', 'SKILLS', 'PARTNERS', 'BLOG', 'GET IN TOUCH'],
      about:['The Company', 'Institutional','Social & Events', 'Innovation', 'Environment', 'Tecnology'],
      transport:['Indusrtialized', 'Chemicals','Packaged liquids', 'Construction', 'Laminated wood', 'And others'],
      support:['Responsibility', 'Therms of use','About cockies', 'Privacy policy', 'Accessibility', 'Information']
    }
  },
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
}
</style>
