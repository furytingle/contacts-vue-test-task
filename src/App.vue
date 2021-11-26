<template>
  <div class="container">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div v-if="!loggedIn" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </div>

      <div v-if="loggedIn" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link">Contacts</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logout">Logout</a>
        </li>
      </div>
    </nav>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  }
}
</script>
