<template>
    <div>
        <!-- watchEffect 默认会在初始化的时候执行一次 -->
        <p ref="dom">dusk</p>
    </div>
</template>

<script>
import {ref,watchEffect} from 'vue'
export default {
    // 比如我想在 setup中拿到最新的 DOM对象,也可以通过侦听器帮助我们拿到 
    setup() {

        // 因为 ref 是响应式的,当初始化的时候为空,一旦DOM挂载好了之后 ref=dom,就会添加为响应式对象,下面的监听器也会再执行一遍


        const dom = ref(null)
       
        watchEffect(()=>{
             // 默认清空的话,会打印两次,一个null,一个DOM元素
            console.log(dom.value);
        },
        {
            // flush:"pre" // 默认初始化执行
            flush:"post"//DOM挂载完成之后执行,这样就可以准确的通过 侦听器获取到DOM 
        }
        )


        // 如果我们 不希望监听器在初始化的时候就执行，而是在DOM挂载之后才执行,我们可以配置它的执行时机

        return {
            dom
        }
        
    }
}
</script>

<style>
</style>