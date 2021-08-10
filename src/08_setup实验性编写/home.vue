<template>
    <div>
        我是子组件
        {{msg}}
        <button @click="btn">子组件点击</button>
    </div>
</template>

<script setup>
// 1.在子组件内接收 prop，需要导入 defineProps函数,函数内可以定义需要接收的 prop
// 2.如果要发射事件,可以导入 defineEmits,注册事件,然后通过 emit() 发射事件
import {defineProps,defineEmits} from 'vue'

const props = defineProps({//该函数 回返回一个实例,可以通过实例去拿到prop
    msg:String
})
console.log(props.msg);

const emit =  defineEmits(['updata']) // 可以从 defineEmits函数中,提前注册我们要发射的事件,该函数会返回一个函数，我们可以通过返回的函数去发射事件。
const btn = () => {
    emit('updata')
}
</script>

<style>
</style>