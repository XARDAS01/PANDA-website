<template>
  <section id="headline" class="headline-list">
    <div class="headline-list__item" v-if="clientWidth >= 426">
      <ul>
        <li>
          <img src="@/assets/mobile.svg" alt="mobile-svg">
          +4206666666
        </li>
        <li>
          <img src="@/assets/email.svg" alt="email-svg">
          manager@smartpanda.com
        </li>
      </ul>
    </div>

    <div class="headline-list__item" v-if="clientWidth >= 426">
      <ul>
        <li>
          <img src="@/assets/vk.svg" alt="mobile-svg" width="27" height="27">
        </li>
        <li>
          <img src="@/assets/facebook.svg" alt="email-svg" width="27" height="27">
        </li>
        <li>
          <img src="@/assets/instagram.svg" alt="email-svg" width="27" height="27">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clientWidth: null
    }
  },
  mounted() {
    this.clientWidth = document.documentElement.clientWidth;
  }
}
</script>

<style scoped>
ul li {
  display: inline-block;
}

#headline {
  height: 65px;
  background-color: rgba(38, 46, 57, 0.56);
}

.headline-list {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 0px 5%;
}
  .headline-list__item { color: white; }
  .headline-list__item:nth-child(1) li { margin-right: 30px; }

@media screen and (max-width: 425px) {
  #headline {
    background-color: rgba(38, 46, 57, 0);
  }
}
</style>