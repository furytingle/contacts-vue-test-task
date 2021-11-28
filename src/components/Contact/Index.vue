<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h2>Contacts</h2>
      </div>
<!--      <div class="col-md-2 offset-7">-->
<!--        <router-link to="/contacts/create" class="btn btn-success">Create</router-link>-->
<!--      </div>-->
    </div>
    <div class="row" v-if="loading">
      <div class="col-md-6 mx-auto">
        <h3>Loading...</h3>
      </div>
    </div>
    <div class="container" v-else>
      <table class="table">
        <tr v-for="contact in contacts" v-bind:key="contact.id">
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.created_at }}</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import ContactService from '../../services/contactService';

export default {
  name: 'ContactsIndex',
  data() {
    return {
      loading: false,
      contacts: []
    }
  },
  created() {
    this.getContacts();
  },
  methods: {
    getContacts() {
      this.loading = true;
      ContactService.getContacts().then(response => {
        this.contacts = response.data.data;
        this.loading = false;
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
