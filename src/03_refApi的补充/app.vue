<template>
    <div>
        <h1> 03_refApi的补充 </h1>

        {{name}}
        {{age}}

        {{name3}}
    </div>
</template>

<script>
import { 
    reactive,
    toRefs,
    toRef
    } from 'vue'
export default {
    setup() {
        // 使用 reactive 创建响应式对象
        const reactive1 = reactive({name:'dusk',age:18})

        // 如果我们在开发中，想使用结构的方式，取到 reactive响应式对象的元素，比如   const {name,age} = reactive({name:'dusk',age:18}),就只能依靠其他api来帮我们完成


        // 1.toRefs:将reactive对象中的所有属性都转成ref，建立连接,当修改了reactive中对象的值，那么 toRefs中所连接的值也会发生变化
        const {name,age} = toRefs(reactive1)
    

        // 2. toRef:将reactive对象中的所有属性都转成ref，建立连接，如果我们只想结构一个元素，就可以使用 toRef，参数1:响应式对象，参数2:其中一个元素的key
        const name3 = toRef(reactive1,'name')

        console.log(reactive1); 
        
        return {
            reactive1,
            name,
            age,
            name3
        }
    }
}
</script>

<style>
</style>