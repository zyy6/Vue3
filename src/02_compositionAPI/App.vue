<template>
    <div>
        <h2>CompositionAPI</h2>

        <!-- 05_只读属性readonly函数 -->
        <!-- <setup v-model:readonlyInfo="readonlyInfo" /> -->
        <!-- readonly 函数 -->
        <!-- <p>{{info}}</p> -->
        <!-- <button @click="fUpData">父组件修改子组件的值</button> -->
        <!-- 05_只读属性readonly函数  end -->

        <setup />
    </div>
</template>

<script>

// import setup from './01_setup的参数.vue'
// import setup from './02_setup的返回值.vue'
// import setup from './03_setup实现简易计数器.vue'
// import setup from './04_reactive函数和ref函数.vue'
// import setup from './05_只读属性readonly函数.vue' 
import setup from './06_reactive和readonly判断API.vue' 




import {ref,readonly} from 'vue'
export default {
  name: 'App',
  components: {
    setup
  },
  setup() {
    /* 05_只读属性readonly函数 */
    // 推荐 readonlyInfo() 包装的是 响应式对象,这样当修改info readonlyInfo也会发生变化
    let info = ref(666666)
    const readonlyInfo = readonly(info)
    const fUpData = ()=> info.value = 777777
    // end
    return {
      info,
      readonlyInfo,
      fUpData
    }
  }
}
</script>

<style>
</style>
