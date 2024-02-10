<script setup>
import axios from 'axios';
import { reactive } from 'vue'
import Card from '../components/Card.vue';

let state = reactive({
  dataUsers: {},
  tempUser: {},
  showDialog: false
})

const dataCards = [
  { isLower: false, title: 'Padding', total: '2.480,30', percentage: '2,15%', label: 'Last Month', action: 'view more' },
  { isLower: true, title: 'Paid', total: '84.310', percentage: '1,10%', label: 'Last Month', action: 'view more' },
  { isLower: false, title: 'Rejected', total: '12.155', percentage: '2,15%', label: 'Last Month', action: 'view more' }
]

const fetchUsers = () => {
  axios.get('https://api.slingacademy.com/v1/sample-data/users')
        .then(res => {
          state.dataUsers = res.data
        })
}
fetchUsers()

const handleClick = (user) => {
  state.tempUser = user
  state.showDialog = true
}

const handleClose = () => {
  state.showDialog = false
}
</script>

<template>
  <div class="flex flex-row space-x-6">
    <template v-for="item in dataCards">
      <Card
        :isLower="item.isLower"
        :title="item.title"
        :total="item.total"
        :percentage="item.percentage"
        :label="item.label"
        :action="item.action"/>
    </template>
  </div>

  <div class="bg-white rounded-xl shadow-[0_0_4px_0_rgba(0,0,0,0.2)] mt-8">
    <div class="py-6 px-7">
      <p class="text-lg font-semibold">User List</p>
    </div>
    <table class="w-full table-auto">
      <thead>
        <tr class="text-left bg-gray-100 text-gray-500 shadow-[0_0_4px_0_rgba(0,0,0,0.2)]">
          <th class="w-16 text-center py-5">ID</th>
          <th>User</th>
          <th>Date Of Birth</th>
          <th>Email</th>
          <th>Job</th>
          <th>Country</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in state.dataUsers.users" :key="user.id" class="border-b shadow-[0_0_4px_0_rgba(0,0,0,0.2)]">
          <td class="text-center py-5">{{ i+1 }}</td>
          <td>
            <div class="flex items-center">
              <img :src="user.profile_picture" class="inline-block w-6 h-6 rounded-full mr-2" alt="profile picture">
              <span>{{ user.first_name }} {{ user.last_name }}</span>
            </div>
          </td>
          <td>{{ new Date(user.date_of_birth).toLocaleDateString() }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.job }}</td>
          <td>{{ user.state }}</td>
          <td class="text-center">
            <button class="px-2 py-1 rounded cursor-pointer hover:bg-slate-50 transition shadow-[0_0_4px_0_rgba(0,0,0,0.2)] mr-2">Selecet</button>
            <button class="px-2 py-1 rounded cursor-pointer hover:bg-slate-50 transition shadow-[0_0_4px_0_rgba(0,0,0,0.2)]" @click="handleClick(user)">View Detail</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0">
        <div v-show="state.showDialog" class="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20 bg-[#D9D9D980]">
          <div class="relative bg-white w-[555px] h-[436px] p-9">
            <button @click="handleClose" class="absolute right-2 top-2 py-2 px-2">
              <Icon icon="iconamoon:close-bold" class="text-red-500 w-5 h-5"/>
            </button>
            <div class="flex">
              <div class="flex-none w-36 mr-8">
                <img :src="state.tempUser.profile_picture" class="w-36 h-36" alt="profile picture">
              </div>
              <div class="flex-1 flex items-center">
                <div>
                  <h1 class="text-4xl font-medium">{{ state.tempUser.first_name }} {{ state.tempUser.last_name }}</h1>
                  <p>{{ state.tempUser.email }}</p>
                  <p>{{ state.tempUser.phone }}</p>
                </div>
              </div>
            </div>
            <div class="border-t mt-4 pt-4">
              <table class="table-fixed text-left">
                <tbody>
                  <tr>
                    <th class="pr-3">Date Of Birthday</th>
                    <td>:</td>
                    <td>{{ new Date(state.tempUser.date_of_birth).toLocaleDateString() }}</td>
                  </tr>
                  <tr>
                    <th>City</th>
                    <td>:</td>
                    <td>{{ state.tempUser.city }}</td>
                  </tr>
                  <tr>
                    <th>Country</th>
                    <td>:</td>
                    <td>{{ state.tempUser.state }}</td>
                  </tr>
                  <tr>
                    <th>Job</th>
                    <td>:</td>
                    <td>{{ state.tempUser.job }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </transition>
</template>

<style scoped></style>
