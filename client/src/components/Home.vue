<template>
<div class="container">
    <div class="row">
        <div class="col-sm-4 list">
            <div id="content" class="site-content">
                <div class="article" v-for="(article, index) in articles" :key="index">
                    <div class="title-2"><router-link :to="{path:'/'+article._id}">{{article.title}}</router-link>
                    <router-link :to="{ name: 'Update', params: { id: article._id }}" v-if="token !== 'undefined' && token"><span class="fa fa-edit btn"></span></router-link>
                    <span class="btn fa fa-trash" @click="remove(article._id)" v-if="token !== 'undefined' && token"></span>
                    </div>
                    <div class="entryDate"><span class="author"></span> {{getDate(article.createdAt)}}</div>
                </div>
            </div>
        </div>
        <router-view :articles="articles"></router-view>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
import moment from 'moment'

export default {
  created () {
    axios.get('http://blog-server.srohimah.com/articles').then(article => {
      this.articles = article.data.data.map(val => val)
    }).catch(err => console.log(err))
  },
  data () {
    return {
      articles: [],
      token : localStorage.tokenUser
    }
  },
  methods: {
    getDate (date) {
      return moment(date).format('MMMM Do YYYY')
    },
    remove (id) {
      swal({
				title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
      .then((willDelete) => {
          if (willDelete) {
            axios.delete(`http://blog-server.srohimah.com/articles/${id}`).then(article => {
          }).catch(err => console.log(err))
				}
      })
    }
  }
}
</script>

<style scope>
.article{
    margin-top: 50px;
}
.article-1{
    margin-top: 50px;
    margin-bottom: 115px;
    border-left: 1px solid grey;
    padding-left: 50px;
}
.contain{
    text-align: left;
    margin-bottom: 50px;
}
.title-2{
    margin: 20px 0px 0px 0px;
    font-size: 16pt;
    text-align: left;
    font-weight: bold;
    color: black;
}
.title{
    margin: 25px 0px 25px 0px;
    font-size: 35pt;
    text-align: left;
    font-weight: bold;
    color: black;
}
.list{
    background-color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-left: 50px;
    padding-right: 50px;
}
.entryDate{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:dimgray;
    font-weight: bold;
    text-align: left;
}
.author{
    color:indianred;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
