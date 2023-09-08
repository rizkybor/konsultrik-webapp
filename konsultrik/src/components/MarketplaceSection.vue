<template>
  <div class="mt-5">
    <br />
    <h1>Marketplace</h1>
    <p>Velit officia consequat duis enim velit mollit</p>
 
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-4">
          <div class="card mb-4 p-3" style="border: none; border-radius: 10px; align-items: center;">
            <img
              src="../assets/img/Purcase.png"
              class="card-img-top"
              alt="Gambar 1"
              style="width: 50px; height: 50px;"
            />
            <div class="card-body">
              <h5 class="card-title">Purcase</h5>
              <p class="card-text">Pesan jasa engineer sesuai dengan kebutuhan pengembangan anda.</p>
              <button class="btn custom-btn mt-2">Lihat Detail</button>
            </div>
          </div>
        </div> -->
        <div class="col-md-6">
          <div class="card mb-4 p-3" style="border: none; border-radius: 10px; align-items: center;">
            <img
              src="../assets/img/Product.png"
              class="card-img-top"
              alt="Gambar 1"
              style="width: 50px; height: 50px;"
            />
            <div class="card-body">
              <h5 class="card-title">Product</h5>
              <p class="card-text">Temukan produk/jasa kebutuhan anda disini</p>
              <button class="btn custom-btn mt-2">Lihat Detail</button>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card mb-4 p-3" style="border: none; border-radius: 10px; align-items: center;">
            <img
              src="../assets/img/Engineer.png"
              class="card-img-top"
              alt="Gambar 1"
              style="width: 50px; height: 50px;"
            />
            <div class="card-body">
              <h5 class="card-title">Engineer</h5>
              <p class="card-text">Temui engineer ahli kami.</p>
              <button class="btn custom-btn mt-2">Lihat Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "MarketplaceSection",

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
