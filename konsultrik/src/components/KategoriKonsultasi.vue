<template>
  <div class="mt-5">
    <br />
    <h1>Kategori Konsultasi</h1>
    <p>Velit officia consequat duis enim velit mollit</p>
    <div
      style="
        display: flex;
        justify-items: center;
        grid-gap: 10%;
        justify-content: center;
      "
    >
    <div class="circle-container">
      <div class="dots-kategori"></div>
      <div class="title">Pembangkit</div>
    </div>
    <div class="circle-container">
      <div class="dots-distribusi"></div>
      <div class="title">Distribusi</div>
    </div>
    <div class="circle-container">
      <div class="dots-transmisi"></div>
      <div class="title">Transmisi & Gardu Induk</div>
    </div>
    <div class="circle-container">
      <div class="dots-energi"></div>
      <div class="title">Energi Primer</div>
    </div>

    </div>

    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "KonsultrikWebappKategoriKonsultasi",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>

.circle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .title {
    margin-top: 10px; /* Jarak antara lingkaran dan judul */
    text-align: center;
  }
.dot {
  height: 120px;
  width: 120px;
  background-color: #7ce0e6;
  border-radius: 50%;
  display: inline-block;
}


.dots-kategori {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #7ce0e6;
    background-image: url('../assets/img/Kategori.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  .dots-distribusi {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #7ce0e6;
    background-image: url('../assets/img/Distribusi.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  .dots-transmisi {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #7ce0e6;
    background-image: url('../assets/img/transmisi.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  .dots-energi {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #7ce0e6;
    background-image: url('../assets/img/energi.png');
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
