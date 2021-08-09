import {ref,watch} from 'vue'
export default function(key,value){
    if(!key) return
    const retValue = ref(value)

    // 判断是get还是set
    value ? localStorage.setItem(key,JSON.stringify(retValue.value)) : retValue.value = localStorage.getItem(key) 
    

    if(value) {
        watch(retValue,(newValue)=>{
            localStorage.setItem(key,JSON.stringify(newValue))
        })
    }
   

    return retValue
}

// 情况一:如果只传入了一个值,则是取值
// 情况二:如果传入了连个值,第一个值为key,第二个值为value