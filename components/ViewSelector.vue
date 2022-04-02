<template>
  <div class="view__selector">
    <div v-if="selectedView === defaultValues.fullWidth">
      <button>
        <img src="~/assets/images/fullWidth-active.svg" alt="">
      </button>
      <button @click="changeView(defaultValues.boxed, 4)">
        <img src="~/assets/images/boxed.svg" alt="">
      </button>
    </div>
    <div v-if="selectedView === defaultValues.boxed">
      <button @click="changeView(defaultValues.fullWidth, 3)">
        <img src="~/assets/images/fullWidth.svg" alt="">
      </button>
      <button>
        <img src="~/assets/images/boxed-active.svg" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ViewValues } from '~/types/ViewValues'

export default {
  name: 'ViewSelector',
  data () {
    return {
      defaultValues: ViewValues
    }
  },
  computed: {
    ...mapState({
      selectedView: state => state.post.viewFilter
    })
  },
  beforeMount () {
    if (localStorage.view) {
      this.$store.commit('post/changeView', localStorage.view)
      this.$store.commit('post/changeLimit', localStorage.limit)
    }
  },
  methods: {
    changeView (value, limit) {
      this.$store.commit('post/changeView', value)
      this.$store.commit('post/changeLimit', limit)
      this.$store.commit('post/changePage', 1)
      this.$router.push({ path: '/1', query: this.$store.state.post.queryes })
      localStorage.view = value
      localStorage.limit = limit
    }
  }
}
</script>

<style scoped lang="scss">
.view__selector {
  button {
    border: none;
    background: none;
    margin-left: 10px;
  }
}
</style>
