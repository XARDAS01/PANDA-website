<template>
  <section id="kit">
    <section class="header-background"></section>
    
    <div class="header__title container">
      <h1>Полный пакет услуг</h1>
      <p>Свежие новости о жизни в Чехии</p>
    </div>

    <section class="kit__road container">
      <section class="kit__road__list">
        <nuxt-link to="/" class="kit__road__list__item">
          Главная
        </nuxt-link>
        <div class="kit__road__list__item">
          <img src="@/assets/arrow-road.svg" alt="Стрелка пути">
        </div>
        <nuxt-link to="/kit" class="kit__road__list__item">
          Пакеты
        </nuxt-link>
      </section>
    </section>

    <section class="kit__text container">
      <section>
        <p class="text-center">
          Равным образом консультация с широким активом позволяет выполнять важные задания по разработке направлений прогрессивного развития. Не следует, однако забывать, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения соответствующий условий активизации. Идейные соображения высшего порядка, а также укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.
        </p>
      </section>
    </section>

    <section class="kit__coll container">
      <section class="kit__coll__list">
        <section class="kits-info">
          <VfullKit 
            class="kits-info__item"
            img="light.svg"
            title="Пакет Light"
            price="1713€"
            value="4.5"
            v-bind:desc="[
            'Обучение в группе с преподавателем — два семестра;',
            'Курсы чешского языка - 560 часов',
            'Тестирование и выдача сертификата']"
            link="/kit/light"
          />

          <VfullKit 
            class="kits-info__item"
            img="standart.svg"
            title="Пакет Standart"
            price="1713€"
            value="2"
            v-bind:desc="[
            'Обучение в группе с преподавателем — два семестра;',
            'Курсы чешского языка - 560 часов',
            'Тестирование и выдача сертификата']"
            link="/kit/standart"
          />

          <VfullKit 
            class="kits-info__item"
            img="gold.svg"
            title="Пакет Gold"
            price="1713€"
            value="5"
            v-bind:desc="[
            'Обучение в группе с преподавателем — два семестра;',
            'Курсы чешского языка - 560 часов',
            'Тестирование и выдача сертификата']"
            link="/kit/gold"
          />

          <VfullKit 
            class="kits-info__item"
            img="eng.svg"
            title="Пакет Eng"
            price="1713€"
            value="4"
            v-bind:desc="[
            'Обучение в группе с преподавателем — два семестра;',
            'Курсы чешского языка - 560 часов',
            'Тестирование и выдача сертификата']"
            link="/kit/eng"
          />

        </section>

        <section class="kit__coll__list__item additionaly">
          <h3 class="additionaly__title">В каждый пакет входит:</h3>
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

          <h3 class="additionaly__title" style="margin-top: 45px;">Дополнительно:</h3>
          <Vcard
            img="rooms.svg"
            title="Общежития"
            link="/"
          />

          <Vcard
            img="people.svg"
            title="Репетиторы"
            link="/"
          />

        </section>
      </section>

      <Vdisqus />
      
    </section>
  </section>
</template>

<script>
import VfullKit from '@/components/Kit-card/full-kit.vue'
import Vcard from '@/components/recommendations/vue-card.vue'
import Vdisqus from '@/components/vue-disqus.vue'

export default {
  head: {
    title: 'Пакеты'
  },
  components: {
    VfullKit,
    Vcard,
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

  background-image: url('./../../assets/header-pages/kits.jpg');
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

.kit__road {
  color: white;
  font-size: 18px;
  padding-bottom: 70px;
}
  .kit__road__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 40%;
  }
    .kit__road__list__item { color: white; padding-right: 10px; }

.kit__text {
  padding: 80px;
}

.kit__coll { padding-bottom: 50px; }
  .kit__coll__list {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      
      width: 100%;
  }
    .kits-info {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      
      width: 100%;
    }
      .kits-info__item {
        margin-right: 60px;
        margin-bottom: 60px;

        width: 320px;
      }

    .additionaly {
      width: 350px;
      display: flex;
      flex-direction: column;
    }
      .additionaly__title { font-size: 20px; font-weight: bold; text-transform: uppercase; }
</style>