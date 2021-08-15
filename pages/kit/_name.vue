<template>
  <section id="kit">
    <section class="header-background"></section>

    <h1 class="kit__title container">Пакет Light - чешский язык от школы Pelican</h1>  

    <section v-if="clientWidth >= 426" class="kit__road container">
      <section class="kit__road__list">
        <nuxt-link to="/" class="kit__road__list__item">
          Главная
        </nuxt-link>
        <div class="kit__road__list__item">
          <img src="@/assets/arrow-road.svg" alt="Стрелка пути">
        </div>
        <nuxt-link to="/kit" class="kit__road__list__item">
          Услуги
        </nuxt-link>
        <div class="kit__road__list__item">
          <img src="@/assets/arrow-road.svg" alt="Стрелка пути">
        </div>
        <div class="kit__road__list__item">
          Пакет {{ kit.name }}
        </div>
      </section>
    </section>

    <section class="kit__mainInfo container">
      <section class="kit__mainInfo__list">
        <div class="kit__mainInfo__list__item">
          <b-img src="@/assets/kits/light.svg" fluid alt="Responsive image"></b-img>
        </div>
        <div class="kit__mainInfo__list__item info-item">
          <div class="info-item__header">
            <span>
              <b-form-rating
              no-border
              value="4"
              color="#5CAF01"
              readonly
              size="lg"
              precision="2"
            ></b-form-rating>
            </span>
            <span>560 часов</span>
          </div>
          <div class="row info-item__stats">
            <span class="col info-item__stats__item">Представитель:</span>
            <span class="col info-item__stats__item">Языковая школа</span>
          </div>
          <div class="row info-item__stats">
            <span class="col info-item__stats__item">Язык:</span>
            <span class="col info-item__stats__item">Чешский</span>
          </div>
          <div class="row info-item__stats">
            <span class="col info-item__stats__item">Сертификация:</span>
            <span class="col info-item__stats__item">B1-B2</span>
          </div>
          <div class="row info-item__stats">
            <span class="col info-item__stats__item">Формат:</span>
            <span class="col info-item__stats__item">Оффлайн</span>
          </div>
          <div class="row info-item__stats">
            <span class="col info-item__stats__item">Расписание:</span>
            <span class="col info-item__stats__item">5 дней в неделю</span>
          </div>
          <div class="row info-item__stats">
            <span class="col info-item__stats__item">Начало:</span>
            <span class="col info-item__stats__item">15 сентября</span>
          </div>
        </div>
      </section>
    </section>

    <section class="kit__description container">
      <h2 class="kit__description__title">{{ kit.content.title }}</h2>

      <div class="kit__description__text">
        <div style="margin-bottom: 50px;">
          <p>
            {{ kit.content.desc }}
          </p>
        </div>

        <div>
          <h5>О языковой программе:</h5>
          <p>{{ kit.content.text }}</p>
        </div>
      </div>

      <div class="kit__description__services">
        <h5 class="kit__description__services__title">Что еще входит в программу?</h5>
        <ul v-for="item in kit.services" :key="item.id" class="kit__description__services__list">
          <li class="kit__description__services__list__item">{{ item }}</li>
        </ul>
      </div>

      <p class="kit__description__price">Стоимость курса: <span>{{ kit.price }}€</span></p>
      <b-button class="kit__description__button btn-lg" variant="success">Приобрести курс</b-button>
    </section>

    <section class="kit__feedback">
      <section class="kit__feedback__container container">
        <div class="kit__feedback__container__body">
          <b-avatar class="kit__feedback__container__body__item" :src="require(`@/assets/feedback-image/${kit.feedback.avatar}`)" size="8rem"></b-avatar>
          <p class="kit__feedback__container__body__item">
            {{ kit.feedback.comment }}
          </p>
        </div>
        <p class="text-right">{{ kit.feedback.name }}. 
          <span v-if="kit.feedback.sex">Студент курса</span>
          <span v-else>Студентка курса</span>
        </p>
      </section>
    </section>

    <section class="kit__question container">
      <h2 class="kit__question__title">Популярные вопросы</h2>
      <section class="kit__question__list">
        <div class="kit__question__list__item quick-questions">
          
          <div class="quick-questions__item">
            <b-button class="btn-block" v-b-toggle.collapse-1 variant="success">Кто из этих ученых проживал в Калуге? <b-img src="@/assets/double-arrow.svg" alt="Двойная стрелка" fluid width="18" /></b-button>
            <b-collapse id="collapse-1" class="mt-2">
              <b-card style="border: none;">
                <p>
                  Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации форм развития. С другой стороны постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. 
                </p>
              </b-card>
            </b-collapse>
          </div>

          <div class="quick-questions__item">
            <b-button class="btn-block" v-b-toggle.collapse-2 variant="success">Как на Руси называлась постройка с печью для сушки снопового хлеба и льна? <b-img src="@/assets/double-arrow.svg" alt="Двойная стрелка" fluid width="18" /></b-button>
            <b-collapse id="collapse-2" class="mt-2">
              <b-card style="border: none;">
                <p>
                  Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации форм развития. С другой стороны постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. 
                </p>
              </b-card>
            </b-collapse>
          </div>

          <div class="quick-questions__item">
            <b-button class="btn-block" v-b-toggle.collapse-3 variant="success">Какая масть является самой младшей при игре в бридж? <b-img src="@/assets/double-arrow.svg" alt="Двойная стрелка" fluid width="18" /></b-button>
            <b-collapse id="collapse-3" class="mt-2">
              <b-card style="border: none;">
                <p>
                  Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации форм развития. С другой стороны постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. 
                </p>
              </b-card>
            </b-collapse>
          </div>

          <div class="quick-questions__item">
            <b-button class="btn-block" v-b-toggle.collapse-4 variant="success">Съемка одного сюжета при различных значениях экспозиции называется: <b-img src="@/assets/double-arrow.svg" alt="Двойная стрелка" fluid width="18" /></b-button>
            <b-collapse id="collapse-4" class="mt-2">
              <b-card style="border: none;">
                <p>
                  Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации форм развития. С другой стороны постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. 
                </p>
              </b-card>
            </b-collapse>
          </div>

          <div class="quick-questions__item">
            <b-button class="btn-block" v-b-toggle.collapse-5 variant="success">Какая из этих песен впервые прозвучала не в кинофильме? <b-img src="@/assets/double-arrow.svg" alt="Двойная стрелка" fluid width="18" /></b-button>
            <b-collapse id="collapse-5" class="mt-2">
              <b-card style="border: none;">
                <p>
                  Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации форм развития. С другой стороны постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. 
                </p>
              </b-card>
            </b-collapse>
          </div>

        </div>

        <div class="kit__question__list__item question-help">
          <h3 class="question-help__title">В каждый пакет входит:</h3>
          
          <Vcard
            img="pass.svg"
            title="Визовая поддержка"
            link="/"
          />

          <Vcard
            img="bag.svg"
            title="Кураторская поддержка"
            link="/"
          />

        </div>
      </section>

      <Vdisqus />

    </section>
  </section>
