<script setup>
import { onMounted, ref } from 'vue'
import { getAll } from '../api/index'

const users = ref([])

onMounted(async () => {
  const res = await getAll()
  users.value = res.data
})
</script>
<template>
  <div class="px-32 mt-32">
    <div class="relative overflow-x-auto sm:rounded-lg border-2">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-gray-700 border-b">
          <tr>
            <th scope="col" class="px-6 py-3">Teacher name</th>
            <th scope="col" class="px-6 py-3">Availability</th>
            <th scope="col" class="px-6 py-3">Staffroom Number</th>
            <th scope="col" class="px-6 py-3">Current Location</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white" v-for="user in users" :key="user._id">
            <th scope="row" class="px-6 py-5 font-medium text-gray-900 whitespace-nowrap">
              {{ user.username }}
            </th>
            <td class="px-6 py-4">
              <span
                class="bg-green-100 px-2 py-1 rounded"
                :class="{ 'bg-red-100': !user.available }"
                >{{ user.available ? 'available' : 'unavailable' }}</span
              >
            </td>
            <td class="px-6 py-4">{{ user.roomNumber }}</td>
            <td class="px-6 py-4">{{ user.location }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
