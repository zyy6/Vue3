<template>
    <div>
        <p>二丶setup返回值</p>
        <p>{{msg}}</p>
        <button @click="btnClick">点击按钮</button>
    </div>
</template>

<script>
export default {
    /*
    setup函数的返回值
        setup的返回值可以在模板 template中使用,
        也就是说我们可以通过setup的返回值代替data选项
    */
   setup() {
        // 二：setup返回值
    const msg = '我是setup的返回值'
    const btnClick = ()=> console.log('点击了');
    return {
        // setup导出的属性或方法可以在 模板中使用
        msg,
        btnClick
    }
   }
}
</script>

<style>
</style>