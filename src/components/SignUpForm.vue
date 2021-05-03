<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignUp from '../composables/useSignup'

export default {
  emits: ["signup"],
  setup(props, context) {
    // refs
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const { error, signup } = useSignUp()

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value)
      // console.log(error)
      if (!error.value) {
        context.emit('signup')
      }
    }

    return { displayName, email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>