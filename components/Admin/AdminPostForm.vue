<template>
  <form @submit.prevent="onSave">
    <AppInputControl v-model="editedPost.author">Author Name</AppInputControl>
    <AppInputControl v-model="editedPost.title">Title</AppInputControl>
    <AppInputControl v-model="editedPost.thumbnail">Thumbnail Link</AppInputControl>
    <AppInputControl
      control-type="textarea"
      v-model="editedPost.previewText">Preview Text</AppInputControl>
    <AppInputControl
      control-type="textarea"
      v-model="editedPost.content">Content</AppInputControl>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
  import AppButton from "@/components/UI/AppButton";
  import AppInputControl from "@/components/UI/AppControlInput";
  export default {
    name: "AdminPostForm",
    components: {AppInputControl, AppButton},
    props:{
      post:{
        type: Object,
        required: false
      }
    },
    data(){
      return{
        editedPost: this.post ? {...this.post}
        :{
          author: '',
          title: '',
            previewText: '',
          thumbnail: '',
          content: '',
        },
      }
    },
    methods: {
      onSave(){
        this.$emit('submit', this.editedPost)
      },
      onCancel(){
        this.$router.push('/admin');
      },
    },
  }
</script>

<style scoped>

</style>
