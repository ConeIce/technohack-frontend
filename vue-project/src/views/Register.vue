<script setup>
import { ref } from 'vue'
import { register } from '../api'
import router from '../router/index.js'
const username = ref('')
const roomNumber = ref('')
const password = ref('')

const handleClick = async (e) => {
  e.preventDefault()
  try {
    const res = await register({
      username: username.value,
      roomNumber: roomNumber.value,
      password: password.value
    })
    localStorage.setItem('username', username.value)
    alert('User registered')
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <main class="px-20 pt-32">
    <form @submit="handleClick">
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
        <input
          v-model="username"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :focus:ring-blue-500 :focus:border-blue-500"
          placeholder="John Doe"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900">Password: </label>
        <input
          v-model="password"
          type="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :focus:ring-blue-500 :focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900">Your room number: </label>
        <input
          v-model="roomNumber"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :focus:ring-blue-500 :focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/4 sm:w-auto px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
      >
        Register
      </button>
    </form>
  </main>
</template>
