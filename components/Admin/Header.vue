<template>
  <div class="header">

    <nav class="container-require header__nav">
      <nuxt-link to="/" class="header__nav__item header__nav__item--colored">
        На главную
      </nuxt-link>
      <nuxt-link to="/admin/stats" class="header__nav__item">
        Статистика
      </nuxt-link>
      <nuxt-link to="/admin/blog" class="header__nav__item">
        Блог
      </nuxt-link>
      <nuxt-link to="/admin/componentEditor" class="header__nav__item">
        Редактирование компонентов
      </nuxt-link>
      <nuxt-link to="/admin" class="header__nav__item">
        пункт
      </nuxt-link>
      <nuxt-link to="/admin/stats" class="header__nav__item">
        Статистика
      </nuxt-link>
      <b-btn variant="none" class="header__nav__item header__nav__item--colored" @click="logout()">
        Выход
      </b-btn>
    </nav>

  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$auth.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 100px;
}
  .header__nav {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    width: 100%;

    position: fixed;
    top: 0px;
    left: 0px;

    background-color: #FFFFFF;

    padding: 10px 5px;
  }
  .header__nav__item--colored {
    color: #4ec58e;
    font-weight: bold;
  }
</style>