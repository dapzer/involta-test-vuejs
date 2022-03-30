<template>
  <div class="search">
    <input placeholder="Поиск">
    <div class="image">
      <img src="~/assets/images/search.svg" alt="search-img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput'
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
