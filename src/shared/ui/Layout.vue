<template>
  <section
    :class="[styles.wrapper, heading ? styles.otherPage : '']"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <Header :back-link="backLink" />
    <h1 v-if="heading" :class="styles.heading">{{ heading }}</h1>
    <div v-if="$slots.default">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../../widgets/header/Header.vue'
import styles from './Layout.module.scss'

export default defineComponent({
  name: 'Layout',
  components: {
    Header
  },
  props: {
    bgImage: { type: String, required: false },
    heading: { type: String, default: '' },
    backLink: { type: String, default: '/' }
  },
  setup() {
    return {
      styles
    }
  }
})
</script>

<style lang="scss" module>
.wrapper {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  padding: 20px;
}

.otherPage {
  padding-top: 80px;
}

.heading {
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
}
</style>
