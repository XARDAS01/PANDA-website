<template>
  <div>
    
    <div>
      <h3>Пакеты услуг</h3>
      <Vkit
        class="main-text__list__item"
        img="light.png"
        title="Пакет start"
        v-bind:desc="['Курсы чешского языка на территории Чехии', 'Полная кураторская и визовая поддержка', 'Сертификация на уровень B1-B2']"
        link="/kit/light"
      />
      <Vkit
        class="main-text__list__item"
        img="light.png"
        title="Пакет start"
        v-bind:desc="['Курсы чешского языка на территории Чехии', 'Полная кураторская и визовая поддержка', 'Сертификация на уровень B1-B2']"
        link="/kit/light"
      />
      <Vkit
        class="main-text__list__item"
        img="light.png"
        title="Пакет start"
        v-bind:desc="['Курсы чешского языка на территории Чехии', 'Полная кураторская и визовая поддержка', 'Сертификация на уровень B1-B2']"
        link="/kit/light"
      />
    </div>

  </div>
</template>

<script>
import Vkit from '@/components/Kit-card/briefly-kit.vue'

export default {
  layout: 'adminpanel',
  components: {
    Vkit
  },
  data () {
    return {
      packages: [
        {
          id: 1
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>