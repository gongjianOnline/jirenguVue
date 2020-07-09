let log = {
  data(){
    return{
      time:null,
      name:""
    }
  },
  created() {
    this.time = new Date()
    console.log(`${this.name}初始化了`)
  },
  beforeDestroy() {
    let andTime = new Date();
    console.log(`${this.name}死啦,活了${andTime - this.time}mm`)
  }
}
export default log