<template>
  <div class="view__selector">
    <div v-if="selectedView === defaultValues.fullWidth">
      <button>
        <img src="~/assets/images/fullWidth-active.svg" alt="">
      </button>
      <button @click="changeView(defaultValues.boxed)">
        <img src="~/assets/images/boxed.svg" alt="">
      </button>
    </div>
    <div v-if="selectedView === defaultValues.boxed">
      <button @click="changeView(defaultValues.fullWidth)">
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
  methods: {
    changeView (value) {
      this.$store.commit('post/changeView', value)
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
