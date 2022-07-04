<template>
  <section class="container">
    <section class="footer">
      <div class="footer__item">
        <img src="@/assets/logo-group.svg" alt=""><br><br>
        <nuxt-link class="footer__item__politicy" to="/">Политика конфиденциальности</nuxt-link>
      </div>
      <div class="footer__item" v-if="clientWidth >= 426">
        <p>Мы в соцсетях:</p>
        <ul>
          <li>
            <img src="@/assets/vk.svg" alt="vk-icon">
            Вконтакте
          </li>
          <li>
            <img src="@/assets/facebook.svg" alt="facebook-icon">
            Фейсбук
          </li>
          <li>
            <img src="@/assets/instagram.svg" alt="instagram-icon">
            Инстаграм
          </li>
        </ul>
      </div>
      <div class="footer__item" v-if="clientWidth >= 426">
        <p>Контакты:</p>
        <ul>
          <li>
            <img src="@/assets/gps.svg" alt="vk-icon">
            Brno, tabor 3
          </li>
          <li>
            <img src="@/assets/mobile.svg" alt="vk-icon">
            +4206666666
          </li>
          <li>
            <img src="@/assets/email.svg" alt="vk-icon">
            manager@smartpanda.com
          </li>
        </ul>
      </div>
    </section>

    <h5 class="copyright">© 2021 Smart Panda</h5>
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
.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}
  .footer__item {
    width: 100%;
    color: white;
    font-size: 18px;
  }
    .footer__item__politicy {
      color: white;
      text-decoration: underline;
      font-size: 18px;
    }

.copyright {
  text-align: center;
  color: white;
  font-size: 18px;
  margin-top: 70px;
}

a {
  font-size: 18px;
}

  @media screen and (max-width: 425px) {
    .footer {
      height: 80px;
    }
    
    .footer__item {
      text-align: center;
    }

    .copyright {
      margin-top: 50px;
    }
  }
</style>