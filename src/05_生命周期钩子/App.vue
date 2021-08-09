<template>
  <div>
    <h1>声明周期钩子函数</h1>
    <button @click="btn">{{msg}}</button>
  </div>
</template>

<script>
// 在Vue3中 没有 beforeCreate 和 created,如果有需要在挂载前完成的事情,我们可以写在 setup中
import { onMounted,onUpdated,onUnmounted,ref } from 'vue'
export default {
    setup() {

        // 同一生命周期钩子函数,可以多次调用
        onMounted(()=>{
            console.log('onMounted1');
        })
         onMounted(()=>{
            console.log('onMounted2');
        })

        let msg = ref('生命周期')

        const btn = ()=>{
            msg.value = '666'
        }

        onUpdated(()=>{
            console.log('onUpdated');
        })
        onUnmounted(()=>{
            console.log('onUnmounted');
        })

        return {
            msg,
            btn
        }
    }
}
</script>

<style>
</style>