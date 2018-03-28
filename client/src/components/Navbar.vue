<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-top">
    <div class="container">
      <a class="navbar-brand" href="#">Siro's Blog</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <button v-if="token !== 'undefined' && token" class="btn btn-otline-info" data-toggle="modal" data-target="#modalAdd">Add Article</button>
            <!-- <button v-if="!token || token== 'undefined'" class="btn btn-otline-info" data-toggle="modal" data-target="#modalSignup">Signup</button> -->
            <button v-if="!token || token== 'undefined'" class="btn btn-otline-info" data-toggle="modal" data-target="#modalSignin">Login</button>
            <button v-if="token !== 'undefined' && token" class="btn btn-otline-info" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <modal></modal>
  <signup></signup>
  <signin></signin>
</div>
</template>

<script>
import modal from '@/components/Modal'
import signup from '@/components/Signup'
import signin from '@/components/Signin'
import router from '../router'
export default {
  data () {
    return {
      token: localStorage.tokenUser
    }
  },
  components: {
    modal,
    signup,
    signin
  },
  methods: {
    logout () {
      localStorage.clear()
      router.push('/')
    }
  }
}

</script>

<style>
.navbar-top{
    background-color: chocolate;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
</style>
