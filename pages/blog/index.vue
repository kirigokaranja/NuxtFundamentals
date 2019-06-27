<template>
    <div class="blog-page">
      <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>
  import PostPreview from "@/components/Blog/PostPreview";
  import PostList from "../../components/Blog/PostList";
    export default {
        name: "index",
        middleware: 'auth',
      components: {
        PostList,
        PostPreview
      },
      computed: {
          loadedPosts(){
            return this.$store.getters.loadedPosts
          }
      },
    }
</script>

<style scoped>
.blog-page{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
