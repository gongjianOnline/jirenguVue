<template>
  <div class="wrapper">
      child1
  </div>
</template>

<script>
import Log from "../../minxins/log.js"
export default {
  components:{},
  props:{},
  data(){
    return {
      time:null,
      name:"child1"
    }
  },
  mixins:[Log]
}
</script>
<style scoped>

</style>