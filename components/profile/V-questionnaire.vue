<template>
  <div class="profile-questionnaire__list">

    <h3 class="profile-questionnaire__list__title">Подробнее о каждом из этапов</h3>
    <div v-for="(item, Index) of list" :key="item.id" class="profile-questionnaire__list__item">
      <div class="profile-questionnaire__list__item__id">
        {{ Index + 1 }}
      </div>
      <div class="profile-questionnaire__list__item__info info">
        <h5 class="info__title">{{ item.title }}</h5>
        <p class="info__description">{{ item.description }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style scoped>
.profile-questionnaire__list {}
  .profile-questionnaire__list__title {
    text-align: center;
    padding: 30px 0px;
    font-size: 34px;
  }
  .profile-questionnaire__list__item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: left;
    width: 100%;

    padding: 20px 0px;
  }
    .profile-questionnaire__list__item__id {
      padding: 0px 20px;
      background-color: #5CAF01;
      color: #FFFFFF;
      font-size: 40px;
      height: 65px;
    }
    .profile-questionnaire__list__item__info {
      padding-left: 10px;
    }
    .info {  }
      .info__title {
        font-size: 26px;
        font-weight: bold;
      }
      .info__description {
        font-size: 16px;
      }

</style>