<template>
  <section id="about-us">
    <section class="header-background"></section>
    
    <h1 class="about__title container">Мы<br>Давайте знакомиться!</h1>  

    <section class="about__road container">
      <section class="about__road__list">
        <nuxt-link to="/" class="about__road__list__item">
          Главная
        </nuxt-link>
        <div class="about__road__list__item">
          <img src="@/assets/arrow-road.svg" alt="Стрелка пути">
        </div>
        <nuxt-link to="/about" class="about__road__list__item">
          О нас
        </nuxt-link>
        <div class="about__road__list__item">
          <img src="@/assets/arrow-road.svg" alt="Стрелка пути">
        </div>
        <nuxt-link to="/about" class="about__road__list__item">
          Мы
        </nuxt-link>
      </section>
    </section>

    <section class="about__info container">
      <section class="about__info__list">
        <div class="about__info__list__item__image">
          <b-img src="@/assets/about-img.svg" fluid alt="Responsive image"></b-img>
        </div>

        <div class="about__info__list__item__text text-block">
          <h1 class="text-block__title">Smart panda - это:</h1>
          <p class="text-block__description">
            Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют от нас анализа форм развития. С другой стороны укрепление и развитие структуры играет важную роль в формировании форм развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание новых предложений.
          </p>
          <section class="text-block__list">
            <div class="text-block__list__item">
              <img src="@/assets/about-advantages-1.svg" alt="">
              <p>Только проверенные<br>курсы</p>
            </div>

            <div class="text-block__list__item">
              <img src="@/assets/about-advantages-2.svg" alt="">
              <p>Дружеская среда для<br>переезда</p>
            </div>
          </section>
        </div>
      </section>
    </section>

    <section class="about__advantages">
      <section class="about__advantages__list container">
        <div class="about__advantages__list__item">
          <img src="@/assets/aboutUS-advantages-1.svg" alt="">
          <p>Языковые школы и<br>университеты</p>
        </div>

        <div class="about__advantages__list__item">
          <img src="@/assets/aboutUS-advantages-2.svg" alt="">
          <p>Кураторство</p>
        </div>

        <div class="about__advantages__list__item">
          <img src="@/assets/aboutUS-advantages-3.svg" alt="">
          <p>Репетиторы</p>
        </div>

        <div class="about__advantages__list__item">
          <img src="@/assets/aboutUS-advantages-4.svg" alt="">
          <p>Культурно-досуговая<br>деятельность</p>
        </div>
      </section>
    </section>

    <section class="about__team container">
      <h2 class="about__team__title">Давайте знакомиться!</h2>
      <section class="about__team__list">
        <div class="about__team__list__item">
          <b-img src="@/assets/pandas-photo/lina.svg" fluid alt="Responsive image"></b-img>
          <div class="about__team__list__item__team">
            <h5>Лина Янгильдина</h5>
            <p>Глава отдела по связям с общественностью</p>
          </div>
        </div>

        <div class="about__team__list__item">
          <b-img src="@/assets/pandas-photo/lina.svg" fluid alt="Responsive image"></b-img>
          <div class="about__team__list__item__team">
            <h5>Лина Янгильдина</h5>
            <p>Глава отдела по связям с общественностью</p>
          </div>
        </div>

        <div class="about__team__list__item">
          <b-img src="@/assets/pandas-photo/lina.svg" fluid alt="Responsive image"></b-img>
          <div class="about__team__list__item__team">
            <h5>Лина Янгильдина</h5>
            <p>Глава отдела по связям с общественностью</p>
          </div>
        </div>
      </section>
      <p class="about__team__description">
        Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют от нас анализа форм развития. С другой стороны укрепление и развитие структуры играет важную роль в формировании форм развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание новых предложений.
      </p>
    </section>

  </section>
</template>

<script>
export default {
  head: {
    title: 'О нас'
  }
}
</script>

<style scoped>
.header-background {
  content: " ";
  position: absolute;
  top: 0px;
  left: 0px;

  background-image: url('@/assets/header-pages/aboutUS.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 530px;
  width: 100%;
  z-index: -1;
}

.about__title { color: white; padding: 45px 0px; font-size: 64px; font-weight: bold; }

.about__road {
  color: white;
  font-size: 18px;
}
  .about__road__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 40%;
  }
    .about__road__list__item { color: white; padding-right: 10px; }

.about__info { padding: 100px 0px; }
  .about__info__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 100%;
  }
  .about__info__list__item__image { width: 40%; }
  .about__info__list__item__text { width: 60%; padding-left: 50px; }
    .text-block__title { font-size: 36px; font-weight: bold; text-transform: uppercase; padding-bottom: 30px; }
    .text-block__description { font-size: 18px; }
    .text-block__list {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 100%;
    }
      .text-block__list__item { width: 100%; text-align: center; }

.about__advantages { background-color: #5CAF01; }
  .about__advantages__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    
    height: 280px;
    width: 100%;
  }
    .about__advantages__list__item { width: 100%; text-align: center; }
    .about__advantages__list__item p { color: white; font-size: 18px; text-transform: uppercase; padding-top: 30px; }

.about__team { padding: 70px 0px; }
  .about__team__title { font-size: 36px; font-weight: bold; text-transform: uppercase; text-align: center; padding-bottom: 50px; }
  .about__team__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    height: 500px;
    width: 100%;
  }
    .about__team__list__item { text-align: center; padding: 30px; }
      .about__team__list__item__team { padding: 30px; }
  .about__team__description { text-align: center; font-size: 18px; }
</style>