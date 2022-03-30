<template>
  <div>
<!--    <button @click="$fetch">wds</button>-->
<!--    <h1>{{  $store.state.post }}}</h1>-->
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import { fetchNews } from '~/hook/fetchApiHook';

export default Vue.extend({
  name: 'IndexPage',
  async asyncData ({ store }: any) {
    const localeBuffer = await fetchNews()
    store.commit('post/setBuffer', localeBuffer)
  },
  // data: {
  //   post: []
  // }
  methods: {
    ...mapActions({
      // asyncData: 'post/asyncData'
    })
  }
})
</script>
