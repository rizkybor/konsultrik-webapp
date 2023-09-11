<script setup>
import Jumbotron from "./Jumbotron.vue";
import KategoriKonsultasiVue from "./KategoriKonsultasi.vue";
import Rekomendasi from "./Rekomendasi.vue";
import MarketplaceSection from "./MarketplaceSection.vue";
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
        height: auto;
      "
    >
      <div class="container" style="padding: 50px;">

        <br />
          <br />
        <br />
          <h1>Rekomendasi</h1>
          <p>Konsultasi online dengan konsultan siaga kami</p>
        <Rekomendasi />
        <KategoriKonsultasiVue />
        <MarketplaceSection />
      </div>
    </div>
  </div>
</template>
