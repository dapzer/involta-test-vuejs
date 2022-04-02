<template>
  <div class="selector">
    <div v-if="pages.pagesNumber[0] >= 4">
      <button @click="changeCurrentPage(1)">
        1
      </button>
      <button @click="pages.prevPages()">...</button>
    </div>
    <div class="pages">
      <button
        v-for="page in pages.pagesNumber"
        :key="page"
        :class="$store.state.post.page === page ? 'active' : ''"
        @click="(changeCurrentPage(page))"
      >
        {{ page }}
      </button>
    </div>
    <div v-if="(pages.quantity - 3) > $store.state.post.page">
      <button @click="pages.nextPages()">...</button>
      <button @click="changeCurrentPage(pages.quantity)">
        {{ pages.quantity }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'PagePagination',
  computed: {
    ...mapGetters({
      pages: 'post/getPages'
    }),
    ...mapState({
      currentPage: 'post/page'
    })
  },
  methods: {
    changeCurrentPage (value) {
      this.$store.commit('post/changePage', value)
      this.$router.push({ path: `/${value}`})
    }
  }

}
</script>

<style scoped lang="scss">
.selector {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 50px 0px;

  button {
    margin: 0 10px;
    border: none;
    background: none;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  .pages {
    justify-self: center;
  }

  .active {
    color: #0029FF;
  }
}
</style>
