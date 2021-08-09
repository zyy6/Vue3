<script>
/*
    首先,Vue推荐推荐我们在绝大多数请求下，使用 模板来创建 HTML,然后一些特殊的场景，真的需要JavaScript的完全编程的能力，这个时候就可以使用 渲染函数了

    h 函数可以将我们传入的某些特定的参数,通过 render函数 转换为 虚拟节点(Vnode)
*/
import { h } from 'vue'

export default {
    render(){
        return h('h1',{class:"A"},'你好 h函数')
    }
}
</script>

<style>
.A {
    color: red;
}
</style>