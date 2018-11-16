<template>
  <div class="home">
      <div class="container">
          <div class="row">
              <div class="col-md-8">
                   <h1 class="text-center">All the posts here</h1>
                    <div v-for = "post in posts" :key="post.id" class="list-group mt-4">
                        <!-- <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{ post.title }}</h5>
                            </div>
                        </a> -->
                        <router-link :to="{ name: 'Show', params: { id: post.id }}" class="list-group-item list-group-item-action flex-column align-items-start">
                             <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{ post.title }}</h5>
                            </div>
                        </router-link>
                    </div>
                </div>
              <div class="col-md-4">

              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      posts: [],
      url: 'http://jsonplaceholder.typicode.com/posts',
      pagination: [],
      logged_in: false,
    }
  },
  methods: {
      createNewPost(){

      },
  },
  
  created() {
    let $this=this;
    axios.get(this.url).then((response) => {
      this.posts = response.data
    })
    .catch((e) => {
      console.error(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagination {
}
.page-item {
}
</style>
