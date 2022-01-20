<template>
  <div class="bg-primary-500 w-[200px] text-gray-200">
    <ul class="flex flex-inline list-none p-3">
      <li><button class="p-3 text-4xl hover:bg-primary-100 font-bold h-[21px]" @click="$emit('click', 'َ')">َ</button></li>
      <li><button class="p-3 text-4xl hover:bg-primary-100 font-bold h-[21px]" @click="$emit('click', 'ً')">ً</button></li>
      <li><button class="p-3 text-4xl hover:bg-primary-100 font-bold h-[21px]" @click="$emit('click', 'ِ')">ِ</button></li>
      <li><button class="p-3 text-4xl hover:bg-primary-100 font-bold h-[21px]" @click="$emit('click', 'ٍ')">ٍ</button></li>
      <li><button class="p-3 text-4xl hover:bg-primary-100 font-bold h-[21px]" @click="$emit('click', 'ُ')">ُ</button></li>
      <li><button class="p-3 text-4xl hover:bg-primary-100 font-bold h-[21px]" @click="$emit('click', 'ٌ')">ٌ</button></li>
      <li><button class="p-3 text-4xl hover:bg-primary-100 font-bold h-[21px]" @click="$emit('click', 'ْ')">ْ</button></li>
      <li><button class="p-3 text-4xl hover:bg-primary-100 font-bold h-[21px]" @click="$emit('click', 'ّ')">ّ</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PopsicleWidget'
}
</script>
