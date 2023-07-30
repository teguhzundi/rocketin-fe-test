<template>
  <div class="user-item" @click="onDetail">
    <div class="user-item-common">
      <div class="user-item-photo">
        <img :src="user.photo" alt="user-photo" />
      </div>
      <div title="Name and Email" class="user-item-name">
        <strong class="text-bold">{{ user.name }}</strong>
        <div>{{ user.email }}</div>
      </div>
      <div title="Age" class="text-bold">
        {{ user.age }}
      </div>
      <div title="Gender">
        <div class="chip" :class="{ male: user.gender === 'male' }">
          {{ user.gender }}
        </div>
      </div>
      <div title="Nationality">
        <img
          :src="`https://flagcdn.com/16x12/${user.nat.toLowerCase()}.png`"
          height="15"
          alt="Ukraine"
        />
      </div>
    </div>
    <div class="user-item-address">
      <div title="Address" class="text-bold">{{ user.address }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['detail'])

const onDetail = () => {
  emit('detail', props.user)
}
</script>

<style lang="scss" scoped>
.user {
  &-item {
    display: flex;
    padding: 10px;
    border-radius: 5px;
    gap: 5px;
    flex-direction: column;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &-common {
      flex: 1;
      display: grid;
      align-items: center;
      grid-template-columns: 45px 1fr 30px 50px 30px;
    }

    &-address {
      flex: 1;
      display: none;
    }

    @media (min-width: 480px) {
      align-items: center;
      flex-direction: row;
      border-bottom: none;

      &-common {
        grid-template-columns: 50px 1fr 50px 70px 60px;
      }

      &-address {
        padding-left: 30px;
        display: block;
      }
    }

    &:hover {
      background: #fff;
      box-shadow: 0 2px 10px rgba(#ccc, 0.2);
      transform: translateY(-3px);
    }

    &-photo {
      width: 30px;
      height: 30px;
      overflow: hidden;
      border-radius: 100px;
      align-self: center;
      justify-self: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &-name {
      strong {
        display: block;
        margin-bottom: 3px;
      }

      div {
        color: #999;
        font-size: 12px;
      }
    }
  }
}

.chip {
  padding: 4px;
  border-radius: 8px;
  font-size: 11px;
  background: #fca2cf;
  display: inline-block;
  color: #fff;

  &.male {
    background: #8dbbe8;
  }
}
</style>
