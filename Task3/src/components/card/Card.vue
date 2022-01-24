<template>
  <div class="flex justify-center">
    <div class="rounded-lg shadow-lg bg-white w-full md:max-w-sm">
      <slot name="header"></slot>
      <div class="p-3">
        <h5 class="text-gray-900 text-xl font-medium mb-2">
          <slot name="title"></slot>
        </h5>
        <div class="text-gray-900 text-xl font-medium mb-2">
          <slot name="subtitle"></slot>
        </div>
        <div class="flex justify-end">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  name: 'Card',
  components: {},
  setup() {
    return {}
  },
})
</script>

<style></style>
