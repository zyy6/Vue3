<template>
    <div>
        {{num}}
        {{doubleNum}}
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <br />
        {{retValue}}
        <button @click="edit">修改本地存储</button>
        <div class="box"></div>

        <div class="scroll-box">
            <div class="scroll-X">scroll-x:{{scrollX}}</div>
            <div class="scroll-Y">scroll-Y:{{scrollY}}</div>
        </div>

    </div>
</template>

<script>
/*
    案例1：计数器
    需求, 点击＋ 就增加数字 点击－就减少数字

    案例2: 修改标题

    案例3：监听滚动坐标位置

    要求 相关逻辑 代码 抽离到 hook(钩子的意思,那就是意思我们将逻辑抽离为一个独立的钩子函数)
*/
import {
    useCounter,
    useTitle,
    useScrollPosition,
    useLocalStorage
} from './hooks'
export default {
    setup() {

        // 计算器hook
       const {num,doubleNum,add,sub} = useCounter()

        // 修改标题
       const titleRef = useTitle('1111111')
        setTimeout(() => {
            titleRef.value = '666666666666'  
        }, 1000);

        // 页面滚动坐标
        const {scrollX,scrollY}  =  useScrollPosition()

        // 创建一个 关于 本地存储 hook
        const retValue = useLocalStorage('key',{name:'dusk',age:20})
        const edit  = () => retValue.value = {name:'ASDASAS',age:18}
    
        return {
            num,doubleNum,add,sub,
            scrollX,scrollY,
            retValue,edit
        } 
    }
}
</script>

<style>
.box {
    width: 5000px;
    height: 5000px;
}
.scroll-box {
    position: fixed;
    bottom: 50px;
    right: 50px;
}
</style>