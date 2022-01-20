<template>
  <div class="flex flex-col w-full h-full bg-primary-500 gap-3">
    <template v-if="$store.state.tabs.length">
      <div v-for="(tab, index) in $store.state.tabs"
      :key="index"
      @click="setActiveTab(index)"
      class="bg-primary-500 curser-pointer tab p-3 hover:cursor-pointer hover:bg-primary-100"
      :class="{active: $store.state.activeTabIndex === index}">
        {{ tab.title }} <button><div class="hidden" v-html="$feathericons['x'].toSvg()"></div></button>
      </div>
    </template>
    <template v-else>
      <button class="bg-blue-500 p-3 block w-full mt-12" @click="openFileClicked">افتح ملف جديد</button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TabbarWidget',
  data () {
    return {
      activeTab: 0
    }
  },
  methods: {
    setActiveTab (tabIndex) {
      this.$store.dispatch('NavigateToTab', tabIndex)
    },
    /* eslint object-shorthand: "off" */
    openFileClicked: async function () {
      try {
        await this.$store.dispatch('openFilePicker')
      } catch (err) {
        console.error(err)
        alert('operation failed')
      }
    }
  }
}
</script>

<style scoped>
@tailwind base;
/* @tailwind components; */

@layer base {
  .tab {
    @apply bg-red-500;
  }
}

.tab:hover  button {
  visibility: visible;
}
</style>
