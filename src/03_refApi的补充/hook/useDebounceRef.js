// ref 节流
import {customRef} from 'vue'

/*
    customRef - 可以用来自定义Ref,并对其依赖项跟踪和更新触发进行显示控制。
    它需要一个工厂函数，该函数接收 track 和 trigger 函数 作为参数；
    并且应该返回一个带有get和set的对象
*/

// AntiShakeRef  防抖
export const AntiShakeRef = (value,delay=300) => {
    let timer
    return customRef((track,trigger)=>{
        return {
            get(){
                track() //当在模板中使用,就会调用 get方法，通过 track 收集最新的依赖
                return value
            },
            set(newVaule){
                clearTimeout(timer)
                timer = setTimeout(()=>{
                    value = newVaule //将最新的值,赋值给 value
                   
                    trigger() // 触发所有的依赖进行 更新
                },delay)
            }
        }
    })
}