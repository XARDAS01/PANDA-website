<template>
  <div>
    
    <div class="create-post text-center">
      <nuxt-link to="/admin/blog/newPost" class="btn-success btn-lg">Написать новый пост</nuxt-link>
    </div>

    <hr>

    <div v-for="post of posts" :key="post.id" class="post-list">
      <div class="post-list__item">
        <div class="post-list__item__header">
          <h2 class="post-list__item__header__title">{{ post.title }}</h2>
          <div class="post-list__item__header__settings">
            <span>{{ post.id }}</span>
            <b-button variant="none">Изменить</b-button>
          </div>
        </div>
        <p class="post-list__item__description">{{ post.description }}</p>
        <div class="post-list__item__stats">
          <span>{{ post.likes }}</span>
          <span>{{ post.views }}</span>
        </div>
        <div v-for="tag of post.tags" :key="tag.id">
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'adminpanel',
  data () {
    return {
      posts: [
        {
          id: 1, title: "title", description: "description", tags: ["life", "schools"], likes: 22, views: 200
        },
        {
          id: 2, title: "title", description: "description", tags: ["life", "schools"], likes: 22, views: 200
        },
        {
          id: 3, title: "title", description: "description", tags: ["life", "schools"], likes: 22, views: 200
        }
      ]
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  
  margin: 0px 150px 20px 150px;
  padding: 20px;
  min-height: 200px;
  border: solid 1px #c6c7c6;
  border-radius: 20px;
}
  .post-list__item {
  }
    .post-list__item__header {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
      .post-list__item__header__title {

      }
      .post-list__item__header__settings {

      }

    .post-list__item__stats {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 100%;
      padding: 0px 100px;
    }
</style>