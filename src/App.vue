<template>
  <div id="page-wrapper" class="wrapper">
    <Header v-if="isTokenExist"></Header>
    <Navigator v-if="isTokenExist"></Navigator>
    <router-view  @recheck-layout="recheckLayout"></router-view>
    <Footer v-if="isTokenExist"></Footer>
  </div>
</template>

<script>
import Header from "./components/layout/TheHeader.vue";
import Footer from "./components/layout/TheFooter.vue";
import Navigator from "./components/layout/TheNavigator.vue";

export default {
  name: "App",
  mounted() {
    let token = localStorage.getItem('token');
    if (token) {
      this.isTokenExist = true;
    }
  },
  data() {
    return {
      isTokenExist: false
    }
  },
  components: {
    Header,
    Footer,
    Navigator,
  },
  methods: {
    recheckLayout() {
      let token = localStorage.getItem('token');
      this.isTokenExist = !!token;
    }
  }
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css";
@import "../public/assets/plugins/simplebar/css/simplebar.css";
@import "../public/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../public/assets/plugins/metismenu/css/metisMenu.min.css";
@import "../public/assets/plugins/datatable/css/dataTables.bootstrap5.min.css";
@import "../public/assets/css/pace.min.css";
@import "../public/assets/css/bootstrap.min.css";
@import "../public/assets/css/bootstrap-extended.css";
@import "../public/assets/css/app.css";
@import "../public/assets/css/icons.css";
@import "../public/assets/css/dark-theme.css";
@import "../public/assets/css/semi-dark.css";
@import "../public/assets/css/header-colors.css";
@import "../public/assets/plugins/notifications/css/lobibox.min.css";
</style>
