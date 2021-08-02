<template>
    <div>
        {{msg}}
        {{age}}

        <button @click="msg = '黄昏'">修改msg</button>
        <button @click="addClick">修改age</button>
    </div>
</template>

<script>
/*
    watchEffec：自定收集响应式依赖
*/
import {ref,watchEffect} from 'vue'
export default {
    setup() { 
        let msg = ref('duks')
        let age = ref(18)

        /*
            使用 watchEffect参数为函数,不需要像vue2中 的 watch指定选择监听某个属性
            
           而是直接在函数内，使用响应式的值，作为 watchEffect的收集，当收集好的 响应式属性发生变化的时候，就会触发回调，引发副作用。

           1.watchEffect 传入的函数会被立即执行一次，并且在执行的过程中会收集依赖；
           2.只有收集的依赖发生变化时，wachEffect传入的函数才会再次执行。
        */


            watchEffect((onInvalidate)=>{
            // onInvalidate 是形参，类型的函数,它本身又可以添加一个函数，它就类似于 监听器的销毁函数，当我们属性发生变化时候，将会重新触发监听器回调之前就会调用这个函数。

            // 案例: 定时器模拟 网络请求,2秒后执行
            const timer = setTimeout(()=>{
                console.log('2秒之后执行');
            },2000)

            // 重新触发或者 销毁之前触发 onInvalidate回调
            onInvalidate(()=>{
                // 在这个函数中请求额外的副作用,请求定时器,或者关闭网络请求
               clearTimeout(timer)
            })

            console.log('msg:' + msg.value);
            console.log('age:' + age.value);
        })
       

        return {
            msg,
            age,
        }
    }
}
</script>

<style>
</style>