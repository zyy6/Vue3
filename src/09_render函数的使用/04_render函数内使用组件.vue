<script>
import { h } from 'vue'
export default {
   props:{
      msg:String
   },
   emits:['add','sub'],
   render(){
      console.log(this.msg);
      return h('div',{},[
         h('h1',{},this.msg),
         h('button',{
            onClick:()=> {
               console.log(this.msg);
            }
         },'+1'),
         h('button',{
            onClick:()=>{
               console.log(this.msg);
            }
         },'-1')
      ])
   }
}
</script>

<style>
</style>