<template>
  <div class="wrapper">
    extends继承
    <div>
      <extendsChild1 v-if="extendChild1If"/>
      <button @click="extendChild1If=false">off</button>
      <extendsChild2 v-if="extendChild2If"/>
      <button @click="extendChild2If=false">off</button>
    </div>
  </div>
</template>

<script>
import extendsChild1 from "./extendsCompontens/extendsChild1.vue"
import extendsChild2 from "./extendsCompontens/extendsChild2.vue"
export default {
  components:{
    extendsChild1,
    extendsChild2
  },
  props:{},
  data(){
    return {
      extendChild1If:true,
      extendChild2If:true,
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){},
  methods:{},
}
</script>
<style scoped>
</style>