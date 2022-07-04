<template>
  <section id="nav">
    <div v-if="clientWidth >= 426" v-bind:class="{container: navFlag, navTransformed: !navFlag}" class="nav-list">
      <div class="nav-list__item logo">
        <nuxt-link to="/"><img class="logo" name="top" src="@/assets/logo-group-big.svg" alt="logo"></nuxt-link>
      </div>

      <div class="nav-list__item menu">
        <ul class="menu__list">
          <li class="menu__list__item">
            <b-dropdown size="sm" variant="none" no-caret>
              <template #button-content>
                <span>Услуги</span>
                <svg fill="red" width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.21368 7.27287C6.8217 7.67224 6.1783 7.67224 5.78632 7.27287L0.807792 2.20048C0.186886 1.56786 0.63506 0.500001 1.52147 0.500001L11.4785 0.5C12.3649 0.5 12.8131 1.56786 12.1922 2.20047L7.21368 7.27287Z"/>
                </svg>
              </template>
              <b-dropdown-item disabled to="/">Визовая поддержка</b-dropdown-item>
              <b-dropdown-item disabled to="/">Кураторская поддержка</b-dropdown-item>
              <b-dropdown-item to="/kit">Пакеты</b-dropdown-item>
              <b-dropdown-item disabled to="/">Жилье для студентов</b-dropdown-item>
              <b-dropdown-item disabled to="/">Страхование</b-dropdown-item>
              <b-dropdown-item disabled to="/">Репетиторы</b-dropdown-item>
            </b-dropdown>
          </li>
          <li class="menu__list__item">
            <b-button variant="none" to="/blog/why">Почему Чехия?</b-button>
          </li>
          <li class="menu__list__item">
            <b-dropdown size="sm" variant="none" no-caret>
              <template #button-content>
                <span>О нас</span>
                <svg width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.21368 7.27287C6.8217 7.67224 6.1783 7.67224 5.78632 7.27287L0.807792 2.20048C0.186886 1.56786 0.63506 0.500001 1.52147 0.500001L11.4785 0.5C12.3649 0.5 12.8131 1.56786 12.1922 2.20047L7.21368 7.27287Z"/>
                </svg>
              </template>
              <b-dropdown-item to="/about">Мы</b-dropdown-item>
              <b-dropdown-item disabled to="/">Наши партнеры</b-dropdown-item>
              <b-dropdown-item disabled to="/">Сертификация</b-dropdown-item>
            </b-dropdown>
          </li>
          <li class="menu__list__item menu__list__item__blog">
            <b-button variant="none" to="/blog">Блог</b-button>
          </li>
          <li class="menu__list__item">
            <b-button variant="none" to="/">Контакт</b-button>
          </li>
        </ul>
      </div>

      <div class="nav-list__item profile" v-if="false">
        <ul>
          <li>
            <div class="profile__block">
              <b-button variant="none" to="login">
                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="30" height="30" fill="url(#pattern0)"/>
                  <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0" transform="scale(0.0104167)"/>
                  </pattern>
                  <image id="image0" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADnUlEQVR4nO2dT2tcVRiHn9eYpUqKG8WAQpKpqKu6cSFdu4j6BUy/QLd+APcthYoLP4LiH7QBEdRFEQQhbnRhxlgo3RTa/GlCs4ia18XcIXHMTDJzzrnvvZnfA5fJnRne857zzDl3AnfOC0IIIYQQQgghxDRh0Qmk4u7PAx1gCVis/u4AzwKzwDrwFfCRmW1F5TmMVghw96f5/wD3z586Y5hN4D0z+6ZIkhPSGAHuPgu8xNEAL9Ib5A7wXKZm/gKWzezbTPGSqV3AsSXj+AB3gBfpLRmluQ+8bGY7NbR1KkUEVEvG4AD3z8+6ZJTkfTO7Fp0EZBLg7q8DK8Br5F0ySvGjmb0ZnQRkEODubwOfA0+mpzMR+0AX+KN6XK+OLr1Z93OGNh5XMVeBm2a2mSEmkEfAb8ArGXIZxT/AXf47wP0Bv2dmPiK/oa9NyA5wxcy+zhEsh4C/gZkMuQA84OjT2z/WgQ0zO5gwv9wCAA6Bd83sVmqgHALG7eA+R5/e/gB3ga6ZbafmM0ghAQDbwGLqclRy3b7DwABzhiWjRcwBV4EPUoIUmwFm1oh/8grOAIBfzOxSSoAncmXSNmwMgDeGhFlIziM1QFtnwLj5lern1M6ApiABwUhAMBIQjAQEIwHBSEAwEhCMBAQjAcFIQDASEIwEBCMBwUhAMBIQjAQEIwHBSEAwEhCMBAQjAcG0UoC7z7v7Z+6+Wx1funsnOq8QfAgF25t3980Tmtxy9/lS+ZXqZxtnwA3gwgnPzwHXa84lmdbdGefuuwz/mdOumT0z8H7dGVcjrbvruo0Cvh/xWmN+flobARfhTnXBHeShu79QKr+6+9noxLz3TehTd39UHZ+cNPg58yvVz9ZdhMclV36l+tnGa8C5QgKCkYBgJCAYCQhGAoKRgGAkIBgJCEYCgpGAYCQgGAkIRgKCkYBgJCAYCQhGAoKRgDPg7sO2LNtNjR212204mW4c2EgNUEyAu//J+d62EiB591xt3Do528BCalUObV08GYfAO2a2mhooh4BfgVdT45xCkzbv3gZWcgw+5BGwTG/7+jqqX5zEqO3rLwI/ZWhjr4p3C/gwZzGgXAUcLgFXaE8Bh9tmdjk6Ccj0LcjM1oC1/rk3v4RJlr3/czCtRXyWzGyvhrZOpRE30EJtZawOgLfM7IdM8ZJpjIBReJ5CbvfpFXL7rkiSE9IKAaPw0aUMZ4DfgS+Aj5tSO0wIIYQQQgghhJhe/gUL613Nsb0LqgAAAABJRU5ErkJggg=="/>
                  </defs>
                </svg>
                Вход
              </b-button>
            </div>
          </li>
          <li>
            <div class="profile__block">
              <b-button variant="none" to="registration">
                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="30" height="30" fill="url(#pattern1)"/>
                  <defs>
                  <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image1" transform="scale(0.0104167)"/>
                  </pattern>
                  <image id="image1" width="96" height="96" xlink:href="data:image/png;base64,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"/>
                  </defs>
                </svg>
                Регистрация
              </b-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    <div v-else class="mobile-nav"> 
      
      <div class="mobile-nav__list">
        <div class="mobile-nav__list__logo">
          <nuxt-link to="/"><img class="logo" name="top" src="@/assets/logo-group-big.svg" alt="logo"></nuxt-link>
        </div>
        <div class="mobile-nav__list__burger">
          <VBurger />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import VBurger from "@/components/header/V-burger.vue"

