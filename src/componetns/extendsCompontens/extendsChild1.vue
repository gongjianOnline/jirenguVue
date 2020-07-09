<template>
  <div class="wrapper">
      extendsChild1
  </div>
</template>

<script>
import MyVue from "../../extend/extend.js"
export default {
  extends:MyVue,
  components:{},
  props:{},
  data(){
    return {
      name:'extedsChild1'
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