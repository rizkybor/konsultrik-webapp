<script setup>
import Jumbotron from "./Jumbotron.vue";
import KategoriKonsultasiVue from "./KategoriKonsultasi.vue";
import Rekomendasi from "./Rekomendasi.vue";
</script>

<template>
  <div>
    <Jumbotron />
    <div
      style="
        background: #f4f6fa;
        display: flex;
        justify-content: center;
        text-align: center;
        height: 100vh;
      "
    >
      <div class="container" style="padding: 50px;">
        <Rekomendasi />
        <KategoriKonsultasiVue />
      </div>
    </div>
  </div>
</template>
