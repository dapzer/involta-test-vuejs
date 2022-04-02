<template>
  <div class="filters">
    <source-selector/>
    <view-selector/>
  </div>
</template>

<script>
import SourceSelector from './SourceSelector'
import ViewSelector from '~/components/ViewSelector'

export default {
  name: 'FiltersMenu',
  components: { ViewSelector, SourceSelector }
}
</script>

<style scoped lang="scss">
.filters {
  padding: 26px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
