<template>
    <div>
        <h2>setup实现简易计数器</h2>
        <!-- 
            这里就直接使用 通过 ref函数包装后的引用对象 
            疑问1:
                num应该是一个引用对象,但是为什么可以直接在模板中使用?
                正常逻辑的话，是应该通过 num.value,拿到内部在维护的响应式值,但是 vue3帮我们在模板中自动解包了 ref引用类型，本质上还是 通过 .value拿到值,只不过是vue3帮我们做的。
        -->
        <p>当前数:{{num}}</p>
        <p>外层普通对象,当前数:{{obj.num.value}}</p>
        <p>外层reactive可响应式对象,当前数:{{reactiveObj.num}}</p>
        <button @click="add">+</button>
        <button @click="sub">-</button>
    </div>
</template>

<script>
// reactive 函数 可以将数据包装成响应式的
// import { reactive} from 'vue'
// ref 函数 可以将数据包装成响应式的
import { ref,reactive } from 'vue'


export default {
    setup() {
        /*
            reactive 函数:
                对传入的类型是有限制的，它要求我们必须传入一个对象或者数组,不可以参入基本数据类型，如果传入了基本数据类型(String丶Number丶Boolean)，就会有警告,并且数据也不是响应式的。
                而且 reactive 返回的是一个对象,而且传入的类型还有限制，如果想要传入普通数据类型,必须 {name:'HHHH'} 先要写一个对象,取值的时候,也是要通过这个对象来取,每次操作起来未免有点繁琐。所以Vue3又给我们提供了另外一个响应式api ref
        
            ref 函数: (referenced 引用的意思)
                ref也会返回一个可变的响应式对象，该对象作为一个响应式的引用维护着它内部的值(value)

        */

        // const state = reactive({num:0})


        // let num = 0 // 这里的num就是单纯的数值类型
        let num = ref(0)  // 使用ref函数，此时 num 变成了 ref的可响应式的引用对象了
        console.log(num);

        // 虽然 vue3帮我们在 模板中 解包了ref ，但是在逻辑中并没有解包，也就是在setup中，我们只能通过value拿到 ref引用对象中 响应式的值。
        const add = ()=> num.value++
        const sub = ()=> num.value--

        /* 关于 ref解包的特殊情况, 由于ref在模板中是浅解包，所以会有以下两种情况 */
        // 1. ref引用对象外层是普通对象,在模板中使用不会自动解包,只能通过 value拿到值。
        const obj = {
            num
        }

        // 2.当外层的对象是 reactive 函数时,是可以解包的，但不不推荐这样使用
        const reactiveObj = reactive({
            num
        })


        return {
            num,
            add,
            sub,
            obj,
            reactiveObj
        }
    }
}
</script>

<style>
</style>