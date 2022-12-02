<template>
    <div>
        <Sect1Main />
        <Sect2Main />
        <Sect3Main />
        <Sect4Main />
    </div>
</template>

<script>
import Sect1Main from './Sect1Main.vue'
import Sect2Main from './Sect2Main.vue'
import Sect3Main from './Sect3Main.vue'
import Sect4Main from './Sect4Main.vue'

    export default {     
        name: 'MainComp',
        components:{
             Sect1Main,
             Sect2Main,
             Sect3Main,
             Sect4Main
         }
    }
</script>

<style lang="scss" scoped>

</style>