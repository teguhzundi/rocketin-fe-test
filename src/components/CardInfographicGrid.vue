<template>
  <div class="card-grid">
    <CardInfographicItem
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :sub-title="item.subTitle"
      :icon="item.icon"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const CardInfographicItem = defineAsyncComponent(() => import('./CardInfographicItem.vue'))

defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss">
.card-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
</style>
