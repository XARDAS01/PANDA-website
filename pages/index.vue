<template>
  <div id="MainPage" class="container-require">
    <div class="header">
      <div class="header-background"></div>
      <div class="header-info__list">
        <section class="header-info__list__item">
          <h1>Языковые курсы в Чехии</h1>
          <p>Открой дверь в новую жизнь!</p>
        </section>

        <Vadvantages
          v-if="clientWidth >= 426"
          class="header-info__list__item"
        />
      </div>
    </div>

    <Vintroduction 
      class="Vintroduction"
    />

    <VbrieflyPackages 
      class="BrieflyPackages"
    />

    <section class="action-feedback">
      <p class="action-feedback__logo">Smart Panda</p>
      <h3 class="action-feedback__title">Языковые курсы для русскоязычных в Чехии</h3>
      <p class="action-feedback__desc">Наши курсы позволяют вам получить 99 тип визы, благодаря которому вы можете обучаться на территории Чешской Республики. Мы также оказываем полное сопровождение (визовое, кураторское), помощь и поддержку</p>

      <VContact 
        class="action-feedback__button"
      />
    </section>

    <VPandasProcess 
    
    />

    <section class="panda-info container">
      <div class="panda-info__list">
        <div class="panda-info__list__item">
          <p class="panda-info__list__item__desc">Избавьте себя от лишнего беспокойства</p>
          <h3 class="panda-info__list__item__title">Smart panda - Это</h3>
          <p class="panda-info__list__item__text">
            По сути, комплексное объединение. У наших истоков стоят кураторы, которые после нескольких лет работы на языковых курсах, решили создать свои с принципиально иным подходом.
            Мы понимаем, как сложно ребятам, которые только приезжают в чужую страну. Мы помнимаем, как страшно родителям, которые отправляют своих детей в первое плавание по жизни.
            Поэтому мы заключаем договоры только с проверенными партнерами: школами, университетами, студенческими центрами, общежитиями.
            Обращаясь к нам, вы получаете полный комплекс, необходимый для проведения первого года в чужой стране!
          </p>
        </div>
        <div class="panda-info__list__item">
          <div class="panda-info__list__item__pandasPoints">
            <p class="panda-info__list__item__pandasPoints__item">
              Визовая поддержка
            </p>
            <p class="panda-info__list__item__pandasPoints__item">
              Языковые курсы от школ и университетов Чехии
            </p>
            <p class="panda-info__list__item__pandasPoints__item">
              Полная кураторская поддержка: мы на связи 24/7
            </p>
            <p class="panda-info__list__item__pandasPoints__item">
              Адаптационные программы
            </p>
            <p class="panda-info__list__item__pandasPoints__item">
              Помощь в выборе жилья
            </p>
            <p class="panda-info__list__item__pandasPoints__item">
              Комплексная подготовка к поступлению в Университет
            </p>
          </div>
        </div>
      </div>
    </section>

    <Vslider />

    <div class="pandas-partners container" v-if="clientWidth >= 426">
      <div class="pandas-partners__list">
        
        <img src="./../assets/pandas-partners/logo-pelican.svg" alt="">
          
        <img src="./../assets/pandas-partners/logo-masaryk.svg" alt="">

        <img src="./../assets/pandas-partners/logo-mendel.svg" alt="">

      </div>
    </div>

    <section class="blog container">
      <p class="blog__desc">Актуальная информация</p>
      <h3 class="blog__title">Больше - в нашем блоге</h3>

      <VblogSection />
    </section>

    <section class="feedback">
      <div class="feedback__map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A83572b43df8ad69621c05edca9a3fe7c21992af1fdad560f9ad07fe6e7bbf3f8&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
      </div>

      <div class="feedback__card">
        <h3 class="feedback__card__title">Свяжитесь с нами!</h3>
        <v-form class="feedback__card__form">
          <b-form-group
            id="input-group-1"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Ваше имя"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Номер телефона"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label-for="input-1"
            description=""
          >
            <b-form-input
              id="input-1"
              type="email"
              placeholder="E-mail"
              required
            ></b-form-input>
          </b-form-group>

          <b-button class="feedback__card__form__button" type="submit" variant="secondary">Связаться</b-button>
        </v-form>
      </div>
    </section>
  </div>
</template>

<script>
import Vadvantages from "./../components/index/V-advantagesMenu.vue"
import Vintroduction from "./../components/index/introduction.vue"
import VbrieflyPackages from "./../components/index/BrieflyPackages.vue"
import VContact from "./../components/modal/V-contact.vue"
import VPandasProcess from "./../components/index/PandasProcess.vue"
import Vslider from "./../components/index/Slider.vue"
import VblogSection from "./../components/index/Blog-section.vue"

