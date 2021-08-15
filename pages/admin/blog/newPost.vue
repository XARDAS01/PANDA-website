<template>
  <div class="post">


    <div class="post__title">
      <b-form-input
        class="post__title__input"
        v-model="post.title"
        type="text"
        placeholder="Название статьи"
      />
    </div>
    <div class="post__editor">
      <client-only>
        <tiptap />
      </client-only>
    </div>
    <div class="post__submit">
      <b-button class="post__submit__submit" variant="success">Отправить на проверку</b-button>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'adminpanel',
  data () {
    return {
      post: {
        title: '',
        text: '',
        date: '',
        author: '',
        stats: {
          likes: 0,
          views: 0
        }
      }
    }
  }
}
</script>

<style scoped>

</style>