<template>
  <div class="search">
    <input placeholder="Поиск" @input="updateSearch" :value="$store.state.post.search !== defaultSearch ? $store.state.post.search : ''">
    <div class="image">
      <img src="~/assets/images/search.svg" alt="search-img">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import { QueryDefaultValue } from '../types/QueryDefaultValue'

export default {
  name: 'SearchInput',
  data () {
    return {
      defaultSearch: QueryDefaultValue.search
    }
  },
  computed: {

  },
  methods: {
    updateSearch (event) {
      this.$store.commit('post/changeSearch', event.target.value !== '' ? event.target.value : QueryDefaultValue.search)
      this.$store.commit('post/changePage', 1)
      this.$store.commit('post/setQueryes')
      this.$router.push({ path: '/1', query: this.$store.state.post.queryes })
    }
  }

}
</script>

<style scoped lang="scss">
.search {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 321px;

  @media screen and (max-width: 800px) {
    max-width: none;
  }

  input {
    border: none;
    height: 40px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 0 10px;
    font-size: 14px;
    outline: inherit;
  }

  .image {
    position: absolute;
    pointer-events: none;
    right: 10px;
  }

}
</style>
