<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" alt />
      <h3>{{post.description}}</h3>
      <button type="button" v-on:click="deletePost(post.id)" :key="post.id">Delete</button>
      <router-link
        :to="{name: 'update', params: {post:post} }">
      <p>rediger</p>
      </router-link>
      <router-link
      :key="post.id"
      :to="{name: 'update', params:{post: post} }">
      </router-link>
    </article>
  </div>
</template>

<script>
import { postRef } from '../firebase-db'
export default {
  data () {
    return {
      posts: [],
      id: '',
      description:'',
      prewievImage:''
    }
  },
  firestore: {
    posts: postRef
  },
  methods:{
    deletePost (id) {
      postRef.doc(id).delete()
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
    updatePost (id, description, previewImage){
      postRef.doc(id).set({
        description,
        previewImage
      })
      this.$router.push('/')
    }
  }
    

  }
}
</script>

<style>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}

.grid-container > article {
  text-align: center;
  padding: 10px;
}

.grid-container > article img {
  max-width: 300px;
  width: 100%;
}

.grid-container > article h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}
</style>