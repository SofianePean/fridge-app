<template>
  <div id="app">
    <Header />
    <Table />
    <Modals/>
  </div>
</template>

<script>
import Header from './components/Header';
import Table from './components/Table';
import Modals from './components/Modals/Modals.vue';
import axios from 'axios';
import {baseURL} from './config';

export default {
  name: 'App',
  data() {
    return {
      dataCategoriesSelect: null
    }
  },
  components: {
    Header,
    Table,
    Modals
  },
  methods : {
    fetchDataCategories: function () {
      console.log('je passe par la')
      axios
      .get(`${baseURL}/categories`)
      .then((res) => {
        this.$store.commit('SET_CATEGORIES', res.data)
      })
      .catch(err => console.log(err))
    },
  },
  created () {
      this.fetchDataCategories()
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


</style>
