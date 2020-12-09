<template>
  <div>
    <mdb-btn :color=color @click.native="modal = true">{{msg}}</mdb-btn>
    <mdb-modal size="sm" :show="modal" @close="modal = false">
        <mdb-modal-header>
            <mdb-modal-title>{{msg}}</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
          <input type="email" id="defaultFormLoginEmailEx" class="form-control" placeholder="Nom de la catégorie"/>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="secondary" size="sm" @click.native="modal = false">Close</mdb-btn>
            <mdb-btn color="primary" size="sm">Save changes</mdb-btn>
        </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
  import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';
  export default {
    name: 'Modal',
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
        modal: false
      };
    },
  };
</script>

<style>
    
</style>