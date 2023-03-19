<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="bg-white border-gray-200 border-b-2 px-2 sm:px-10 py-2.5 :bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://flowbite.com/" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap :text-white">Locator</span>
      </a>
      <div class="flex md:order-2">
        <RouterLink
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
          to="/dashboard/teacher"
          >Update teacher location</RouterLink
        >
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white :bg-gray-800 md::bg-gray-900 :border-gray-700"
        >
          <li>
            <RouterLink
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 :text-white"
              to="/login"
              >Login</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 :text-white"
              to="/register"
              >Register</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 :text-white"
              to="/dashboard"
              >Student Dashboard</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>
