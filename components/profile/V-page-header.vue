<template>
  <div class="profile-page__header">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "description"]
}
</script>

<style scoped>
.profile-page__header {
  background-color: #FFFFFF;
}
  .profile-page__header h1 {
    font-weight: bold;
    font-size: 40px;
  }
  .profile-page__header p {
    padding-top: 20px;
  }
</style>