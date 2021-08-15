<template>
  <div id="profile-menu">
    <nuxt-link class="profile-menu__item" to="/profile">Заполнить анкету</nuxt-link>
    <nuxt-link class="profile-menu__item" to="/">Выбрать программу</nuxt-link>
    <nuxt-link class="profile-menu__item" to="/">Собрать документы на визу</nuxt-link>
    <nuxt-link class="profile-menu__item" to="/">Собрать документы для нострификации</nuxt-link>
    <nuxt-link class="profile-menu__item" to="/">Подобрать страховку</nuxt-link>
    <nuxt-link class="profile-menu__item" to="/">Подобрать жилье</nuxt-link>
  </div>
</template>

<style scoped>
a {
  color: #000000;
  transition: 0.4s;
}
a:hover {
  color: #5CAF01;
  transition: 0.4s;
}
a.nuxt-link-exact-active {
  color: #5CAF01;
}

#profile-menu {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  width: 400px;
  min-height: 400px;
  padding: 35px;

  border: 1px solid rgba(0, 0, 0, 0.33);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
}
  .profile-menu__item {
    text-transform: uppercase;
    font-weight: bold;
    color: #000000;
    font-size: 18px;
    transition: 0.4s;
    padding: 20px 0px;
  }
</style>