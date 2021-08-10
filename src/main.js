import { createApp } from 'vue'


// 02.composition API
// import App from './02_compositionAPI/App.vue' 

// 03.refAPI的补充
// import App from './03_refApi的补充/app.vue' 

// 04_computed和watch
// import App from './04_computed和watch/App.vue'

// 5.生命周期钩子函数
// import App from './05_生命周期钩子/App.vue'

// 6.Provide和inject
// import App from './06_Provide和inject/App.vue'

// 7. compositionAPI练习
// import App from './07_compositionAPI练习/App.vue'

// 8.setup实验性编写
// import App from './08_setup实验性编写/App.vue'

// 9. render函数的使用
// import App from './09_render函数的使用/App.vue'

// 10.自定义指令
import App from './10_自定义指令/App.vue'


const app = createApp(App)

// 自定义指令,在Vue3中,生命周期函数的名称已经换成了组件生命周期的名称

// 输入框获得焦点
app.directive('focus',{
    mounted(el) {
        el.focus()
    }
})

// 动态设置 按钮的颜色
app.directive('btn',{
    mounted(el) {
        const text = el.innerHTML
        switch (text) {
            case  '添加':
            el.style.color = '#409EFF'
            break;
            case '删除':
            el.style.color = 'red'
            break;
            case '编辑':
            el.style.color = '#E6A23C'
            break;
        }
    }
})


app.mount('#app')


