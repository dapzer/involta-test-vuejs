<template>
  <div :class="view === defaultValues.fullWidth ? `${defaultValues.fullWidth} news__container` : 'news__container'">
    <h1>{{ $store.state.post.newsQuantity }}</h1>
    <news-card
      v-for="news in buffer[0]"
      :key="news.index"
      :post="news"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import NewsCard from '~/components/NewsCard.vue'
import { ViewValues } from '~/types/ViewValues'

export default {
  name: 'NewsContainer',
  components: { NewsCard },
  data () {
    return {
      defaultValues: ViewValues
    }
  },
  computed: {
    ...mapGetters({
      buffer: 'post/getNews'
    }),
    ...mapState({
      view: state => state.post.viewFilter
    })
  },
  watch: {
    buffer () {
      this.setQuantity()
    }
  },
  created () {
    this.setQuantity()
  },
  methods: {
    setQuantity () {
      return this.$store.commit('post/changeNewsQuantity', this.buffer[1])
    }
  }
}
</script>

<style scoped lang="scss">
.news__container {
  display: grid;
  flex-wrap: wrap;
  grid-template-columns:  1fr 1fr;
  row-gap: 20px;
  grid-gap: 20px;

  div {
    justify-self: center;
  }

  @media screen and (max-width: 840px) {
    grid-template-columns:  1fr;
  }
}

.fullWidth {
  height: 100%;
  display: grid;
  grid-template-columns:  1fr;
  justify-items: center;
  grid-auto-rows: unset;
  column-gap: 20px;
  grid-row-gap: 20px;
}
</style>
