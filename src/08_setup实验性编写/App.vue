<template>
    <div>
        {{num}}
        <button @click="add">+</button>
        <button @click="sub">-</button>

        <Home
            msg="hhhhhhhhhhhhhhhhhhhhhhhh"
            @updata="updata"
        />
    </div>
</template>

// 在 script 标签中定义 setup,那么在script标签内写的代码，就相当于在setup中写代码，并且不需要return出去
<script setup>
import Home from './home.vue' //导入就可以在模板中使用,不需要注册
import {ref} from 'vue'
const num = ref(0)
const add  = () => num.value++
const sub = () => num.value--

const updata = () =>{
    console.log('子组件触发');
}
</script>

<style>
</style>