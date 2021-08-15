<template>
  <section id="full-kit-card" class="card">
    <b-img :src="require('@/assets/service-pack/' + img)" alt="" fluid class="card__img" />
    <div>
      <div class="card__header">
        <h3 class="card__header__title">{{ title }}</h3>
        <span class="card__header__price">{{ price }}</span>
      </div>
      <div class="card__stars">
      
        <b-form-rating
          no-border
          v-model="value"
          color="#5CAF01"
          readonly
          size="lg"
          precision="2"
        ></b-form-rating>
        
      </div>

      <div class="list">
        <div>
          <p v-for="item in desc" :key="item.id">
            {{ item }}
          </p>
        </div>
        <div class="card__footer">
          <nuxt-link :to="link" class="card__footer__details">Подробнее</nuxt-link>
          <br>
          <nuxt-link to="/" class="card__footer__order">Заказать</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['img', 'title', 'price', 'value', 'desc', 'link']
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  border: solid 1px #5CAF01;
  height: 630px;
  width: 320px;
}
  .card__stars { padding-bottom: 10px; text-align: center; }

  .card__header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 15px 20px 0px 20px;
  }
    .card__header__title { font-size: 18px; font-weight: bold; text-transform: uppercase; }
    .card__header__price { font-size: 18px; }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 0px 20px;
    height: 340px;
  }
  
  .card__footer { display: flex; flex-direction: column; text-align: center; padding-bottom: 15px; }
    .card__footer a { text-transform: uppercase; font-weight: 18px; padding: 10px; }
    .card__footer__details {
      border: solid 1px #5CAF01;
      border-radius: 5px;
      color: black;
    }
    .card__footer__details:hover { background-color: #5CAF01; color: white; }
    .card__footer__details:active { background-color: #3b7200; color: white; }
    .card__footer__order {
      background-color: #5CAF01;
      color: white;
    }
    .card__footer__order:hover {  background-color: #478a00; }
    .card__footer__order:active {  background-color: #3b7200; }
</style>