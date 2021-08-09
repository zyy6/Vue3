import {ref,computed} from 'vue'
export default () => {

    let num = ref(0)
    const add = ()=> num.value++
    const sub = ()=> num.value--

    const doubleNum = computed(()=>num.value * 2)

    return {
        num,
        doubleNum,
        add,
        sub
    }
}