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
      dataCategoriesSelect: null,
      timestamp: ''
    }
  },
  components: {
    Header,
    Table,
    Modals
  },
  methods : {
    fetchDataCategories: function () {
      axios
      .get(`${baseURL}/categories`)
      .then((res) => {
        this.$store.commit('SET_CATEGORIES', res.data)
      })
      .catch(err => console.log(err))
    },
    getNow: function() {
    const today = new Date();
    const date =today.getDate()+'-'+ (today.getMonth()+1)+'-'+ today.getFullYear();
    this.$store.dispatch('getCurrentDate', date)
    }
  },
  created () {
      this.fetchDataCategories();
      this.getNow();
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


</style>
