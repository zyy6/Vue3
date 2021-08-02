<template>
    <div>
        {{name}}
        <button @click="btn">修改</button>
    </div>
</template>

<script>
/*

    和option API 用法一致，vue3中要在setup中使用,

    两种编写形式
    1.函数形式，默认触发 get,return 返回值
    2.对象形式，可以使用 get 和 set

    注意: Vue3中的 computed API,返回值是ref响应式对象,如果要修改 要通过 value,但是在模板中 直接使用即可，因为模板中会解包。

*/
import {ref,computed} from 'vue'
export default {
    setup() {
        let l = ref('du')
        let r =  ref('sk')

        // let name = l.value + r.value  // 没有响应式
        // let name = computed(()=>l.value + r.value) //响应式

        const name = computed({
            get:()=> l.value + r.value,
            set:(newValue)=>{
                l.value = newValue.split(' ')[0]
                r.value = newValue.split(' ')[1]
            }
        })

        const btn = ()=>{
            name.value = 'yy hh'
        }

        return {
            name,
            btn
        }
    }
}
</script>

<style>
</style>