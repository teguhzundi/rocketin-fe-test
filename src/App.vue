<template>
  <div class="container app-main">
    <div v-if="loading">Please wait....</div>
    <div v-else>
      <h2 class="app-title">Member Dashboard</h2>
      <div class="app-infographics">
        <CardInfographicGrid :items="infographics" />
      </div>
      <div class="app-users">
        <UserList :users="users" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Vue
import { computed, defineAsyncComponent, onBeforeMount, ref } from 'vue'

// Http
import http from './plugins/axios'

// Components
const CardInfographicGrid = defineAsyncComponent(() =>
  import('./components/CardInfographicGrid.vue')
)
const UserList = defineAsyncComponent(() => import('./components/UserList.vue'))

// Data
const users = ref([])
const loading = ref(false)

/**
 * Get users data
 */
const fetchUsers = async () => {
  loading.value = true
  try {
    const { data } = await http.get('https://randomuser.me/api/?results=25')
    users.value = data.results
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

onBeforeMount(async () => {
  // Fetch on first load
  await fetchUsers()
})

// Calculate
const getUniqueNat = computed(() => {
  const uniq = [...new Set([...users.value].map((u) => u.nat))]
  return uniq.length
})

const getMostGender = computed(() => {
  const female = users.value.filter((u) => u.gender === 'female')
  const male = users.value.filter((u) => u.gender === 'male')
  return male.length > female.length ? 'male' : 'female'
})

const getAvgAges = computed(() => {
  const total = users.value.reduce((acc, user) => {
    acc += user.dob.age
    return acc
  }, 0)

  const avg = Math.round((total ?? 0) / users.value.length)
  return isNaN(avg) ? 0 : avg
})

const getAvgRegistered = computed(() => {
  const total = users.value.reduce((acc, user) => {
    acc += user.registered.age
    return acc
  }, 0)

  const avg = Math.round((total ?? 0) / users.value.length)
  return isNaN(avg) ? 0 : avg
})

const infographics = computed(() => [
  {
    title: getUniqueNat.value,
    subTitle: 'Different Nationality',
    icon: 'fa-flag'
  },
  {
    title: getMostGender.value,
    subTitle: 'Most Gender',
    icon: getMostGender.value === 'male' ? 'fa-mars' : 'fa-venus'
  },
  {
    title: `~` + getAvgAges.value,
    subTitle: 'Average Age',
    icon: 'fa-person-walking'
  },
  {
    title: `~` + getAvgRegistered.value + ' year',
    subTitle: 'Average Membership',
    icon: 'fa-users'
  }
])
</script>

<style lang="scss" scoped>
.app {
  &-title {
    font-weight: bolder;
    font-size: 15px;
  }

  &-main {
    height: 100%;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 0;
  }

  &-infographics {
    margin-top: 30px;
  }

  &-users {
    margin-top: 30px;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
