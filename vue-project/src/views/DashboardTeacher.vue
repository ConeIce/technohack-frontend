<script setup>
import { ref } from 'vue'
import { addUserAvailability, addUserLocation, getUser } from '../api'

import { onMounted } from 'vue'
const username = ref('')
const available = ref(true)
const selected = ref(null)

const handleClick = async () => {
  available.value = !available.value
  try {
    const res = await addUserAvailability(available.value)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

const handleChange = async () => {
  try {
    const res = await addUserLocation(selected.value)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  const user = await getUser()
  console.log(user)
  selected.value = user.data.location
  username.value = user.data.username
  available.value = user.data.available
})
</script>

<template>
  <main class="px-32 mt-32">
    <h1 class="text-center mb-10 text-xl font-semibold">Welcome {{ username }}!</h1>
    <div class="text-3xl text-center">
      you are
      <span
        :class="{ 'bg-red-100': !available }"
        class="bg-green-100 px-2 py-1 rounded cursor-pointer"
        @click="handleClick"
        >{{ available ? 'available' : 'unavailable' }}</span
      >
      <span v-if="available"> at </span>
      <select name="" id="" v-if="available" v-model="selected" @change="handleChange">
        <option value="esp1">esp1</option>
        <option value="esp2">esp2</option>
      </select>
    </div>
  </main>
</template>
