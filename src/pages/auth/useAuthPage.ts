import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../shared/hooks/useAuth'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

export function useAuthPage() {
  const type = ref<'login' | 'register'>('login')

  const router = useRouter()
  const { isAuth, login } = useAuth()

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  })

  const { handleSubmit, errors, values } = useForm({
    validationSchema: schema
  })

  watch(isAuth, (value) => {
    if (value) router.push('/')
  })
  const isLoading = ref(false)

  const onSubmit = handleSubmit(() => {
    isLoading.value = true

   
    setTimeout(() => {
     
      login()
      isLoading.value = false
    }, 1000)
  })

  return {
    type,
    setType: (value: 'login' | 'register') => (type.value = value),
    errors,
    isLoading,
    onSubmit,
  }
}
