<template>
  <div class="editor" v-if="editor">
    <menu-bar class="editor__header" :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from '@/components/Editor/MenuBar.vue'

export default {
  components: {
    EditorContent,
    MenuBar
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: '<h2>Текст...</h2>',
      extensions: [
        StarterKit,
      ],
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss" scoped>
.editor {
  display: flex;
  flex-direction: column;
  max-height: 400px;
  color: #0D0D0D;
  background-color: #FFFFFF;
  border: 3px solid #0D0D0D;
  border-radius: 0.75rem;
}

  .editor__header {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: 0.25rem;
    border-bottom: 3px solid #0D0D0D;
  }

  .editor__content {
    min-height: 200px;
    padding: 1.25rem 1rem;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>