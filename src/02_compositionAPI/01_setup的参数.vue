<template>
    <div />
</template>

<script>
export default {
    /*
     * setup函数参数:
      props:所有非prop的属性
      context:{ 上下文(也可以理解为作用域)对象,里面包括三个参数,也可以使用解构方式。
          attrs:所有非props的属性
          slots:父组件传递过来的插槽内容
          emit:当前组件内部需要发出事件会用到emit
      }
      注意:setup里面"没有绑定this",因为setup被调用之前,data丶computed丶methods等都还没有被解析出来，所以无法在setup中获取this。
     */
    setup(props,{attrs,slots,emit}) {
    // 一：setup参数
    console.log(props);
    console.log(attrs);
    console.log(slots);
    console.log(emit);

  }
}
</script>

<style>
</style>