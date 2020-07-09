<template>
  <div class="wrapper">
    Mixin混入
    <div>
      <Child1 v-if="child1IF"/>
      <button @click="child1IF = false">X</button>
      <Child2 v-if="child2IF"/>
      <button @click="child2IF = false">X</button>
    </div>
  </div>
</template>

<script>
import Child1 from "./MIxinCompontens/child1"
import Child2 from "./MIxinCompontens/child2"
export default {
  components: {
    Child1,
    Child2
  },
  props: {},
  data() {
    return {
      child1IF:true,
      child2IF:true,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
</style>