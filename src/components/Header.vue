<template>
  <mdb-navbar color="indigo" dark>
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      IMF
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="#" active>Home</mdb-nav-item>
        <mdb-nav-item href="#">Features</mdb-nav-item>
        <mdb-nav-item href="#">Pricing</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  export default {
    name: 'NavbarPage',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
    }
  }
</script>

<style scoped>

</style>
