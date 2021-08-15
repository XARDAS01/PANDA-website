<template>
  <section id="rec-card" class="card-item">

    <div class="card-item__img">
      <b-img :src="require('@/assets/recommendation/' + img)" alt="Картинка карточки" fluid />
    </div>
    <div class="card-item__main">
      <h5 class="card-item__main__title">{{ title }}</h5>
      <nuxt-link :to="link" class="card-item__main__link">Подробнее</nuxt-link>
    </div>

  </section>
</template>

<script>
export default {
  props: ['img', 'title', 'link']
}
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  margin-top: 45px;
  width: 350px;
}

  .card-item__img { width: 100%; }

  .card-item__main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    text-align: center;

    border-top: solid 1px #5CAF01;
    border-right: solid 1px #5CAF01;
    border-bottom: solid 1px #5CAF01;

    width: 100%;
  }
    .card-item__main__title { font-size: 18px; font-weight: bold; text-transform: uppercase; }
    .card-item__main__link {
      border-radius: 5px;
      background-color: #5CAF01;
      padding: 15px;

      color: white;
      font-size: 18px;
      text-transform: uppercase;
      margin: 0px 15px;
    }
    .card-item__main__link:hover { background-color: #4a8f01; }
    .card-item__main__link:active { background-color: #3c7400; }
</style>