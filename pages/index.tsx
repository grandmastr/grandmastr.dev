import { defineComponent } from 'vue'

import Container from '@/layouts/container.vue'
import Header from '@/layouts/header.vue'

export default defineComponent({
  render() {
    return (
      <Container>
        <Header />
      </Container>
    )
  },
})
