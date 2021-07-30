<template>
    <div>
        <h2>setup实现简易计数器</h2>
        <p>当前数:{{state.num}}</p>
        <button @click="add">+</button>
        <button @click="sub">-</button>
    </div>
</template>

<script>
// reactive 函数 可以将数据包装成响应式的
import { reactive} from 'vue'

export default {
    setup() {
        // 1.这样写法,虽然可以在内存中增加或者减少数字,但是不是响应式的。
        // let num = 0
        // const add = () => {
        //      num++
        //      console.log(num);
        // }
        // const sub = () => {
        //     num--
        //     console.log(num);
        // }

        // 2.使用 reactive 函数，响应式的, reactive函数内部通过proxy数据劫持get和set,之前option API 中 data选项 也是在内部通过 reactive函数将其变成响应式对象的，然后将reactive包装后的对象 导出,在模板中可用。
        const state = reactive({num:0})
        console.log(state); // {num: 0}
        const add = ()=> state.num++
        const sub = ()=> state.num--


        return {
            state,
            add,
            sub
        }
    }
}
</script>

<style>
</style>