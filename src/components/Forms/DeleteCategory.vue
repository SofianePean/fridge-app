<template>
  <div>
    <mdb-btn color="#283593 indigo darken-3" @click.native="modal = true" class="text-white font-weight-bold">Supprimer une catégorie</mdb-btn>
    <mdb-modal :show="modal" @close="modal = false">
      <form @submit.prevent="handleDelete">
        <mdb-modal-header>
            <mdb-modal-title>Supprimer une catégorie</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <select v-model="categorySelected" class="browser-default custom-select">
            <option disabled value="">Choisir une catégorie</option>
            <option v-for="dataCategorySelect in dataCategoriesSelect" :key="dataCategorySelect.id" :value="dataCategorySelect.id">{{dataCategorySelect.name}}</option>
          </select>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="secondary" size="sm" @click.native="modal = false">Fermer</mdb-btn>
            <mdb-btn type="submit" color="primary" size="sm">Supprimer</mdb-btn>
        </mdb-modal-footer>
      </form>
    </mdb-modal>
  </div>
</template>

<script>
  import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';
  import {baseURL} from '../../config';
  import axios from 'axios';
  export default {
    name: 'DeleteCategory',
    components: {
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbBtn
    },
    data() {
      return {
        modal: false,
        categorySelected: ''
      };
    },
    methods: {
      handleDelete: function() {
        this.modal = !this.modal
        const id = this.categorySelected
        axios.delete(`${baseURL}/categories/${id}`)
        .then((res) => {
          console.log(res)
          this.categoryName = ''
        })
        .catch(err => console.log(err))
      }
    },
    computed: {
      dataCategoriesSelect() {
        return this.$store.state.dataCategories
      },
    },
  };
</script>

<style>
    
</style>