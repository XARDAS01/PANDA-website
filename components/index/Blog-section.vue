<template>
  <div id="Blog-section">
    
    <div class="posts">
      <div class="post" v-for="item of posts" :key="item.id">
        <img :src="require('@/assets/blog-image/' + item.img)" width="320" height="320" alt="Blog image">
        <div class="post__img__overlay">
          <h5 class="post__img__overlay__title">{{ item.title }}</h5>
          <p class="post__img__overlay__text">{{ item.desc }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          img: "blog-1.jpeg",
          title: "Title",
          desc: "Товарищи! новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития."
        },
        {
          id: 2,
          img: "blog-2.jpeg",
          title: "Title",
          desc: "Товарищи! новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития."
        },
        {
          id: 3,
          img: "blog-3.jpeg",
          title: "Title",
          desc: "Товарищи! новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития."
        }
      ]
    }
  }
}
</script>

<style scoped>
  .posts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
    .post {
      width: 320px;
      height: 320px;
    }
    .post__img__overlay {
      position: absolute;
      margin-top: -200px;
      color: white;
      padding: 25px;

      width: 320px;
      height: 320px;
    }
</style>