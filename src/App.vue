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
  margin: 90px 20px !important;
  text-align: center;
}



</style>
