<template>
  <header :class="styles.header">
    <button v-if="pathname !== '/'" @click="goBack">
    </button>
    <button v-else @click="goProfile">
      👤
    </button>
    <Hamburger />
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '../../shared/hooks/useAuth'
import styles from './Header.module.scss'

export default defineComponent({
  name: 'Header',
  props: {
    backLink: { type: String, default: '' }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const { isAuth } = useAuth()

    const pathname = computed(() => route.path)

    const goBack = () => {
      router.push(props.backLink)
    }

    const goProfile = () => {
      router.push(isAuth.value ? '/profile' : '/auth')
    }

    return {
      styles,
      pathname,
      goBack,
      goProfile
    }
  }
})
</script>

<style lang="scss" module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
</style>
