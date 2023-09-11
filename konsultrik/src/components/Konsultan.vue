<template>
    <div class="container" style="margin-bottom: 10vh">
    <h2
      class="mt-5"
      style="display: flex; justify-content: center; padding: 3vh"
    >
      Kategori Konsultan
    </h2>

    <!-- PILLS -->
    <div style="display: flex; gap: 0.5em; justify-content: center;">
          <span
            class="badge rounded-pill spilled"
            style="padding-top: 10px; color: whi"
            >Pembangkit</span
          >
          <span class="badge rounded-pill spilled" style="padding-top: 10px"
            >Distribusi</span
          >
          <span class="badge rounded-pill spilled" style="padding-top: 10px"
            >Transmisi & Gardu Induk</span
          >
          <span class="badge rounded-pill spilled" style="padding-top: 10px"
            >Energi Primer</span
          >
        </div>


    <!-- CARD  -->
    <div class="container" style="display: flex; justify-content: center;">
        <RekomendasiVue />
    </div>

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-info"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>

    <!-- Modal Component -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Form Konsultasi</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
              <p>Data Konsultasi</p>
            <div class="row">
                <div class="col-md-6 ms-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label"
                    >Nama Enjineer</label
                  >
                  <div class="input-group flex-nowrap">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nama Enjineer"
                      aria-label="NamaEnjineer"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 ms-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label"
                    >Jenis Konsultasi</label
                  >
                  <div class="input-group flex-nowrap">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Jenis Aplikasi"
                      aria-label="JenisAplikasi"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 ms-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label"
                    >Kategori Produk</label
                  >
                  <select id="inputState" class="form-select">
                    <option selected>Asesmen</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 ms-auto">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label"
                    >Keterangan</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <p>Data Perusahaan / Data Diri</p>
        

            <div class="row">
              <div class="col-md-6 ms-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label"
                    >Nama Perusahaan / Pribadi</label
                  >
                  <div class="input-group flex-nowrap">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 ms-auto">
                <!-- <p>{{ "BARIS 2" }}</p> -->
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label"
                    >No Handphone / WA</label
                  >
                  <div class="input-group flex-nowrap">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 ms-auto">
                <!-- <p>{{ "Keterangan" }}</p> -->
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label"
                    >Alamat Email Perusahaan / Pribadi</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-6 ms-auto">
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label"
                    >Alamat Perusahaan / Pribadi</label
                  >
                  <div class="input-group flex-nowrap">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Alamat"
                      aria-label="Alamat"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 ms-auto">
                <!-- <p>{{ "BARIS 1" }}</p> -->
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label"
                    >Nomor Telephone Perusahaan / Pribadi</label
                  >
                  <div class="input-group flex-nowrap">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nomor Telephone"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 ms-auto">
                <div
                  class="ratio ratio-21x9"
                  style="background-color: blue; border-radius: 10px"
                >
                  <div>21x9</div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Batal
            </button>
            <button @click="hello()" type="button" class="btn btn-info">Kirim</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RekomendasiVue from './Rekomendasi.vue';
import FormKonsultasi from "./modal/Form_Konsultasi.vue";

export default {
    name: 'KonsultrikWebappKonsultan',
    components: {
        RekomendasiVue
    },
    data() {
        return {
            default: 'DATA DEFAULT'
        };
    },

    mounted() {
        
    },

    methods: {
       hello(){
        console.log(this.default,'<< cek data')
            alert(this.default)
       }
    },
};
</script>

<style lang="scss" scoped>

</style>