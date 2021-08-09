<template>
    <div>
        <button @click="click">修改</button>
    </div>
</template>

<script>
import {reactive,watch} from 'vue'
export default {
    setup() {
        const info = reactive({name:'dusk',age:18,obj:{num:20}})

        // 情况1.如果传入的是 reactive 对象,在源码中,则默认给我们开启了deep,深度侦听
        // watch(info,(newValue,oldValue)=>{
        //     console.log(newValue);
        //     console.log(oldValue);
        // })

        // 情况2 如果我们想把 reactive 对象转换成解构转换为普通对象,那么则无法进行深度监听的,需要我们额外的配置
         watch(()=>({...info}),(newValue,oldValue)=>{
            console.log(newValue);
            console.log(oldValue);
        },{
            // 开启深度监听
            deep:true,
            // 初始化的时候就执行
            immediate:true
        })


        const click = ()=>{
            info.obj.num++ 
        }
        return {
            click
        }
    }
}
</script>

<style>
</style>