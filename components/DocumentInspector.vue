<template>
  <section>
    <template v-for="title in titles">
      <p :key="title.title" :class="'title-'+title.indentation">
        <!-- <span v-for="i in parseInt(title.indentation)"
        :key="i"
        class="text-gray-100">
        &nbsp;
        </span> -->
        {{ title.title }}
      </p>
    </template>
  </section>
</template>

<script>
export default {
  data () {
    return {
      titles: []
    }
  },
  mounted () {
    const content = this.$store.state.content

    for (const line of content.split('\n')) {
      if (line.startsWith('######')) {
        this.titles.push({ indentation: 6, title: line.replace('######', '') })
      } else if (line.startsWith('#####')) {
        this.titles.push({ indentation: 5, title: line.replace('#####', '') })
      } else if (line.startsWith('####')) {
        this.titles.push({ indentation: 4, title: line.replace('####', '') })
      } else if (line.startsWith('###')) {
        this.titles.push({ indentation: 3, title: line.replace('###', '') })
      } else if (line.startsWith('##')) {
        this.titles.push({ indentation: 2, title: line.replace('##', '') })
      } else if (line.startsWith('#')) {
        this.titles.push({ indentation: 1, title: line.replace('#', '') })
      }
    }
  },
  watch: {
    /* eslint-disable object-shorthand */
    '$store.state.content': function () {
      const content = this.$store.state.content

      for (const line of content.split('\n')) {
        if (line.startsWith('######')) {
          this.titles.push({ indentation: 6, title: line.replace('######', '') })
        } else if (line.startsWith('#####')) {
          this.titles.push({ indentation: 5, title: line.replace('#####', '') })
        } else if (line.startsWith('####')) {
          this.titles.push({ indentation: 4, title: line.replace('####', '') })
        } else if (line.startsWith('###')) {
          this.titles.push({ indentation: 3, title: line.replace('###', '') })
        } else if (line.startsWith('##')) {
          this.titles.push({ indentation: 2, title: line.replace('##', '') })
        } else if (line.startsWith('#')) {
          this.titles.push({ indentation: 1, title: line.replace('#', '') })
        }
      }
    }
  }
}
</script>

<style scoped>
.title-1 {
  font-size: 18px;
  font-weight: 500;
  padding-right: 8px;
}
.title-2 {
  font-size: 16px;
  font-weight: 500;
  padding-right: 16px;
}
.title-3 {
  font-size: 14px;
  font-weight: 300;
  padding-right: 24px;
}
.title-4 {
  font-size: 12px;
  font-weight: 200;
  padding-right: 32px;
}
.title-5 {
  font-weight: 200;
  padding-right: 36px;
}
.title-6 {
  font-weight: 200;
  padding-right: 42px;
}
</style>
