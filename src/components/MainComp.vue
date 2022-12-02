<template>
    <div>
        <Sect1Main />
        <Sect2Main />
        <Sect3Main />
    </div>
</template>

<script>
import Sect1Main from './Sect1Main.vue'
import Sect2Main from './Sect2Main.vue'
import Sect3Main from './Sect3Main.vue'

    export default {     
        name: 'MainComp',
        components:{
             Sect1Main,
             Sect2Main,
             Sect3Main
         }
    }
</script>

<style lang="scss" scoped>

</style>