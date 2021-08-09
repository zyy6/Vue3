import {ref} from 'vue'
export default function(){

    const scrollX = ref(0)
    const scrollY = ref(0)

    // 监听页面的滚动
    document.addEventListener('scroll',()=>{
        
        scrollX.value = Math.floor(window.scrollX)
        scrollY.value = Math.floor(window.scrollY)
    })

   
    return {
        scrollX,
        scrollY
    }
}