</template>

<script>
import axios from 'axios'

import Vcard from '@/components/recommendations/vue-card.vue'
import Vdisqus from '@/components/vue-disqus.vue'

export default {
  head: {
    title: 'Название пакета'
  },
  components: {
    Vcard,
    Vdisqus
  },
  data() {
    return {
      clientWidth: null,
      kit: {
        name: "name",
        price: 1713,
        content: {
          title: "Продвинутые курсы чешского языка от носителей",
          desc: "Специальный пакет для тех, кто хочет основательно подготовится к поступлению в чешский университет. Включает в себя 850 часов изучения чешского языка.",
          text: "Программа составлена специально таким образом, что в ходе обучения, ученик осваивает всю систему чешской грамматики, большое количество лексики, фразеологии, синтаксис на соответствующем уровне. В ходе курса равномерно распределено время на устное и письменное общение, прорабатывается чтение c пониманием, а также аудирование. По окончанию годового курса, студент сдает языковой государственный экзамен, на основании которого он получает сертификат (подтверждение владение языком на уровне A2 – B2)."
        },
        services: [
          "Чешский для повседневного общения: разговорный язык, грамматика, работа с текстами;",
          "Основы научного, академического чешского языка, используемого в высших учебных заведениях;",
          "Культурные, общественные реалии, обычаи и традиции Чешской республики;",
          "Дополнительные мероприятия (лекции, совместное обучение с чешскими студентами, экскурсии и т.д. и т.п.)."
        ],
        questions: [
          {
            id: 1, question: "one two three", answer: "one two three"
          },
          {
            id: 2, question: "one two three", answer: "one two three"
          },
          {
            id: 3, question: "one two three", answer: "one two three"
          }
        ],
        feedback: {
          avatar: "johnSnow.svg",
          sex: true,
          name: "Джон Сноу",
          comment: "Я раньше ничего не знал. А потом сходил на курсы. Поучился немного в Пеликане. Было прикольно, и я узнал что-то... блин, кароч, держи рыбу: Разнообразный и богатый опыт сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании форм развития."
        }
      }
    }
  },
  mounted() {
    this.clientWidth = document.documentElement.clientWidth;
    axios
      .get('http://localhost:8080/getKit?id=1')
      .then(response => (
        this.kit.name = response.data.name,
        this.kit.price = response.data.price,

        this.kit.content.title = response.data.content.title,
        this.kit.content.desc = response.data.content.desc,
        this.kit.content.text = response.data.content.text,

        this.kit.services = response.data.services,

        this.kit.feedback.name = response.data.feedback.name,
        this.kit.feedback.sex = response.data.feedback.sex,
        //this.kit.feedback.avatar = response.data.feedback.avatar,
        this.kit.feedback.comment = response.data.feedback.comment,

        this.kit.questions = response.data.questions
      ))
      .catch(error => console.log(error));
  }
}
</script>

