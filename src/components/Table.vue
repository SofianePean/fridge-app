<template>
    <div class="my-5 px-2">
      <mdb-tbl>
        <mdb-tbl-head color="black" textWhite>
          <tr>
            <th class="text-center" width="5%">#</th>
            <th class="text-center" width="12%">Nom</th>
            <th class="text-center" width="15%">Date d'expiration</th>
            <th class="text-center" width="10%">Quantité</th>
            <th class="text-center" width="20%">Quantité par paquet</th>
            <th class="text-center" width="10%">Categorie</th>
            <th class="text-center" width="1%">Supprimer</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr v-for="item in itemsFood" :key="item.id">
            <th class="text-center">{{item.id}}</th>
            <td class="text-center">{{item.name}}</td>
            <td class="text-center">{{item.expirationdate}}</td>
            <td class="text-center">{{item.quantity}}</td>
            <td class="text-center">{{item.quantitypackage}}</td>
            <td class="text-center">{{item.category.name}}</td>
            <td class="text-center"><mdb-icon @click.native="deleteItem(item)" icon="trash-alt" color="red" class="deleteItem" /></td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>
    </div>
</template>

<script>
import { mdbTbl, mdbTblHead, mdbTblBody, mdbIcon  } from 'mdbvue';
import axios from 'axios';
import {baseURL} from '../config';

export default {
    name: 'Table',
    data() {
      return {

      }
    },
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbIcon
    },
    created () {
      this.fetchDataItems()
    },
    methods: {
      deleteItem: function (item) {
        var index = this.itemsFood.indexOf(item)
        this.itemsFood.splice(index, 1)
      },
      fetchDataItems: function () {
      axios
      .get(`${baseURL}/items`)
      .then((res) => {
        this.$store.dispatch('setItems', res.data)
      })
      .catch(err => console.log(err))
    },
    },
    computed: {
      itemsFood() {
        return this.$store.getters.items;
      },
    },
  }
</script>

<style scoped>
.deleteItem {
  cursor: pointer
}

</style>