<template>
    <div>
        <p>子组件接收的只读值{{readonlyInfo}}</p>
        <button @click="zUpdata">子组件修改父组件的值</button>
    </div>
</template>

<script>
export default {
    /*
        readonly() 函数
            作用:可以将包装起来的数据变成只读。
            应用场景:当父组件拿到数据,传递给子组件,并且不希望子组件可以修改该数据。
            原理: 调用该函数时,如果修改数据，set方法将会被劫持。
    */
   props:{
       readonlyInfo:Number
   },
   emits:['update:readonlyInfo'],
    setup(props,{emit}) {
        console.log(props);
        const msg = '123木头人'

        const zUpdata = ()=>{
            //  当修改了只读readonly属性的时候就会报错 : Set operation on key "value" failed: target is readonly.
            emit('update:readonlyInfo',999999)
        }
        return {
            msg,
            props,
            zUpdata
        }
    }
}
</script>

<style>
</style>