import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signup = async (email, password, displayName) => {
  error.value = null

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete the signup')
    }
    error.value = null

    await res.user.updateProfile({ displayName })

    return res
  } catch (err) {
    console.log(err)
    error.value = 'invalid login credentials'
  }
}

const useSignup = () => {

  return { error, signup }
}

export default useSignup