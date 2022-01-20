<template>
  <section id="sidebar" class="flex flex-row">
    <section id="navigator" class="bg-primary-100 text-gray-400 flex flex-col gap-3 transition-all ease-in-out duration-300 hover:bg-blue-600">
      <button @click="openFileClicked" class="p-3 flex flex-inline gap-4 hover:text-white">
        <div v-html="$feathericons['file'].toSvg()"></div>
        <span v-if="showLabels" class="">افتح ملف</span>
      </button>
      <button @click="switchView('documents')" class="p-3 flex flex-inline gap-4 hover:text-white" :class="{active: activeSidebarView === 'documents'}">
        <div v-html="$feathericons['layers'].toSvg()"></div>
        <span v-if="showLabels" class="">المستندات</span>
      </button>
      <button @click="switchView('search')" class="p-3 flex flex-inline gap-4 hover:text-white">
        <div v-html="$feathericons['search'].toSvg()"></div>
        <span v-if="showLabels" class="">البحث</span>
      </button>
      <button @click="switchView('documentInspector')" class="p-3 flex flex-inline gap-4 hover:text-white" :class="{active: activeSidebarView === 'documentInspector'}">
        <div v-html="$feathericons['git-merge'].toSvg()"></div>
        <span v-if="showLabels" class="">بنية المستند</span>
      </button>
    </section>

    <section id="interactor" class="flex flex-col bg-primary-500 w-full" v-if="showInteractor">
      <div class="p-3 text-gray-300">
        {{ viewTitle }}
      </div>
      <template v-if="activeSidebarView === 'documents'">
        <Tabbar />
      </template>
      <template v-else-if="activeSidebarView === 'documentInspector'">
        <DocumentInspector />
      </template>
    </section>
  </section>
</template>

<script>
export default {
  name: 'SidebarWidget',
  data () {
    return {
      activeSidebarView: 'documents',
      showLabels: false,
      showInteractor: true,
      viewTitle: 'استكشف'
    }
  },
  methods: {
    /* eslint-disable */
    openFileClicked: async function () {
      try {
        await this.$store.dispatch('openFilePicker')
      } catch (err) {
        console.error(err)
        alert('operation failed')
      }
    },
    switchView: function (viewId) {
      this.activeSidebarView = viewId;
      // this.$store.dispatch('switchView', viewId)
    },
    shrinkNavigator: function () {
      // this.showLabels = false
      // this.showInteractor = true
    },
    extendNavigator: function () {
      // this.showInteractor = false
      // this.showLabels = true
    }
  },

};
</script>

<style scoped>
.active {
  color: #fff;
  border-right: 2px solid #fff;
}
</style>