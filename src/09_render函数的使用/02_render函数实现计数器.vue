<script>
// 1.引入render函数
import { h } from 'vue'
export default {
    data(){
        return {
            num:0
        }
    },
    render(){
        return h('div',null,[
            h('h1',null,`当前计数${this.num}`),
            h('button',{
                onClick:() => this.num++
            },'+'),
            h('button',{
                onClick:() => this.num--
            },'-')
        ])
    }
}
</script>

<style>
</style>