<template>
    <div>
        <!-- 清除监听器的副作用 -->
        <button @click="getData">点击发起网络请求</button>
        {{num}}
    </div>
</template>

<script>
import {ref,watchEffect} from 'vue'
export default {
    setup() {
         /*
            watchEffect 的扩展，清除副作用,
            比方:当我们监听一个属性的变化,然后发起请求，就比如搜索框，但是会有网络请求延迟的情况下，就会造成，上一次的请求还没成功，这马上就要开始新的请求。
            我们可以在 下一次请求的时候，清除上一次请求。

            说白了就是 当我们多次触发监听器,去发起网络请求时候，下一次触发前,就清除上一下的网路请求
       */
      const num = ref(0)


      watchEffect((onInvalidate)=>{
        let timer = null
        // 定时器模拟 发起清除
        timer = setTimeout(()=>{
            console.log('2秒请求成功!!!');
        },2000)
        console.log(num.value);

        // watchEffect 有一个参数 ,这个函数也是一个函数,它接受的参数也是函数，可以理解为, 重新触发或者 销毁之前触发 onInvalidate回调
        onInvalidate(()=>{
            // 清除定时器
            clearTimeout(timer)
        })
      })

     const getData = ()=>{
         num.value++
     }

      return {
          getData,
          num
      }

    }
}
</script>

<style>
</style>