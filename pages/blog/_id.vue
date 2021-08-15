<template>
  <section id="blog-id">
    <section class="header-background"><div class="header-background--opacity"></div></section>
    
    <div class="header__title container">
      <h1>Почему Чехия?</h1>
      <p>Cтатья для будущих студентов и их родителей</p>
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
        <div class="blog__road__list__item">
          <img src="@/assets/arrow-road.svg" alt="Стрелка пути">
        </div>
        <div class="blog__road__list__item">
          {{ $route.params.id }}
        </div>
      </section>
    </section>

    <section class="blog__main container">
      <div class="blog__main__time">
        <img src="@/assets/icon-time.svg" alt="">
        <span>Время чтения:</span>
        <b>10 минут</b>
        <b-button variant="success">Прочитать позже</b-button>
      </div>
      <section class="blog__main__list">
        <div class="blog__main__list__item text">
          <h2 class="text__subtitle">Немного Чехии</h2>
          <p>
            С другой стороны сложившаяся структура организации позволяет оценить значение направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров позволяет оценить значение форм развития. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров позволяет выполнять важные задания по разработке направлений прогрессивного развития. Товарищи! укрепление и развитие структуры представляет собой интересный эксперимент проверки форм развития. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности играет важную роль в формировании новых предложений.
          </p>
          <p>
            Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют от нас анализа форм развития. С другой стороны укрепление и развитие структуры играет важную роль в формировании форм развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание новых предложений. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.
          </p>

          <h2 class="text__subtitle">Зачем нужны языковые курсы?</h2>
          <p>
            Идейные соображения высшего порядка, а также рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности требуют от нас анализа систем массового участия. Идейные соображения высшего порядка, а также сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании модели развития.
          </p>
          <p>
            Разнообразный и богатый опыт новая модель организационной деятельности требуют определения и уточнения модели развития. Разнообразный и богатый опыт укрепление и развитие структуры влечет за собой процесс внедрения и модернизации систем массового участия.
          </p>

          <h2 class="text__subtitle">Учеба в европе - выгоднее, чем кажется</h2>
          <p>
            Товарищи! новая модель организационной деятельности требуют определения и уточнения соответствующий условий активизации. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт сложившаяся структура организации представляет собой интересный эксперимент проверки существенных финансовых и административных условий. 
          </p>

          <h2 class="text__subtitle">Выводы</h2>
          <p>
            Товарищи! новая модель организационной деятельности требуют определения и уточнения соответствующий условий активизации. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт сложившаяся структура организации представляет собой интересный эксперимент проверки существенных финансовых и административных условий. 
          </p>
        </div>

        <div class="blog__main__list__item recomended">
          <h3 class="recomended__title">Это интересно: </h3>
          <section class="recomended__list">
            <div class="recomended__list_item">
              Сложно ли выучить чешский язык?
            </div>

            <div class="recomended__list_item">
              Сложно ли выучить чешский язык?
            </div>

            <div class="recomended__list_item">
              Сложно ли выучить чешский язык?
            </div>
          </section>
        </div>
      </section>

      <Vdisqus />

    </section>
  </section>
</template>

<script>
import Vdisqus from '@/components/vue-disqus.vue'

export default {
  head: {
    title: 'Название статьи'
  },
  components: {
    Vdisqus
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
  opacity: 0.65;
  z-index: -1;
}
  .header-background--opacity {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
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

.blog__main {  }
  .blog__main__time { display: flex; flex-direction: row; width: 35%; height: 40px; justify-content: space-between; align-items: center; }
    .blog__main__time img { font-size: 14px; }
    .blog__main__time span { font-size: 14px; }
    .blog__main__time b { font-size: 14px; font-weight: bold; }
    .blog__main__time button { font-size: 14px; }
  .blog__main__list {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 100%;

      padding-bottom: 50px;
  }
    .blog__main__list__item:nth-child(1) { width: 65%; }
    .blog__main__list__item:nth-child(2) { width: 20%; }

.recomended {

}
  .recomended__title {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 20px;
  }
  .recomended__list {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    height: 700px;
  }
    .recomended__list__item {

    }

.text {

}
  .text__subtitle {
    padding: 60px 0px 40px 0px;
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>