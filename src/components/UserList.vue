<template>
  <div>
    <TransitionGroup
      appear
      tag="div"
      class="user-list"
      name="list-slide-in"
      :style="{ '--total': users.length }"
    >
      <UserItem
        v-for="(user, index) in users"
        :key="index"
        :style="{ '--i': index }"
        :user="getUserAttribute(user)"
        @detail="onOpenDialogDetail"
      />
    </TransitionGroup>

    <UserDialogDetail :show="dialog" :user="dialogData" @close="onCloseDialogDetail" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserDialogDetail from './UserDialogDetail.vue'
import UserItem from './UserItem.vue'

defineProps({
  users: {
    type: Array,
    default: () => []
  }
})

/**
 * Get user attribute
 * @param {} user
 */
const getUserAttribute = (user) => {
  return {
    photo: user.picture.large,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    age: user.dob.age,
    gender: user.gender,
    nat: user.nat,
    address: `${user.location.city}, ${user.location.state}, ${user.location.country}`
  }
}

const dialog = ref(false)
const dialogData = ref({})

const onOpenDialogDetail = (data) => {
  dialog.value = true
  dialogData.value = data
}

const onCloseDialogDetail = () => {
  dialog.value = false
  dialogData.value = {}
}
</script>
