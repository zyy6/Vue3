
<script>
// import render from './01_render函数的基本使用.vue'
// import render from './02_render函数实现计数器.vue'
// import render from './03_setup实现计数器.vue'
import render from './04_render函数内使用组件.vue'

import {h} from 'vue'
export default {
    
    // 如果需要 render 函数来编写模板的话，使用组件，就不需要通过components注册，而是直接使用即可，第二个参数
    render(){
        return h(render,{msg:'dusk'})
    }
}
</script>

<style>
</style>