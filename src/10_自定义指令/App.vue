<template>
    <div>
        <input
            type="text"
            v-focus
        >

        <button v-btn>添加</button>
        <button v-btn>删除</button>
        <button v-btn>编辑</button>
        <button v-btn>查找</button>

    </div>
</template>

<script>
export default {
    // 局部自定义指令
    // directives:{
    //     focus:{
    //         mounted(el) {
    //            el.focus()
    //         }
    //     }
    // }
}
</script>

<style>
</style>