export default {
  components: {
    VBurger
  },
  data () {
    return {
      clientWidth: null,
      navFlag: true
    }
  },
  methods: {
    navTransform () {
      this.navFlag = !this.navFlag
    },
    onScroll (event){
      if (window.scrollY >= 215) {
        this.navFlag = false
      } else {
        this.navFlag = true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.onScroll);
    this.clientWidth = document.documentElement.clientWidth;
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
</script>

<style scoped>
ul li {
  display: inline-block;
}

#nav {
  padding: 50px 0px 25px 0px;
  height: 150px;
  border-bottom: solid 1px #FFFFFF;
}

.nav-list {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  align-items: center;
  color: white;

  transition: 0.5s;
}
  .logo {
    width: 300px;
  }
  .menu {
    width: 100%;
    text-align: center;
  }
    .menu__list__item { margin: 0px; margin: 2px; padding: 0px 5px; }
    .menu__list__item span,
    .menu__list__item a { color: white; padding: 0px; margin: 0px; font-size: 16px; }
    .menu__list__item__blog a { margin: 0px 8px 0px -3px; }
  .profile { width: 700px; }
    .profile__block a { color: white; font-size: 16px; }
    .nav-list__item li {
      margin: 0px 0px;
    }

svg { fill: white; }

.navTransformed {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100px;
  background-color: white;
  color: black;
  z-index: 100;

  transition: 0.5s;
}
  .navTransformed span,
  .navTransformed a { color: black; font-size: 18px; padding: none; margin: none; }
  .navTransformed svg { fill: black; }
  .navTransformed .menu__list__item__blog a { margin: 0px 17px 0px -5px; }


@media screen and (max-width: 425px) {
  .mobile-nav {
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #262E39;
    height: 70px;
    width: 100%;
  }
    .mobile-nav__list {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
      .mobile-nav__list__logo img {
        width: 220px;
        height: 50px;
      }

      .mobile-nav__list__burger {
      }
}
</style>