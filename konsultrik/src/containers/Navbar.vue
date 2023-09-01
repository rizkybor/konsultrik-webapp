<template>
  <div style="background: white;">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Konsultrik</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- <nav> -->
      <!-- </nav> -->

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">
                 <RouterLink to="/">Konsultasi</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <RouterLink to="/about">Marketplace</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tentang Kami</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Register as Engineer</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <button class="btn btn-info" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: "KonsultrikWebappNavbar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
