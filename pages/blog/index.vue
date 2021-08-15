<template>
  <section id="blog">
    <section class="header-background"><div class="header-background--opacity"></div></section>
    
    <div class="header__title container">
      <h1>Блог</h1>
      <p>Свежие новости о жизни в Чехии</p>
    </div>

    <section class="blog__road container">
      <section class="blog__road__list">
        <nuxt-link to="/" class="blog__road__list__item">
          Главная
        </nuxt-link>
        <div class="blog__road__list__item">
          <img src="@/assets/arrow-road.svg" alt="Стрелка пути">
        </div>
        <nuxt-link to="/blog" class="blog__road__list__item">
          Блог
        </nuxt-link>
      </section>
    </section>

    <section class="blog__articles container">
      <section class="blog__articles__list">
        <div class="blog__articles__list__item">

          <div class="article">
            <nuxt-link to="/">
              <b-img src="@/assets/blog-image/blog-photo-example.svg" fluid alt="Responsive image"></b-img>
              <h2 class="article__title">Заголовок</h2>
              <p class="article__description">Равным образом дальнейшее развитие различных форм деятельности</p>
              <div class="article__stats">
                <div class="article__stats__item">
                  <img src="@/assets/article-stats/date.svg" alt="" width="30" height="30">
                  <span class="text-muted">24.12.2020</span>
                  <img src="@/assets/article-stats/seen.svg" alt="" width="30" height="30">
                  <span class="text-muted">300</span>
                  <img src="@/assets/article-stats/comments.svg" alt="" width="30" height="30">
                  <span class="text-muted">6</span>
                </div>
                <div class="article__stats__item">
                  <b-button variant="success">Читать</b-button>
                </div>
              </div>
            </nuxt-link>
          </div>

        </div>

        <div class="blog__articles__list__item">
          <section class="optionally">
            <div class="optionally__item optionally__search">
              <b-form-input class="optionally__search__input" v-model="text" placeholder="Поиск"></b-form-input>
            </div>

            <div class="optionally__item tegs">
              <h5>Теги</h5>
              <div class="tegs__list">
                <span 
                  class="tegs__list__item"
                  v-bind:class="{ 'tegs__list__item--checked': tag.status }"
                  v-for="(tag, Index) in tags" 
                  :key="tag.id" 
                  :id="Index"
                  v-on:click="toTagClick(Index)"
                >{{ tag.title }}</span>
              </div>
            </div>

            <div>
              <h5>Популярные посты</h5>
            </div>

          </section>
        </div>
      </section>
    </section>

  </section>
</template>

<script>
export default {
  head: {
    title: 'Блог'
  },
  data () {
    return {
      tags: [
        { title: 'Все', status: false },
        { title: 'Университеты', status: false },
        { title: 'Жизнь в Чехии', status: false },
        { title: 'Работа в Чехии', status: false },
        { title: 'Погода', status: false },
        { title: 'Деньги', status: false },
        { title: 'Личная жизнь Вайхеля', status: false },
        { title: 'Сливы гостади 18+', status: false },
      ]
    }
  },
  methods: {
    toTagClick (id) {
      this.tags[id].status = !this.tags[id].status
    }
  }
}
</script>

<style scoped>
.header-background {
  content: " ";
  position: absolute;
  top: 0px;
  left: 0px;

  background-image: url('./../../assets/blog-image/blog-header-ID.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 530px;
  width: 100%;
  z-index: -1;
}

.header__title { color: white; padding: 45px 0px; }
.header__title h1 { font-size: 64px; font-weight: bold; }
.header__title p { font-size: 36px; }

.blog__road {
  color: white;
  font-size: 18px;
  padding-bottom: 70px;
}
  .blog__road__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 40%;
  }
    .blog__road__list__item { color: white; padding-right: 10px; }

.blog__articles {
  padding: 50px 0px;
}
  .blog__articles__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
  }
    .blog__articles__list__item:nth-child(1) {
      width: 60%;
    }
    .blog__articles__list__item:nth-child(2) {
      width: 40%;
      padding: 0px 90px;
    }
      .article { transition: 0.8s; }
      .article:hover { background-color: rgb(226, 226, 226); transition: 0.8s; }
        .article img { border-radius: 5px; }
        .article__title { font-size: 24px; font-weight: bold; text-transform: uppercase; padding: 30px 0px 15px 15px; }
        .article__description { font-size: 18px; padding-left: 15px; }
        .article__stats {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-content: center;
          width: 100%;

          padding: 20px 20px 20px 15px;
        }
          .article__stats__item:nth-child(1) {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            width: 100%;
          }
            .article__stats__item:nth-child(1) span { margin: 0px 20px; }

    .optionally {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }
      .optionally__search { width: 100%; border-radius: 5px; background-color: #262E39; padding: 20px; }
        .optionally__search__input {
          background-image: url('./../../assets/search.svg');
          background-repeat: no-repeat;
          background-position: left;
          padding-left: 40px;
        }

    .tegs { margin: 40px 0px; }
      .tegs__list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
      }
        .tegs__list__item {
          color: black;
          border: solid 1px #5CAF01;
          border-radius: 20px;
          padding: 10px 25px;
          margin: 5px 0px;
          text-align: center;
          font-size: 14px;
          cursor: pointer;
        }
        .tegs__list__item--checked  {
          color: white;
          background-color: #5CAF01;
        }
</style>