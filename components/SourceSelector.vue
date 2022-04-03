<template>
  <div class="source__selector">
    <button
      v-for="item in sources"
      :key="item.index"
      :class="item.source && item.source === sourceUrl && 'active'"
      @click="changeSource(item.source)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { QueryDefaultValue } from '@/types/QueryDefaultValue'

export default {
  name: 'SourceSelector',
  data () {
    return {
      sources: [
        {
          name: 'Все',
          source: `${QueryDefaultValue.source}`
        },
        {
          name: 'Lenta.ru',
          source: 'www.lenta.ru'
        },
        {
          name: 'Mos.ru',
          source: 'www.mos.ru'
        }
      ]
    }
  },
  computed: {
    ...mapState({ sourceUrl: state => state.post.source })
  },
  methods: {
    changeSource (value) {
      this.$store.commit('post/changeSource', value)
      this.$store.commit('post/setQueryes')
      this.$store.commit('post/changePage', 1)
      this.$router.push({ path: '/1', query: this.$store.state.post.queryes })
    }
  }
}
</script>

<style scoped lang="scss">
.source__selector {

  button {
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 700;
    margin-right: 15px;
  }

  .active {
    color: #0029FF;
  }
}

</style>
