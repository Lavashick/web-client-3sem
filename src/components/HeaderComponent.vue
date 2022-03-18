<template>
    <div>
      <b-navbar toggleable="sm" type="dark" variant="dark" fixed="top">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>
          <router-link tag="b-nav-brand" to="/">
            <img id="my-logo" src="../assets/logo.png" alt="" />
          </router-link>
        </b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>

            <router-link tag="b-nav-item" :to="{ name: 'home' }" active-class="active" exact>
                Главная
            </router-link>

            <router-link tag="b-nav-item" :to="{ name: 'news' }" active-class="active" exact>
                Новости
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
#my-logo {
  width: 30px;
}
.active {
    font-weight: bold;
}
</style>