import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log('men mount')
    })
  },
  render() {
    return <div>another testing jsx</div>
  },
})
