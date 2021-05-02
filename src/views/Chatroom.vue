<template>
  <div class="container">
    <navbar @logout="ExitChat" />  
  </div>
  <div>Chatroom</div>
</template>

<script>
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'

export default {
  components: { Navbar },
  setup() {
    const router = useRouter()

    const exitChat = () => {
      router.push({ name: 'Welcome' })
    }

    return { exitChat }
  }
}
</script>

