<template>
  <div class="hello">
    <div> 
      表单栏
      <div> 
        <button @click="routBtn('directive')">directive自定义指令</button>
        <button @click="routBtn('mixin')">Mixin混入</button>
        <button @click="routBtn('extend')">exentds继承</button>
        <button @click="routBtn('injectIndex')">provid&inject</button>
      </div>
    </div>
    <!-- 视图层 -->
    <div> 
      <router-view></router-view>
    </div>




  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    routBtn(name){
      this.$router.push({
        name:name,
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
