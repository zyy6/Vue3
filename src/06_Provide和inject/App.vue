<template>
  <div>
    <Home />
  </div>
</template>

<script>
import {ref,provide,readonly} from 'vue'
import Home from './Home.vue'
export default {
    components:{
        Home
    },
    // Vue3也是可以使用provide和inject
    setup() {

         // 然后正常的情况下,如果子组件拿到的是一个响应式对象，那么子组件是可以进行修改的,但是我们在开发中,还是要遵守数据单向流的规则.所以如果我们不希望子组件修改注入的数据,我就们可以使用 readonly(只读)

        let num = ref(100)
        // provide 注入,在父组件注入之后,所有的子组件都可以通过 inject 拿到这个值
        provide('num',readonly(num)) // 通过 readonly 将响应式包住,这样注入的就是一个可读的响应式数据
        return { }
    }
}
</script>

<style>
</style>