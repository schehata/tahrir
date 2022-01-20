<template>
  <div class="flex flex-row h-screen bg-primary-900">
    <template v-if="internalContent">
      <md-editor class="w-full" :content="internalContent" @change="contentChanged" />
    </template>
    <template v-else>
      <LandingPage class="w-full" />
    </template>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data () {
    return {
      internalContent: ''
    }
  },
  mounted () {
    // const path = '~/workspace/shehata.io/content'
    // try {
    //   const root = await document.navigator.storage.getDirectory(path)
    //   console.log(root.entries())
    // } catch (err) {
    //   console.log(err)
    // }
    // console.log(path)
  },
  watch: {
    /* eslint object-shorthand: "off" */
    '$store.state.content': function () {
      this.internalContent = this.$store.state.content
    }
  },
  methods: {
    contentChanged (content) {
      this.internalContent = content
    }
  }
}
</script>
