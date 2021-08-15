<template>
  <div class="profile-page__nav">
    
    <ol>
      <li v-for="item of list" :key="item.id" class="profile-page__nav__item">
        <nuxt-link to="/">
          {{ item }}
        </nuxt-link>
      </li>
    </ol>

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

.profile-page__nav {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;

  padding: 35px;
  background-color: #f2f0f2;
}
  .profile-page__nav__item {
    text-decoration: underline;
    font-size: 18px;
    padding: 10px 0px;
  }
</style>