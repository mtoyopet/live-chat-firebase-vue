<template>
  <nav>
    <div>
      <p>Hey there...</p>
      <p class="email">Currently logged in as ...</p>
    </div>
    <button @click="handleClick">Log out</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'

export default {
  emits: ['logout'],
  setup(props, context) {
    const { error, logout } = useLogout()

    const handleClick = async () => {
      await logout()

      if (!error.value) {
        console.log('logged out')
        // context.emit('logout')
      }
    }

    return { handleClick }
  }
}

</script>

<style scoped>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>