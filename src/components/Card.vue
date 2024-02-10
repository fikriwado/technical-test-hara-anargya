<script setup>
  const props = defineProps({
    isLower: {
      type: Boolean,
      default: false
    },
    title: String,
    total: String,
    percentage: String,
    label: String,
    action: String,
    linkAction: {
      type: String,
      default: ''
    }
  })

  const labelColor = props.isLower ? 'text-red-500' : 'text-teal-500'
  const labelRotate = props.isLower ? 'rotate-[135deg]' : 'rotate-45'
</script>

<template>
  <div class="relative bg-white w-1/3 overflow-hidden rounded-xl shadow-[0_0_4px_0_rgba(0,0,0,0.2)]">
    <div class="p-6">
      <div class="flex flex-row">
        <div class="w-1/2">
          <p class="text-xs font-semibold text-gray-500 mb-2">{{ title }}</p>
          <p class="text-xl font-semibold">{{ total }}</p>
        </div>
        <div class="w-1/2 text-right">
          <div class="inline-block bg-gray-200 p-2 rounded">
            <Icon icon="solar:square-transfer-horizontal-broken" class="text-gray-500 w-6 h-6"/>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center w-full h-12 mt-6 px-6 bottom-0 bg-[#F9FAFC] text-xs">
      <Icon icon="ph:arrow-up-bold" class="inline w-4 h-4 mr-1 rotate-45" :class="[labelColor, labelRotate]"/>
      <span class="mr-2 font-semibold" :class="labelColor">{{ percentage }}</span>
      <span class="mr-auto text-gray-400">{{ label }}</span>
      <a :href="linkAction" class="text-gray-500 font-semibold">{{ action }}</a>
    </div>
  </div>
</template>

<style scoped></style>