export default {
  components: {
    Vadvantages,
    Vintroduction,
    VbrieflyPackages,
    VContact,
    VPandasProcess,
    Vslider,
    VblogSection
  },
  data() {
    return {
      clientWidth: null
    }
  },
  mounted() {
    this.clientWidth = document.documentElement.clientWidth;
  }
}
</script>

<style scoped>
  #MainPage {

  }

  .header {
    height: 850px;
    width: 100%;
  }
    .header-background {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;

      background-image: url("@/assets/header-background_1.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-attachment: fixed;

      z-index: -1;
    }
      .header-info__list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0px 100px;

        height: 430px;
        width: 100%;
      }
        .header-info__list__item {
          width: 50%;
          color: white;
        }
          .header-info__list__item h1 {
            font-size: 64px;
          }
          .header-info__list__item p {
            font-size: 24px;
            font-weight: bold;
          }

  .Vintroduction {
    margin-top: -373px;
  }

  .action-feedback {
    width: 100%;
    height: 450px;
    padding: 70px;
    
    background-image: url("./../assets/courses.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    color: white;
  }
    .action-feedback__logo {

    }
    .action-feedback__title {
      padding: 20px 0px;
      max-width: 700px;
      font-size: 36px;
    }
    .action-feedback__desc{
      max-width: 700px;
      font-size: 14px;
    }
    .action-feedback__button {
      margin-top: 40px;
    }

      .arrow {
        padding-top: 50px;
      }

  .panda-info {
    margin-bottom: 50px;
  }
    .panda-info__list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
      .panda-info__list__item:nth-child(1) { width: 50%; }
        .panda-info__list__item__desc {
          font-size: 18px;
          text-transform: uppercase;
        }
        .panda-info__list__item__title {
          font-size: 36px;
          text-transform: uppercase;
          padding-bottom: 30px;
        }
        .panda-info__list__item__text {
          font-size: 14px;
        }
      .panda-info__list__item:nth-child(2) { width: 50%; padding: 50px; }
        .panda-info__list__item__pandasPoints__item {
          font-size: 14px;
          text-transform: uppercase;
        }
        .panda-info__list__item__pandasPoints__item::before {
          display: inline-block;
          content: "";
          width: 18px;
          height: 18px;
          margin-right: 10px;
          background-image: url("./../assets/icons/Ellipse.svg");
        }

  .pandas-partners {
    padding: 120px 0px 60px 0px;
  }
    .pandas-partners__list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }

  .blog {
    text-align: center;
    padding-top: 60px;
  }
    .blog__desc {
      font-size: 18px;
      text-transform: uppercase;
    }
    .blog__title {
      padding-bottom: 70px;
      font-size: 36px;
      text-transform: uppercase;
    }

  .feedback {
    margin: 100px 0px;
    height: 500px;
    width: 100%;
  }
    .feedback__card {
      position: absolute;
      width: 410px;
      height: 440px;
      padding: 40px 35px;

      margin: -484px 0px 0px 160px;

      background-color: #FFFFFF;
      border: 2px solid #262E39;
      box-sizing: border-box;
      border-radius: 5px;

      -webkit-box-shadow: 20px 20px 0px 0px rgba(92, 175, 1, 1);
      -moz-box-shadow: 20px 20px 0px 0px rgba(92, 175, 1, 1);
      box-shadow: 20px 20px 0px 0px rgba(92, 175, 1, 1);
    }
      .feedback__card__title {
        padding-bottom: 35px;
        font-size: 36px;
        font-weight: bold;
        width: 250px;
      }
      .feedback__card__form {
        text-align: center;
      }
        .feedback__card__form__button {
          margin-top: 20px;
        }


  @media screen and (max-width: 425px) {
    .header-background {
      background-size: cover;
    }

    .action-feedback {
      height: 600px;

      background-size: cover;
      background-position: center;
      padding: 40px 20px;
    }
      .action-feedback__title {
        max-width: 250px;
      }

    .panda-info__list {
      flex-direction: column;
    }
      .panda-info__list__item:nth-child(1) { width: 100%; padding-bottom: 30px; }
      .panda-info__list__item:nth-child(2) { width: 100%; padding: 0px; }

    .feedback__card {
      margin: -484px 0px 0px 12px;
      width: 280px;
      padding: 40px 20px;
    }
  }
</style>
