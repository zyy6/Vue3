<template>
  <div>
    {{num}}
    <hr />
    {{name}}
  </div>
</template>

<script>
import  {inject} from 'vue'
export default {
    setup() {
        // 子组件内,可以通过 inject 拿到 父组件 provide传递的值
      let num = inject('num')

      let name = inject('name','如果父组件没有注入该值,就会默认显示第二个参数默认值')

        // 然后正常的情况下,如果子组件拿到的是一个响应式对象，那么子组件是可以进行修改的,但是我们在开发中,还是要遵守数据单向流的规则。

      return {
          num,
          name
      }
    }
}
</script>

<style>
</style>