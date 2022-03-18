<template>
  <div>
    <header-component />
    <b-row class="main-container justify-content-center" no-gutters>
          <b-col md="11">
      <router-view />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",

  components: {
    HeaderComponent,
  },
};
</script>

<style>

.main-container {
  margin-top: 90px !important;
  margin-left: 20px !important;
  margin-right: 20px !important;
}

</style>
