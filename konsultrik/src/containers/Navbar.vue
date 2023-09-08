<template>
  <div style="background: white;  position: sticky;
  top: 0;
  background-color: #ffffff; /* Ganti dengan warna latar belakang yang sesuai */
  z-index: 100;" >
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <img
              src="../assets//img/konsultrik-ico.png"
              class="card-img-top"
              alt="Gambar 1"
              style="width: 15px; margin-right: 10px;"
            />
        <a class="navbar-brand" href="#">KonsulTrik</a>
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
              <a class="nav-link" aria-current="page">
                 <RouterLink style="text-decoration:  none; color: black;" to="/">Konsultasi</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <RouterLink style="text-decoration:  none; color: black;" to="/products">Product</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <RouterLink style="text-decoration:  none; color: black;" to="/about">Riwayat</RouterLink>
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Register as Engineer</a>
            </li>
          </ul>
            <button class="btn custom-btn" type="submit">
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
