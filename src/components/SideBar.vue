<script setup>
  import logo from '../assets/images/logo.svg'
  import router from '../router'

  const menus = [
    { name: 'Dashboard', url: '/dashboard', icon: 'solar:home-smile-linear' },
    { name: 'Overview', url: '/overview', icon: 'akar-icons:statistic-down' }
  ]

  const goTo = (url) => {
    if (url) router.push(url);
  }
</script>

<template>
  <div class="relative w-72 min-h-screen top-0 bottom-0 bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.2)] py-8 px-9 z-10">
    <img :src="logo" alt="logo">
    <ul class="mt-8 ml-1.5">
      <li v-for="(menu, i) in menus"
        :key="i"
        @click="goTo(menu.url)"
        class="flex items-center rounded-lg px-2 py-3"
        :class="{'bg-sky-200': this.$route.path == menu.url}">
        <Icon :icon="menu.icon" class="inline mr-2.5 w-5 h-5"/>
        <span class="flex-1">{{ menu.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
