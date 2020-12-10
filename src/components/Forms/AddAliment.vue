<template>
  <div>
    <mdb-btn color="#424242 grey darken-3" @click.native="modal = true" class="text-white font-weight-bold">Ajouter un aliment</mdb-btn>
    <mdb-modal :show="modal" @close="modal = false">
      <form @submit.prevent="handleAddItem">

        <mdb-modal-header>
            <mdb-modal-title>Ajouter un aliment</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>

          <div class="divInput">
            <label class="grey-text">Nom :</label>
            <input type="text"  class="form-control" placeholder="Nom de l'aliment" v-model="item.name" />
          </div>

          <div class="divInput">
            <label class="grey-text">Date de péremption :</label>
            <input type="date" class="inputDate" v-model="item.expirationdate">
          </div>

          <div class="divInput">
            <label class="grey-text">Quantité :</label>
            <input type="number" class="inputDate" v-model="item.quantity">
          </div>

          <div class="divInput">
            <label class="grey-text">Quantité par paquet :</label>
            <input type="number" class="inputDate" v-model="item.quantitypackage">
          </div>
          <select v-model="item.category_id" class="browser-default custom-select" @change="coucou($event)">
            <option disabled value="">Choisir une catégorie</option>
            <option v-for="dataCategorySelect in dataCategoriesSelect" :key="dataCategorySelect.id" :value="dataCategorySelect.id" >{{dataCategorySelect.name}}</option>
          </select>
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
    name: 'AddAliment',
    components: {
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbBtn,
    },
    data() {
      return {
        modal: false,
        item: {
          category: {
            id: '',
            name: ''
          },
          expirationdate: '',
          name: '',
          category_id: '',
          quantity: '',
          quantitypackage:''
        }
      };
    },
    methods : {
      coucou(e) {
        this.item.category.name = e.srcElement.selectedOptions[0].label
      },
      handleAddItem() {
        axios.post(`${baseURL}/items`, this.item)
        .then((res) => {
          this.modal = !this.modal
          this.$store.dispatch('addItem', {
            category : {
              id: this.item.category_id,
              name: 'viande'
            },
            category_id:1,
            expirationdate: res.data.expirationdate,
            id: res.data.id,
            name: res.data.name,
            quantity: res.data.quantity,
            quantitypackage: res.data.quantitypackage,
          })
          console.log(res)
          this.$notify({
            group: 'foo',
            title: 'Important message',
            text: 'Aliment ajouté !',
            width: '500px'
          })
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

<style scoped>
.inputDate {
  padding: .375rem .75rem;
  color: #495057;

  width: 100%;
  border-radius: 3px;
  border: none;
  border: 1px solid #ced4da;
}

.divInput {
    margin: 0.5em 0em;
}

</style>