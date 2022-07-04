<template>
  <div id="Blog-section">
    
    <div class="posts">

      <div class="post">
        <img :src="require('@/assets/blog-image/' + posts[0].img)" width="320" height="320" alt="Blog image">
        <div class="post__img__overlay">
          <h5 class="post__img__overlay__title">{{ posts[0].title }}</h5>
          <p class="post__img__overlay__text">{{ posts[0].desc }}</p>
        </div>
      </div>

      <div class="post" v-if="clientWidth >= 426">
        <img :src="require('@/assets/blog-image/' + posts[1].img)" width="320" height="320" alt="Blog image">
        <div class="post__img__overlay">
          <h5 class="post__img__overlay__title">{{ posts[1].title }}</h5>
          <p class="post__img__overlay__text">{{ posts[1].desc }}</p>
        </div>
      </div>

      <div class="post" v-if="clientWidth >= 426">
        <img :src="require('@/assets/blog-image/' + posts[2].img)" width="320" height="320" alt="Blog image">
        <div class="post__img__overlay">
          <h5 class="post__img__overlay__title">{{ posts[2].title }}</h5>
          <p class="post__img__overlay__text">{{ posts[2].desc }}</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      clientWidth: null,
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
  },
  mounted() {
    this.clientWidth = document.documentElement.clientWidth;
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

  @media screen and (max-width: 425px) {
    .posts {
      justify-content: center;
    }
  }
</style>