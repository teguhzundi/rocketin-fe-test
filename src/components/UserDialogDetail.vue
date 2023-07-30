<template>
  <Transition name="bounce" mode="out-in">
    <div class="app-dialog" v-if="show">
      <div class="app-dialog-inner">
        <button class="app-dialog-close" @click="onClose">
          <font-awesome-icon icon="fa-solid fa-close" style="font-size: 18px" />
        </button>
        <div class="detail-photo-wrapper">
          <div class="detail-photo">
            <img :src="user.photo" />
            <div class="detail-nat">
              <img
                :src="`https://flagcdn.com/16x12/${user.nat.toLowerCase()}.png`"
                height="15"
                :alt="user.nat.toLowerCase()"
              />
            </div>
          </div>
        </div>

        <section class="detail-item" v-for="detail in userDetail" :key="detail.title">
          <div>{{ detail.title }}</div>
          <div>{{ detail.value }}</div>
        </section>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    default: () => ({})
  },
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const userDetail = computed(() => [
  { title: 'Name', value: props.user.name },
  { title: 'Email Address', value: props.user.email },
  { title: 'Age', value: props.user.age },
  { title: 'Address', value: props.user.address }
])

const onClose = () => {
  emit('close')
}
</script>

<style lang="scss" scoped>
.app-dialog {
  background-color: rgba(#000, 0.2);
  position: fixed;
  min-height: 100%;
  overflow-x: auto;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &-inner {
    background: #fff;
    max-width: 500px;
    width: 100%;
    padding: 32px 16px;
    border-radius: 10px;
    position: relative;
  }

  &-close {
    position: absolute;
    right: 16px;
    top: 16px;
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 3px;
    background: transparent;

    &:hover {
      background: #ccc;
    }
  }
}

.detail-photo {
  margin-bottom: 30px;
  position: relative;
  display: inline-block;

  > img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 100px;
    overflow: hidden;
    padding: 6px;
    box-shadow: 0 2px 10px rgba(#ccc, 0.3);
  }

  &-wrapper {
    text-align: center;
  }
}

.detail-nat {
  margin: 0 auto;
  text-align: center;
  position: absolute;
  right: 10px;
  bottom: 3px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 100px;
  box-shadow: 0 2px 10px rgba(#ccc, 0.3);
}

.detail-item {
  padding: 10px;
  border-top: 1px dashed #eee;

  div:nth-child(1) {
    font-size: 12px;
    font-weight: bold;
    color: #666;
  }

  div:nth-child(2) {
    margin-top: 3px;
  }
}
</style>
