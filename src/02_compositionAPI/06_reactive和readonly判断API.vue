<template>
    <div>
        <p>判断API</p>
        <p>shallowReactive</p>
        {{shallowReactive5.name}}
        <!-- 最外层的对象是响应式的 -->
        <button @click="shallowReactive5.name = '黄昏'">更换</button>
        <br />

        {{shallowReactive5.age.num}}
        <!-- 里面的对象是无法响应式的 -->
        <button @click="shallowReactive5.age.num = 20">更换</button>
        <br />
        <p>shallowReadonly</p>
        {{shallowReadonly6.name}}
        <!-- 最外层的对象是只读不可写的，如果要修改 将会报错 -->
        <button @click="shallowReadonly6.name = '黄昏'">更换</button>
        <br />

        {{shallowReadonly6.age.num}}
        <!-- 嵌套的对象是可更改的 -->
        <button @click="shallowReadonly6.age.num = 20">更换</button>
    </div>
</template>

<script>
import {
    reactive,
    ref,
    readonly,
    isProxy,
    isReactive,
    isReadonly,
    toRaw,
    shallowReactive,
    shallowReadonly
    } from 'vue'
export default {
    setup() {
        // 1.判断检查对象是否由 reactive 和 readonly 创建的 proxy
        const reactive1 = reactive({name:'dusk'})
        const readonly1 = readonly({name:'dusk'})
        const ref1 = ref('dusk')

        console.log(isProxy(reactive1)); // true
        console.log(isProxy(readonly1)); // true
        console.log(isProxy(ref1)); // false

        // 2.检查 对象是否 是由 reactive创建的响应式代理，如果该代理是由readonly创建的，但包裹了 由 reactive 创建的两一个代理,也会返回true
        const reactive2 = reactive({name:'dusk'})
        console.log(isReactive(reactive2)); // true
        const readonly2 = readonly(reactive2)
        console.log(isReactive(readonly2)); // true

        // 3.检查对象是否 是由 readonly 创建的只读代理
        const readonly3 =  readonly(ref('dusk'))
        console.log(isReadonly(readonly3));

        // 4.返回由 reactive 和 readonly 代理的原始对象(谨慎使用)
        const reactive4 = reactive({name:'dusk'})
        console.log(toRaw(reactive4)); // {name: "dusk"}
        const readonly4 =  readonly({name:'dusk'})
        console.log(toRaw(readonly4)); // {name: "dusk"}

        // 5.创建一个响应式代理,它跟踪自身的 属性的响应式，但不执行嵌套对象的深层响应式转换，说白了就是创建一个响应式对象，只有最外层的对象是响应的，里面如果还嵌套对象，那就不会是响应式的了。
        const shallowReactive5 = shallowReactive({name:'dusk',age:{num:18}})
        console.log(shallowReactive5);
        

        // 6.创建一个 proxy 使自身的属性为只读，但不执行嵌套对象的深度只读转换，说白了就是 创建一个 只读对象，类似于 readonly,但是readonly就算有嵌套的对象也是只读不可写的，但是  shallowReadonly 只能最外层的对象是只读不可写的，嵌套的对象是可以 写入的

        const shallowReadonly6 = shallowReadonly({name:'dusk',age:{num:18}})
        console.log(shallowReadonly6);
        return {
            shallowReactive5,
            shallowReadonly6
        }
    }
}
</script>

<style>
</style>