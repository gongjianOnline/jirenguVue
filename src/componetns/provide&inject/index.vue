<template>
  <div class="wrapper">
    <div>提供和注入</div>
    <div :class="`app app-${themeName} app-${fontSize}`">
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error in vel assumenda maiores, voluptates iusto ullam quibusdam velit corporis placeat inventore eaque sed, exercitationem quaerat quod quas possimus reprehenderit aliquid!
      </span>
      <Child1 class="button"/>
    </div>

  </div>
</template>

<script>
import Child1 from "./componetns/child1.vue"
export default {
  provide(){
    return{
      modifyFun:this.modifyFun 
    }
    
  },
  components:{
    Child1
  },
  props:{},
  data(){
    return {
      themeName:"blue",
      fontSize:"normal"
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){},
  methods:{
    modifyFun(fontSizeName){
      console.log(this.themeName === "blue")
      if(this.themeName === "blue"){
        this.themeName = "red"
      }else{
        this.themeName = "blue"
      }
      if(fontSizeName){
        this.fontSize = fontSizeName
      }
    }
  },
}
</script>
<style scoped>
.app.app-red{
  color: red;
}
.app.app-blue{
  color: blue;
}
.app.app-small{
  font-size: 12px;
}
.app.app-normal{
  font-size: 18px;
}
.app.app-large{
  font-size: 24px;
}
.button>>>button{
  font-size: inherit;
}


</style>