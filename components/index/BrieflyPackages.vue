<template>
  <div id="BrieflyPackages" class="container">

    <p class="BrieflyPackages__desc">Обучение в чехии</p>

    <h3 class="BrieflyPackages__title">Наши образовательные пакеты</h3>

    <div class="briefly-packages">
      <VbrieflyCard
        class="briefly-packages__item"
        :img="brieflyKits[0].img"
        :title="brieflyKits[0].title"
        :desc="brieflyKits[0].desc"
        :link="brieflyKits[0].link"
      />
      <VbrieflyCard
        class="briefly-packages__item"
        :img="brieflyKits[1].img"
        :title="brieflyKits[1].title"
        :desc="brieflyKits[1].desc"
        :link="brieflyKits[1].link"
      />
      <VbrieflyCard
        class="briefly-packages__item"
        :img="brieflyKits[2].img"
        :title="brieflyKits[2].title"
        :desc="brieflyKits[2].desc"
        :link="brieflyKits[2].link"
      />
    </div>
  </div>
</template>

<script>
import VbrieflyCard from "./../../components/Kit-card/briefly-kit.vue"

export default {
  components: {
    VbrieflyCard
  },
  data() {
    return {
      clientWidth: null,
      brieflyKits: [
        {
          id: 1,
          img: "light.png",
          title: "Пакет START",
          desc: [
            'Курсы чешского языка на территории Чехии',
            'Полная кураторская и визовая поддержка',
            'Сертификация на уровень B1-B2'
          ],
          link: "kit/light"
        },
        {
          id: 2,
          img: "advanced.png",
          title: "Пакет Advanced",
          desc: [
            'Курсы чешского языка на территории Чехии',
            'Полная кураторская и визовая поддержка',
            'Сертификация на уровень B1-B2',
            'Курсы подготовки к поступлению'
          ],
          link: "kit/light"
        },
        {
          id: 3,
          img: "eng.png",
          title: "Пакет ENG",
          desc: [
            'Курсы чешского языка на территории Чехии',
            'Полная кураторская и визовая поддержка',
            'Сертификация на уровень B1-B2'
          ],
          link: "kit/light"
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
  #BrieflyPackages {
    padding: 100px 0px;
    text-align: center;
  }

  .BrieflyPackages__desc {
    font-size: 18px;
  }

  .BrieflyPackages__title {
    font-size: 36px;
    padding-bottom: 70px;
  }

  .briefly-packages {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
  .briefly-packages__item {
  }
</style>