<script>
import {ref,h} from 'vue'
export default {
    setup() {
        const num = ref(0)

        return ()=>{
            return h('div',null,[
                h('h1',null,`当前计数为${num.value}`),
                h('button',{
                    onClick: () => num.value++
                },'+'),
                h('button',{
                    onClick: () => num.value--
                },'-')
            ])
        }
    }
}
</script>

<style>
</style>