<template>
  <div class="container">
    <div class="logo">
      <h1>Список новостей</h1>
      <button @click="reset">
        <img src="~/assets/images/refresh.svg" alt="">
      </button>
    </div>
    <SearchInput />
  </div>
</template>

<script>
import { QueryDefaultValue } from '../types/QueryDefaultValue'
import SearchInput from './Search'

export default {
  name: 'AppHeader',
  components: { SearchInput },
  methods: {
    reset () {
      this.$store.commit('post/changePage', 1)
      this.$store.commit('post/changeSource', QueryDefaultValue.source)
      this.$store.commit('post/changeSearch', QueryDefaultValue.search)
      this.$router.push({ path: '/1', query: this.$store.state.post.queryes })
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  padding: 36px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;

  .logo{
    display: flex;
    width: 100%;
    flex-direction: row;
    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 30px;
      border: none;

      img {
        width: 20px;
        height: 16px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;

    .logo {
      padding-bottom: 20px;
      justify-content: space-between;
    }
  }
}
</style>
