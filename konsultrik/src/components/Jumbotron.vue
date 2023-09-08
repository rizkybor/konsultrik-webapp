<template>
  <div class="container-full-bg">
    <div class="bg-primary text-white jbtron">
      <!-- SECTION TEXT JUMBOTRON  -->
      <div style="color: black">
        <div class="row align-items-center" style="width: 100%">
          <div class="col-sm-6">
            <div style="margin-left: 25vw; margin-top: 10vh">
              <h1>
                Capturing <span style="color: #25cbd6"><b>the voice</b></span>
              </h1>
              <h1>of problem</h1>
              <p>Read verified feedback from your consultant.</p>
            </div>
          </div>
          <div class="col-sm-6 d-none d-sm-block">
            <img
              src="../assets/img/aasd-1.png"
              class="card-img-top"
              alt="Gambar 1"
              style="width: 25vw; margin-top: 20px"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Card middle -->
    <div
      class="card position-absolute top-50 start-50 translate-middle"
      style="background-color: #ffffff; border: none"
    >
      <div class="card-body show-1" style="display: inline-table">
        <!-- Isi card di sini -->
        <div class="mb-3 show-2">
          <form role="search">
            <div class="row">
              <div class="col-5 col-sm-5">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <img
                      src="../assets/img/Frame-6.png"
                      alt="Ikon"
                      width="16"
                      height="16"
                    />
                  </span>
                  <input
                    type="teks"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Tulis spesialisasi, prosedur, nama, ..."
                    aria-label="Tulis spesialisasi, prosedur, nama, ..."
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div class="col-5 col-sm-5">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Jakarta Selatan"
                    aria-label="Jakarta Selatan"
                    aria-describedby="basic-addon2"
                  />
                  <span class="input-group-text" id="basic-addon2">
                    <img
                      src="../assets/img/Frame-7.png"
                      alt="Ikon"
                      width="16"
                      height="16"
                    />
                  </span>
                </div>
              </div>
              <div class="col-2 col-sm-2">
                <button
                  class="btn btn-default-konsult"
                  style="background: #25cbd6; color: white"
                  type="submit"
                >
                  <span>
                    <img
                      src="../assets/img/Frame.png"
                      class="card-img-top"
                      alt="Gambar 1"
                      style="width: 18px; height: 18px"
                    />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div style="display: flex; gap: 0.5em">
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
      </div>
    </div>
  </div>
</template>
