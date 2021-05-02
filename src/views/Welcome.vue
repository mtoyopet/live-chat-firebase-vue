<template>
  <div class="container welcome">
    <p>Welcome</p>
    <div v-if="shouldShowLogin">
      <login-form @login="enterChat" />
      <p>No account yet? <span @click="shouldShowLogin = false">Click here</span> to sign up!</p>
    </div>
    <div v-if="!shouldShowLogin">
      <sign-up-form @signup="enterChat" />
      <p>Already have an account? <span @click="shouldShowLogin = true">Click here</span> to log in!</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

export default {
  components: { SignUpForm, LoginForm },
  setup() {
    const shouldShowLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return { shouldShowLogin, enterChat }
  },  
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }

  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>