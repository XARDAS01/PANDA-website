<template>
  <div class="adminpanel">
    <header>
      <Vheader></Vheader>
    </header>

    <main class="container admin-content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Vheader from '@/components/Admin/Header.vue'

export default {
  middleware: 'auth',
  components: {
    Vheader
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}
</script>

<style scoped>
body {
  background-color: #f7f7f7
}

a {
  color: #c6c7c6;
  transition: 0.2s;
}
a:hover {
  color: #5a5d5a;
  font-weight: bold;
}
a.nuxt-link-exact-active {
  color: #00c58e;
  font-weight: bold;
}

.adminpanel {
}

.admin-content {
  margin-top: 20px;
  padding: 20px;
  border-radius: 30px 30px 0px 0px;
  background-color: #ffffff;
  min-height: 640px;
}
</style>