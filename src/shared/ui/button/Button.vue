<template>
  <div class="wrapper">
    <button :class="['button', size]" @click="clickHandler">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';


export default defineComponent({
  name: 'Button',
  props: {
    clickHandler: {
      type: Function as PropType<() => void>,
      required: false
    },
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium'
    }
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: inline-block;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: #4caf50;

  &:hover {
    background-color: #45a049;
  }

  &.small {
    font-size: 12px;
    padding: 6px 12px;
  }

  &.medium {
    font-size: 14px;
    padding: 10px 20px;
  }

  &.large {
    font-size: 16px;
    padding: 14px 28px;
  }
}
</style>
