<template>
  <div class="wrapper">
      <button @click="test()">换肤</button>
      <button @click="test('small')">小字体</button>
      <button @click="test('large')">大字体</button>
      <button @click="test('normal')">正常字体</button>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  inject:["modifyFun"],
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){},
  methods:{
    test(fontSize){
      this.modifyFun(fontSize)
    }
  },
}
</script>
<style scoped>

</style>