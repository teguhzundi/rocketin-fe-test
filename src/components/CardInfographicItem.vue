<template>
  <div class="card">
    <div class="card-content">
      <h1 class="card-title text-bold">{{ title }}</h1>
      <div class="card-subtitle">{{ subTitle }}</div>
    </div>
    <div class="card-icon">
      <font-awesome-icon :icon="`fa-solid ${icon}`" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: [String, Number],
    default: ''
  },
  subTitle: {
    type: String
  },
  icon: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(#ccc, 0.3);
  display: flex;
  padding: 16px;
  flex-direction: column;
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    box-shadow: 0 3px 20px rgba(#ccc, 0.9);
    transform: translateY(-3px);
  }

  &-title {
    font-size: 26px;
    margin: 0;
    text-transform: capitalize;
    margin-bottom: 4px;
  }

  &-subtitle {
    color: #666;
  }

  &-icon {
    margin-top: 10px;
    font-size: 20px;
  }

  @media (min-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    &-icon {
      font-size: 50px;
      margin-top: 0;
    }
  }
}
</style>
