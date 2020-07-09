<template>
  <div class="wrapper">
    自定义事件测试
    <button v-click="hi">自定义触发</button>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){},
  methods:{
    hi(){
      console.log("test")
    }
  },
  directives:{
    click:{
      inserted(el,info){
        console.log(info)
        el.addEventListener(info.name,info.value)
      }
    }
  }
}
</script>
<style scoped>

</style>