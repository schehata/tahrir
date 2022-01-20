<template>
  <div class="flex flex-row w-screen h-screen fixed bg-primary-500 text-white">
    <Sidebar class="w-1/3 lg:w-1/6" />
    <div id="content" class="flex flex-col grow w-full h-full">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
