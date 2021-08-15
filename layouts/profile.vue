<template>
  <div id="profile-layout">

    <header class="profile-header container-require">
      <Vheadline />
      <Vnav />
    </header>

    <main class="profile-main container-require">
      <section class="profile-background"></section>

      <section class="profile-main__list container">
        <div class="profile-main__list__item" style="width: 600px; padding: 0px 0px;">
          <Nuxt />
        </div>

        <div class="profile-main__list__item">
          <VprofileMenu />
        </div>
      </section>

    </main>

    <footer class="profile-footer container-require">
      <Vfooter />
    </footer>

  </div>
</template>

<script>
import Vheadline from '@/components/header/V-headline.vue'
import Vnav from '@/components/header/V-nav.vue'

import VprofileMenu from '@/components/profile/V-menu.vue'

import Vfooter from '@/components/footer/V-footer.vue'

export default {
  middleware: 'auth',
  components: {
    Vheadline,
    Vnav,

    VprofileMenu,

    Vfooter
  }
}
</script>

<style scoped>
.profile-header { }


.profile-main {
  margin-top: 30px;
}
  .profile-main__list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;

    min-height: 500px;
  }

.profile-footer {
  background-color: #262E39;
  min-height: 300px;
  padding: 45px 0px 35px 0px;
}

.profile-background {
  content: " ";
  position: absolute;
  top: 0px;
  left: 0px;

  background-image: url('./../assets/header-background_1.jpg');
  background-size: 130%;
  background-repeat: no-repeat;
  background-position: bottom left;
  background-attachment: fixed;
  height: 215px;
  width: 100%;
  z-index: -1;
}

.profile-title h1 {
  padding: 20px 0px;
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
}
</style>