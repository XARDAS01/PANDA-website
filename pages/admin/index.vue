<template>
  <section id="adminPage">

    <TuiEditor
      height="500px"
      v-model="content"
    />

    <br>

    <TuiEditorViewer
      :value="content"
      height="500px"
    />

  </section>
</template>

<script>
export default {
  layout: 'adminpanel',
  head: {
    title: 'Admin page'
  },
  data () {
    return {
      content: 'Текст...'
    }
  }
}
</script>

<style scoped>
.adminPage {

}
</style>