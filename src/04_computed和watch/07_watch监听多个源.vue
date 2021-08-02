<template>
    <div>
        <button @click="btn">修改</button>
    </div>
</template>

<script>
import {ref,reactive,watch} from 'vue'
export default {
    setup() {
        // 1.定义可响应式对象
        const info = reactive({name:'dusk',age:18})
        const age = ref('02')

        // 2。侦听器,传递一个数组,可以一次监听多个 数据的改变,但是 info 会返回 reactive 对象
        // watch([info,age],(newValue,oldValue)=>{
        //     console.log(newValue);
        //     console.log(oldValue);
        // })

        // 将 reactive 解构为普通对象
        //  watch([()=>({...info}),age],(newValue,oldValue)=>{
        //     console.log(newValue);
        //     console.log(oldValue);
        // })


        // 还可以将 newValue,和 oldValue  结构
         watch([()=>({...info}),age],([newInfo,newAge],[newValue,oldValue])=>{
            console.log(newInfo);
            console.log(newAge);

            console.log(newValue);
            console.log(oldValue);
        })
  

        const btn = () => {
            info.name = 'huanghun'
        }

        return {
            info,
            age,
            btn
        }
    }
}
</script>

<style>
</style>