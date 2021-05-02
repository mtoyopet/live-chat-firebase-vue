import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const logout = async () => {
  error.value = null

  try {
    const res = await projectAuth.signOut()
    console.log(res)
    return res
  } catch (err) {
    console.log(err)
    error.message = err
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout