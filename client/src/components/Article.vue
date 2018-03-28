<template>
  <div class="col-sm-8 list">
    <div id="content" class="site-content">
      <div class="article-1">
        <div class="entryDate"><span class="author"></span> {{getDate(article.createdAt)}}</div>
        <div class="title">{{article.title}}</div>
        <div class="contain">{{article.body}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  export default {
      data () {
      return {
          article : ''
      }
      },
  props: ['id', 'articles'],
  watch: {
      id () {
          let self = this
          self.articles.map((value) => {
              if (value._id == this.id){
                  this.article = value
              }
          })
      }
  },
  methods: {
      getDate(date){
        return moment(date).format('MMMM Do YYYY')
    }
  }
  
  }
  
</script>

<style>

</style>
