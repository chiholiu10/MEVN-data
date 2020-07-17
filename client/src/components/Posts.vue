<template>
  <div class="posts">
    <ul v-for="(post, index) in posts.data" :key="index">
      <li>{{ post.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
    console.log('hello')
  },
  methods: {
    async getPosts () {
      axios.get('http://localhost:8085/').then(response => {
        this.posts = response.data
      })
    }
  }
}
</script>
<style>
.posts {
  color: black;
}
</style>
