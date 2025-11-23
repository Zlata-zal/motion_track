<!-- src/pages/Home.vue -->
<template>
  <div class="container">
    <Button @click="goNext">
      {{ isAuth ? 'Go to Dashboard' : 'Login' }}
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../../shared/hooks/useAuth' 
import Button from '../../shared/ui/button/Button.vue' 

export default defineComponent({
  name: 'Home',
  components: {
    Button
  },
  setup() {
    const router = useRouter()
    const { isAuth } = useAuth()

    const goNext = () => {
      router.push(isAuth.value ? '/dashboard' : '/login')
    }

    return {
      isAuth,
      goNext
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  background-image: url('../../assets/image/pic1.jpg');
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
