<template>
  <div class="content">
    <div>
      <a :href="post.link">{{ post.title }}</a>
      <p>{{ post.description }}</p>
    </div>
    <a class="footer__link" :href="post.link">Подробнее</a>
  </div>
</template>

<script>
export default {
  name: 'BoxedContent',
  props: {
    post: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    padding: 25px 0px;
  }

  @media screen and (max-width: 490px) {
    p {
      padding: 20px 0px;
    }
  }
  div a:first-of-type {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #0029FF;
  }

  a {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #0029FF;
  }

  .footer__link {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #0029FF;
  }
}
</style>
