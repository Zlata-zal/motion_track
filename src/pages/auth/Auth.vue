<template>
  <Layout heading="Sign in" bgImage="@/shared/assets/image/pic2.jpg">
    <div class="wrapper-inner-page">
      <Loader v-if="isLoading" />

      <form @submit.prevent="onSubmit">
        <Field
          name="email"
          v-model="form.email"
          type="text"
          :error="errors.email"
          placeholder="Email"
        />
        <Field
          name="password"
          v-model="form.password"
          type="password"
          :error="errors.password"
          placeholder="Password"
        />

        <div class="wrapperButton">
          <Button @click="setType('login')">Sign in</Button>
          <Button @click="setType('register')">Sign up</Button>
        </div>
        <button type="submit" style="display:none;"></button>
      </form>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import Layout from '../../shared/ui/Layout.vue'
import Loader from '../../shared/ui/Loader.vue'
import Button from '../../shared/ui/button/Button.vue'
import { useAuth } from '../../shared/hooks/useAuth' 

export default defineComponent({
  name: 'Auth',
  components: {
    Layout,
    Loader,
    Button
  },
  setup() {
    const type = ref<'login' | 'register'>('login')
    const { isAuth, login } = useAuth()
    const isLoading = ref(false)

    const form = reactive({
      email: '',
      password: ''
    })

    const errors = reactive({
      email: '',
      password: ''
    })

    const setType = (value: 'login' | 'register') => {
      type.value = value
    }

    const onSubmit = () => {
      errors.email = form.email ? '' : 'Email is required'
      errors.password = form.password ? '' : 'Password is required'

      if (form.email && form.password) {
        isLoading.value = true
        setTimeout(() => {
          login() 
          isLoading.value = false
        }, 1000)
      }
    }

    return {
      form,
      errors,
      type,
      setType,
      isLoading,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper-inner-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.wrapperButton {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
