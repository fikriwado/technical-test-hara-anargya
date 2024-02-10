<script setup>
  import { reactive } from 'vue'
  import City from '../assets/js/city.js'
  import Province from '../assets/js/province.js'

  const citiesByProvince = (cityId) => {
    const cities = [...City]
    const getCityById = cities.find(city => {
      return city.id === cityId
    })
    const listCitiesByProvince = cities.filter(city => {
      return city.provinsi_id === getCityById.provinsi_id
    })
    return listCitiesByProvince
  }
  console.log(citiesByProvince(158))

  const provinceOfCity = (cityId) => {
    const cities = [...City]
    const provinces = [...Province]
    const getCityById = cities.find(city => {
      return city.id === cityId
    })
    const nameProvince = provinces.find(province => {
      return province.id === getCityById.provinsi_id
    })
    return nameProvince.name
  }
  console.log(provinceOfCity(158))

  const sortProvince = (key, order = 'asc') => {
    const provinces = [...Province]
    return provinces.sort((a, b) => {
      if (typeof a[key] === 'number') {
        return order.toLowerCase() == 'desc' ? b[key] - a[key] : a[key] - b[key]
      }
      return order.toLowerCase() == 'desc' ? b[key].localeCompare(a[key]) : a[key].localeCompare(b[key])
    })
  }
  const idDesc = sortProvince('id', 'desc')
  const nameAsc = sortProvince('name')
  console.log(idDesc)
  console.log(nameAsc)

  const orderKey = 'id'
  const orderProvince = 'asc'

  let state = reactive({
    orderKey: 'id',
    orderProvince: 'asc'
  })

  const handleClickOrderKey = () => {
    state.orderKey = state.orderKey === 'id' ? 'name' : 'id'
  }

  const handleClickOrderProvince = () => {
    state.orderProvince = state.orderProvince === 'asc' ? 'desc' : 'asc'
  }
</script>

<template>
  <div class="flex flex-row space-x-6">
    <div class="bg-white w-1/3 overflow-hidden rounded-xl shadow-[0_0_4px_0_rgba(0,0,0,0.2)] p-6">
      <h1 class="text-lg font-semibold mb-3">List Kota Satu Provinsi</h1>
      <ul>
        <li
          v-for="(cities, i) in citiesByProvince(158)"
          :key="i"
          :class="{'font-semibold': cities.id === 158}">
          {{ cities.name }}
        </li>
      </ul>
    </div>
    <div class="bg-white w-1/3 overflow-hidden rounded-xl shadow-[0_0_4px_0_rgba(0,0,0,0.2)] p-6">
      <h1 class="text-lg font-semibold mb-3">Nama Provinsi</h1>
      {{ provinceOfCity(158) }}
    </div>
    <div class="bg-white w-1/3 overflow-hidden rounded-xl shadow-[0_0_4px_0_rgba(0,0,0,0.2)] p-6">
      <h1 class="text-lg font-semibold mb-3">Nama Provinsi</h1>
      <button
        @click="handleClickOrderKey"
        class="px-2 py-1 rounded cursor-pointer hover:bg-slate-50 transition shadow-[0_0_4px_0_rgba(0,0,0,0.2)] mr-2 mb-2">
        {{ state.orderKey.toUpperCase() }}
      </button>
      <button
        @click="handleClickOrderProvince"
        class="px-2 py-1 rounded cursor-pointer hover:bg-slate-50 transition shadow-[0_0_4px_0_rgba(0,0,0,0.2)] mb-2">
        {{ state.orderProvince.toUpperCase() }}
      </button>
      <ul>
        <li
          v-for="(cities, i) in sortProvince(state.orderKey, state.orderProvince)"
          :key="i"
          :class="{'font-semibold': cities.id === 158}">
          {{ cities.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
