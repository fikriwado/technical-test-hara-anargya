<script setup>
  import SideBar from './components/SideBar.vue';
  import Header from './components/Header.vue';
</script>

<template>
  <div class="w-full flex">
    <SideBar/>
    <div class="flex-1">
      <Header/>
      <div class="content py-8 px-9">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
