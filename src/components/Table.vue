<template>
    <div class="my-5 px-2">
      <mdb-tbl>
        <mdb-tbl-head color="black" textWhite>
          <tr>
            <!-- <th class="text-center" width="5%">#</th> -->
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
            <td class="text-center ">{{item.name}}</td>
            <td :class="['text-center', formattedDate(item.expirationdate).nbDaysBeforeExpiration < 3 ? 'bg-danger' : 'bg-success']">{{formattedDate(item.expirationdate).date}}</td>
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
import moment from 'moment';

export default {
    name: 'Table',
    data() {
      return {
        classObject: {
          'text-center': true,
          'bgcolor': ''
        }
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
        const id = item.id;
        axios.delete(`${baseURL}/items/${id}`)
        .then((res) => {
          console.log(res)
        var index = this.itemsFood.indexOf(item)
        this.itemsFood.splice(index, 1)
        })
        .catch(err => console.log(err))

      },
      fetchDataItems: function () {
      axios
      .get(`${baseURL}/items`)
      .then((res) => {
        this.$store.dispatch('setItems', res.data)
      })
      .catch(err => console.log(err))
      },
      formattedDate: function (date) {
        const formattedDate = moment(date)
        const currentDate = moment()
        const diff = formattedDate.diff(currentDate, 'days');
        const obj = {
         date: moment(formattedDate).format('DD-MM-YYYY'),
         nbDaysBeforeExpiration: diff
        }
        return obj
      },
    },
    computed: {
      itemsFood() {
        return this.$store.getters.items;
      },
      currentDate() {
        return this.$store.state.currentDate;
      },
    },
  }
</script>

<style scoped>
.deleteItem {
  cursor: pointer
}

</style>