<template>
    <div>
        <!-- 停止  watchEffect 侦听器-->

        {{age}}
        <button @click="btnClick">点击增加年龄</button>
    </div>
</template>

<script>
import {ref,watchEffect} from 'vue'
export default {
    setup() {

         /*
            watchEffect 的扩展,停止侦听
                应用场景,比如我们一直监听一个数字,我想在一个数字大于30的时候,就停止侦听。

            watchEffect API 的返回值是一个函数,当我们在某个契机下调用了  这个函数,将会停止 watchEffect 侦听器
        */

        // 案例:当  age 大于 30  则停止监听
        const age = ref(18)
        
        const stop =   watchEffect(()=>{
            console.log(age.value);
        })

        const btnClick = () => {
            age.value++
            
            if(age.value>=30) {
                stop()
            }
        }


        return {
            age,
            btnClick
        }
    }
}
</script>

<style>
</style>