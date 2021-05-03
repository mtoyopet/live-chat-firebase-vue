<template>
  <div class="container">
    <navbar />
    <chat-window />
    <new-chat-form />
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import NewChatForm from '../components/NewChatForm'
import ChatWindow from '../components/ChatWindow.vue'

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const router = useRouter()
    const { user } = getUser()

    // if the user value is ever null, redirect to welcome screen
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
}
</script>

