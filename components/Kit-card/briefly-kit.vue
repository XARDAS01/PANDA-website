<template>
  <section id="kit-card" class="kit">
    <b-img :src="require('@/assets/service-pack/' + img)" alt="Картинка курса" fluid class="kit__img" />
    <div class="kit__info">
      <div class="kit__info__text">
        <h3 class="kit__info__text__title">{{ title }}</h3>
        <ul class="kit__info__text__list">
          <li v-for="item in desc" :key="item.id" class="kit__info__text__list__item">
            <b-img src="@/assets/icons/rhombus.svg" width="12" height="12" />
            {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <nuxt-link :to="link" class="kit__info__link">Подробнее</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['img', 'title', 'desc', 'link']
}
</script>

<style scoped>
.kit {
  width: 315px;
  height: 522px;

  border: 1px solid #262E39;
}

  .kit__info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;

    padding: 0px 20px;
    height: 350px;
  }
    .kit__info__link {
      border: solid 1px #5CAF01;
      border-radius: 5px;
      font-size: 14px;
      padding: 10px 40px 10px 10px;

      width: 136px;
      height: 36px;
    }
    .kit__info__link:hover { background-color: #5CAF01; color: white; }
    .kit__info__link:active { background-color: #4d9400; }
    .kit__info__text {}
      .kit__info__text__title { font-size: 20px; text-transform: uppercase; font-weight: bold; }
      .kit__info__text__list__item { font-size: 14px; }
</style>