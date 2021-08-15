<template>
  <section id="loading">
    <section class="loading-page" v-if="loading">
      <img src="@/assets/logo-group-big.svg" alt="">
      <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="128px" height="15px" viewBox="0 0 128 35" xml:space="preserve"><script type="text/ecmascript" xlink:href="//faviconer.net/jscripts/smil.user.js"/>
        <g><circle fill="#000" cx="17.5" cy="17.5" r="17.5"/><animate attributeName="opacity" dur="1s" begin="0s" repeatCount="indefinite" keyTimes="0;0.167;0.5;0.668;1" values="0.3;1;1;0.3;0.3"/></g>
        <g><circle fill="#000" cx="110.5" cy="17.5" r="17.5"/><animate attributeName="opacity" dur="1s" begin="0s" repeatCount="indefinite" keyTimes="0;0.334;0.5;0.835;1" values="0.3;0.3;1;1;0.3"/></g>
        <g><circle fill="#000" cx="64" cy="17.5" r="17.5"/><animate attributeName="opacity" dur="1s" begin="0s" repeatCount="indefinite" keyTimes="0;0.167;0.334;0.668;0.835;1" values="0.3;0.3;1;1;0.3;0.3"/></g>
      </svg>
    </section>
  </section>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 10;
}
</style>