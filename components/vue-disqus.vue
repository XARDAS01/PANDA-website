<template>
  <div class='comments'>
    <Disqus 
      shortname='smartpanda-cz' 
    />
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus'

export default {
  components: {
    Disqus
  }
}
</script>