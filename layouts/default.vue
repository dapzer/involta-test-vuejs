<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import appHeader from '../components/Header'
export default {
  layout: 'default',
  components: { appHeader }
}
</script>

<style scoped>

</style>
