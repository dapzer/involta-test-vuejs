<template>
  <div class="container">
    <filters-menu/>
    <news-container/>
    <page-pagination/>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
import PagePagination from '../components/PagePagination'
import { fetchNews } from '~/hook/fetchApiHook'
import FiltersMenu from '~/components/Filters.vue'
import NewsContainer from '~/components/NewsContainer.vue'
import { QueryDefaultValue } from '~/types/QueryDefaultValue'

export default Vue.extend({
  name: 'IndexPage',
  components: { PagePagination, NewsContainer, FiltersMenu },
  async asyncData ({ store }) {
    const localeBuffer = await fetchNews()
    store.commit('post/setBuffer', localeBuffer)
  },
  computed: {

  },
  methods: {
    ...mapActions({
      // asyncData: 'post/asyncData'
    })
  },
  created () {
    this.$route.query.search !== QueryDefaultValue.search && this.$store.commit('post/changeSearch', this.$route.query.search)
    this.$route.query.source && this.$store.commit('post/changeSource', this.$route.query.source)
    this.$route.params.page && this.$store.commit('post/changePage', parseInt(this.$route.params.page))
  }
})
</script>
*
