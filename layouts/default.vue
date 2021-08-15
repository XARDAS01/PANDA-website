<template>
  <section id="default">
    <header class="default-header container-require">
      <Vheadline />
      <Vnav />
    </header>

    <main class="default-main container-require">
      <Nuxt />

      <div :hidden="arrowToUpFlag" class="arrow-to-up">
        <a href="#top"><img src="@/assets/arrow-to-up.svg" alt="Подняться вверх" width="65" height="65"></a>
      </div>
    </main>

    <footer class="default-footer container-require">
      <Vfooter />
    </footer>
  </section>
</template>

<script>
import Vheadline from '@/components/header/V-headline.vue'
import Vnav from '@/components/header/V-nav.vue'

import Vfooter from '@/components/footer/V-footer.vue'

export default {
  components: {
    Vheadline,
    Vnav,
    Vfooter
  },
  data () {
    return {
      arrowToUpFlag: true
    }
  },
  methods: {
    onScroll (event){
      if (window.scrollY >= 100) {
        this.arrowToUpFlag = false
      } else {
        this.arrowToUpFlag = true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a,
a:hover,
a:active {
  color: black;
  text-decoration: none;
}

.default-header {
}

.default-main {
  min-height: 500px;
}
  .arrow-to-up { position: fixed; bottom: 30px; right: 30px; }

.default-footer {
  background-color: #262E39;
  min-height: 300px;
  padding: 45px 0px 35px 0px;
}

.visuallyHidden {
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
