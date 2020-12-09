<template>
  <div>
    <mdb-btn color="#fb8c00 orange darken-1" @click.native="modal = true" class="font-weight-bold">Ajouter une catégorie</mdb-btn>
    <mdb-modal size="sm" :show="modal" @close="modal = false">
      <form @submit.prevent="handleAddCategory">
        <mdb-modal-header>
            <mdb-modal-title>Ajouter une catégorie</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <label for="defaultFormLoginEmailEx" class="grey-text">Nom :</label>
          <input type="text"  class="form-control" placeholder="Nom de la catégorie" v-model="categoryName" />
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="secondary" size="sm" @click.native="modal = false">Fermer</mdb-btn>
            <mdb-btn type="submit" color="primary" size="sm">Ajouter</mdb-btn>
        </mdb-modal-footer>
      </form>
    </mdb-modal>
  </div>
</template>

<script>
  import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';
  import { baseURL } from '../../config';
  import axios from 'axios';

  export default {
    name: 'AddCategory',
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
        categoryName: "",
      };
    },
    methods: {
      handleAddCategory: function () {
        this.modal = !this.modal
        axios.post(`${baseURL}/categories`, {
          name: this.categoryName
        })
        .then((res) => {
          console.log(res)
          this.categoryName = ''
        })
        .catch(err => console.log(err))
      }
    }
  };
</script>

<style>
    
</style>