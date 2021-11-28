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

    <div class="pt-md-4">
      <router-view></router-view>
    </div>

    <div id="modals"></div>
  </div>
</template>

<script>
import AuthService from './services/authService';

export default {
  name: 'App',
  components: {},
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push('/login');
    }
  }
}
</script>
