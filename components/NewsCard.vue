<template>
  <div :class="view === defaultValues.fullWidth ? 'news__card big__card' : 'news__card'">
    <fullwidth-content v-if="view === defaultValues.fullWidth" :post="post" />
    <boxed-content v-if="view === defaultValues.boxed" :post="post" />

    <div class="footer">
      <a :href="'https://' + post.source" target="_blank">{{ post.source }}</a>
      <p>{{ new Date(post.date).toLocaleDateString() }}</p>

    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import FullwidthContent from '~/components/FullwidthContent.vue'
import { ViewValues } from '~/types/ViewValues'
import BoxedContent from '~/components/BoxedContent.vue'

export default {
  name: 'NewsCard',
  components: { BoxedContent, FullwidthContent },
  data () {
    return {
      defaultValues: ViewValues
    }
  },
  props: {
    post: {
      type: Object,
      require: true
    }
  },
  computed: {
    ...mapState({
      view: state => state.post.viewFilter
    })
  }
}
</script>

<style scoped lang="scss">
.news__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 520px;
  width: 100%;
  min-height: 256px;
  background-color: #fff;

  .footer {
    height: 100%;
    min-height: 28px;
    max-height: 28px;
    width: 100%;
    padding: 0 30px;
    background-color: #FCFCFC;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-weight: 400;
      font-size: 14px;
      text-decoration-line: underline;
      color: #DCDCDC;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: #DCDCDC;
    }
  }

  @media screen and (max-width: 490px) {
    height: unset;
  }
}

.big__card {
  min-height: 189px;
  //min-height: unset;
  max-width: unset;

  @media screen and (max-width: 620px) {
    height: unset;
  }
}
</style>
