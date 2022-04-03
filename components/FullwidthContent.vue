<template>
  <div class="content">
    <img :src="post.img" alt="">
    <div>
      <a :href="post.link" target="_blank">{{ post.title }}</a>
      <p>{{ post.description }}</p>
    </div>
    <a class="footer__link" :href="post.link" target="_blank">Подробнее</a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FullwidthContent',
  props: {
    post: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img{
    object-fit: cover;
    margin-right: 30px;
    min-width: 200px;
    min-height: 100px;
    max-height: 100px;
  }

  div:last-of-type{
    width: 100%;
  }

  p{
    padding-top: 20px;
  }

  a{
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #0029FF;
  }

  .footer__link{
    display: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #0029FF;
  }

  @media screen and (max-width: 620px){
    flex-direction: column;
    height: unset;

    img{
      margin-right: unset;
      min-width: 100%;
      min-height: unset;
    }
    a:first-of-type{
      padding-top: 20px;
    }
    a:last-of-type{
      display: block;
    }
  }
}
</style>
