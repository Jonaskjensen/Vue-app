<template>
  <div class="update">
    <h1>update post</h1>
    <form>
      <input type="text" v-model="post.description" placeholder="Type a description here" required>
      <input type="file" ref="fileInput" accept="image/*" v-on:change="previewImage">
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">Choose Image</button>
      <div>
        <img :src="post.image" class="image-preview">
      </div>
      <button type="button" v-on:click="updatePost(post.id, post.description, post.image)">Create post</button>
  
    </form>
  </div>
</template>


<script>
import { postRef } from '../firebase-db'
export default {
  name: 'update',
  props: {
      post: Object 
  },
  methods: {
    triggerChooseImg () {
      this.$refs.fileInput.click()
    },
    previewImage () {
      const imageFile = this.$refs.fileInput.files[0]
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.post.image = event.target.result
      }
      fileReader.readAsDataURL(imageFile)
    },
    updatePost (id, description, image){
      postRef.doc(id).set({
        description,
        image
      })
      this.$router.push('/')
    }
  }
}
</script>
