<template>
<div class="container">
    <h2 class="text-center">Edit Artikel</h2>
    <form>
        <div class="form-group">
        <label for="recipient-name" class="text-md-left col-form-label">Title:</label>
        <input type="text" class="form-control"  id="recipient-name" v-model="title">
        </div>
        <div class="form-group">
        <label for="message-text" rows="5" class="text-md-left col-form-label">Body:</label>
        <textarea class="form-control" id="body-text" v-model="body"></textarea>
        </div>
        <button class="btn btn-info" @click="updateArticle">Edit Article</button>
    </form>
    <div>

    </div>
</div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
  created () {
    axios.get(`http://blog-server.srohimah.com/articles/${this.$route.params.id}`).then(article => {
      this.title = article.data.title
      this.body = article.data.body
    }).catch(err => console.log(err))
  },
  data () {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    updateArticle () {
      axios({
        method: 'put',
        url: `http://blog-server.srohimah.com/articles/${this.$route.params.id}`,
        data: {
          title: this.title,
          body: this.body
        }
      }).then(data => {
        swal('Good job!', 'article has been updated', 'success')
        this.$router.push('/')
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
