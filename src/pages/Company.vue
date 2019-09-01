<template>
  <div class="container">
    <navbar-intricately></navbar-intricately>

    <div class="content">
      <sidenav-intricately>
        <sidenavlink-intricately link="/company-data" id="0">Company data</sidenavlink-intricately>
        <sidenavlink-intricately link="/company-data" id="1">Company table</sidenavlink-intricately>
        <sidenavlink-intricately link="/company-page" id="2">Company page</sidenavlink-intricately>
      </sidenav-intricately>

      <div class="page-content">
        <router-view />
      </div>
    </div>

    <footer-intricately></footer-intricately>
  </div>
</template>

<script>
  export default {
  }
</script>