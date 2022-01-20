<template>
  <div class="block w-full h-full flex flex-col">

    <section id="toolbar" class="flex flex-inline p-3 border-r-2 border-b-2 border-[#222] bg-primary-500 text-gray-200 gap-3 items-end content-end" dir="ltr">
      <button @click="toggleViewer">
        <div v-html="$feathericons['eye'].toSvg()"></div>
      </button>
      <button @click="toggleViewer">
        <div v-html="$feathericons['cpu'].toSvg()"></div>
        <!-- <p class="text-sm text-gray-200">تدقيق النص</p> -->
      </button>
      <button>تشكيل النص</button>
      <button>توليد نص عشوائي</button>
    </section>

    <section class="flex flex-row w-full h-full space-even">
      <section :class="{'w-full': !viewerEnabled, 'w-1/2': viewerEnabled}">
        <Popsicle ref="pop" class="hidden absolute top-42 right-200 shadow-outline w-[400px] border-2" @click="insert" />
        <textarea id="editor"
        ref="editor"
        v-model="txt"
        @input="$emit('change', txt)"
        class="block w-full h-full bg-primary-900 text-white p-3 pb-[400px] focus:outline-none mb-42 resize-none"
        @keydown="checkKeys"
        autofocus></textarea>
      </section>
      <section ref="viewer1" v-if="txt && viewerEnabled" class="w-1/2 overflow-auto">
        <div id="viewer" ref="viewer" class="p-3 overflow-auto" v-html="$md.render(txt)" />
      </section>
    </section>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data () {
    return {
      txt: this.content,
      viewerEnabled: true,
      popsicleVisible: false,
      firstStart: true
    }
  },
  mounted () {
    const self = this
    this.$refs.editor.onscroll = (e) => {
      if (this.firstStart) {
        this.$refs.editor.scrollTop = 0
        this.firstStart = false
      } else {
        self.$refs.viewer1.scrollTop = self.$refs.editor.scrollTop
      }
    }
  },
  methods: {
    toggleViewer () {
      this.viewerEnabled = !this.viewerEnabled
    },
    getCurserPosition: () => {
      const cursorPosition = document.getElementById('editor').selectionStart
      return cursorPosition
    },
    checkKeys (event) {
      if (event.shiftKey && event.code === 'Space') {
        event.preventDefault()
        // const c = this.getCurserPosition()
        // const el = document.getElementById('editor')
        // console.log('start1:', el.selectionStart)
        // el.focus()
        // this.popsicleVisible = true
        if (this.popsicleVisible) {
          this.$refs.pop.$el.classList.add('hidden')
        } else {
          // get localtion for popup
          this.$refs.pop.$el.top = window.cursorPosition
          console.log(event.pageX)
          // show popup
          this.$refs.pop.$el.classList.remove('hidden')
        }

        this.popsicleVisible = !this.popsicleVisible
      }
    },
    insert (key) {
      const c = this.getCurserPosition()
      const el = document.getElementById('editor')
      console.log('insert key', key)
      console.log('start2:', el.selectionStart)
      console.log('cursor3:', el.selectionStart)
      this.popsicleVisible = false
      this.$refs.pop.$el.classList.add('hidden')
      el.focus()
      el.setRangeText(key, c, c, 'start')
      el.cursorPosition = c
      el.focus()
    }
  },
  watch: {
    /* eslint object-shorthand: "off" */
    content: function (newVal) {
      console.log('text changed')
      this.txt = newVal
    }
  }
}
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 14px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #222;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #444;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #333;
}

#viewer {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
