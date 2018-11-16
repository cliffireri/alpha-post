<template>
    <div class="show">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="list-group mt-4">
                        <div class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h3 class="mb-1">{{ title }}</h3>
                                <small>Post by <strong>{{ user }}</strong></small>
                            </div>
                            <p class="mb-1">{{ body }}</p>
                            <form action="" method="get" class="mt-5">
                                <div class="form-group">
                                    <textarea name="comment_body" cols="100" rows="3" class="form-control"></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Add Comment" class="btn btn-primary">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Show',
  data () {
    return {
        post_id : '',
        title: '',
        body: '',
        user_id: '',
        user: 'loading..'
    }
  },

  created(){
      this.post_id = this.$route.params.id
      axios.get('http://jsonplaceholder.typicode.com/posts?id='+this.post_id).then((response) => {
      //this.post = response.data
      this.title=response.data[0].title
      this.body = response.data[0].body
      this.user_id = response.data[0].userId
      this.user=this.getUser
      console.log(response.data[0])
    })
    .catch((e) => {
      console.error(e)
    })
  },
    computed: {
        getUser(){
            axios.get('https://jsonplaceholder.typicode.com/users?id=' + this.user_id).then((response) => {
            this.user = response.data[0].name
            })
            .catch((e) => {
            console.error(e)
            })
        
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