<style scoped>
.header-background {
  content: " ";
  position: absolute;
  top: 0px;
  left: 0px;

  background-image: url('./../../assets/header-pages/kits.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 530px;
  width: 100%;
  z-index: -1;
}

.kit__title { color: white; padding: 45px 0px; font-size: 64px; font-weight: bold; }

.kit__road {
  color: white;
  font-size: 18px;
}
  .kit__road__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 40%;
  }
    .kit__road__list__item { color: white; }

.kit__mainInfo { margin-top: 100px; margin-bottom: 100px; }
  .kit__mainInfo__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
  }
    .kit__mainInfo__list__item:nth-child(1) { width: 50%; margin-right: 15%;  }
    .kit__mainInfo__list__item:nth-child(2) { width: 35%; border: solid 1px #5CAF01; border-radius: 5px; padding: 30px 30px; }
      .info-item__header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        padding-bottom: 32px;
      }
      .info-item__stats__item { padding-bottom: 13px; }
    
.kit__description { padding-bottom: 50px; }
  .kit__description__title { font-size: 36px; font-weight: bold; text-transform: uppercase; padding-bottom: 50px; }
  .kit__description__text { font-size: 18px; }
  .kit__description__price { font-size: 18px; padding: 40px 0px; }
    .kit__description__price span { font-weight: bold; }
  .kit__description__button { font-size: 18px; }

  .kit__description__services {
    margin-top: 50px;
  }
    .kit__description__services__list {
      list-style: inside;
    }
      .kit__description__services__list__item {

      }

.kit__feedback {
  background-color: #262E39;
  height: 340px;
  color: white;
}
  .kit__feedback__container {
    padding: 80px;
  }
    .kit__feedback__container__body {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      width: 100%;
      text-align: center;
    }
      .kit__feedback__container__body__item:nth-child(2) { margin-left: 50px; }

.kit__question { padding: 100px 0px; }
  .kit__question__title { font-size: 36px; font-weight: bold; text-transform: uppercase; }
  .kit__question__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;

    padding: 40px 0px;
  }
    .quick-questions {
      width: 100%;
      margin-bottom: 20px;
      margin-right: 90px;
    }
      .quick-questions__item {
        margin-top: 20px;
      } 
        .quick-questions__item button { background-color: white; color: black; padding: 20px;  }
        .quick-questions__item button:active,
        .quick-questions__item button:hover { background-color: green; color: white; }
  
    .question-help { width: 350px; }


@media screen and (max-width: 425px) {
  .header-background {
    content: "";
    position: absolute;
    top: 60px;
    left: 0px;

    background-image: url('./../../assets/header-pages/kits.jpg');
    background-size: 250%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position-x: -500px;
    height: 600px;
  }
  .kit__title {
    width: 100%;
    padding: 40px 10px; 
    font-size: 44px; 
    font-weight: bold;
  }
}
</style>