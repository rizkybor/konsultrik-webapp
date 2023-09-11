<template>
  <footer
    style="
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: white;
    "
  >
    <!-- <div class="container"> -->
    <div class="footer-columns" style="padding-top: 30px; padding-left: 30px">
      <div class="row" style="margin-right: 0px">
        <div class="col-md-5">
          <div class="footer-column">
            <!-- Isi kolom pertama -->
            <p>Powered by.</p>
            <img
              src="../assets//img/logo-icon-plus-png.png"
              class="card-img-top"
              alt="Gambar 1"
              style="width: 120px; margin-bottom: 10vw;"
            />
            <p> PT PRIMA LAYANAN NASIONAL ENJINIRING</p>
          </div>
        </div>
        <div
          class="col-md-7 d-flex "
          style="grid-gap: 10%"
        >
          <div class="footer-mobile">
            <div class="footer-column">
              <!-- Isi kolom kedua -->
              <h4>Sitemap</h4>
              <p>List 1</p>
              <p>List 2</p>
              <p>List 3</p>
            </div>
            <div class="footer-column">
              <!-- Isi kolom ketiga -->
              <h4>Footer 2</h4>
              <p>List 1</p>
              <p>List 2</p>
              <p>List 3</p>
            </div>
            <div class="footer-column">
              <!-- Isi kolom keempat -->
              <h4>Footer 3</h4>
              <p>List 1</p>
              <p>List 2</p>
              <p>List 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- Bagian Credit -->
    <div
      class="credit-section d-flex justify-content-center"
      style="background-color: #25cbd6; padding: 10px; font-size: 12px"
    >
      Copyright &copy; 2023 PT PLN Icon Plus. All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "KonsultrikWebappFooter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
