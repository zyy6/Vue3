<template>
    <div>
        <button @click="btnClick">修改info</button>
        <button @click="btnClick1">修改num</button>

    </div>
</template>

<script>
import {ref,reactive,watch} from 'vue'
export default {
    setup() {
        
        // 在组合式 API中的watch基本和 option的使用差不多 

        // watch 需要侦听特定的数据源，并在回调函数中执行副作用

        // 默认情况下它的懒惰的，初始化不会执行，只有在侦听的源发生变化的时候才会执行回调

        /*
            与watchEffect的比较，watch允许我们:
            懒执行副作用(第一次不会执行);

            更具体的说明当哪些状态发生变化时，触发侦听器的执行； 
            访问侦听状态变化前后的值(newValue,oldValue)

            参数:
            1.要侦听的元素,可以是一个响应式对象,也可以传入一个数组,也可以是一个普通对象，也可以传入get函数

            2.侦听器回调函数, watch中可以在 回调中拿到 上一次的值和最新的值

            3.额外的配置项,比如是否要在初始化的时候就侦听,是否设置 deep
        */

        const info = reactive({name:'dusk',age:18})

        const num = ref(0)

        // 1.侦听watch时,传入一个getter函数
        watch(() => info.name,(newValue,oldValue)=>{
            //{name: "huanghun", age: 18} 得到的是 reactive 对象
            console.log(newValue,oldValue); 
        })

        // 2.传入一个可响应式对象:ref 对象
        watch(num,(n,o)=>{
            // 如果传入的是 ref对象的时候,watch源码给我们返回的时候 会帮我们解包,也就是帮我们 .value
            console.log(n);
            console.log(o);
        })

        // 3. 希望 newValue oldValue 是一个普通的对象
        watch(()=>{
            return {...info}
        },(newValue,oldVaule)=>{
            console.log(newValue);
            console.log(oldVaule);
        })

        const btnClick = ()=>{
            info.name ='huanghun'
        }

        const btnClick1 = ()=>{
            num.value++
        }


        return {
            num,
            btnClick,
            btnClick1
        }


    }
}
</script>

<style>
</style>