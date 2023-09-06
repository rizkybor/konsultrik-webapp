<template>
  <div class="marketplace">
    <!-- SEARCH  -->
    <form role="search">
      <div class="row">
        <div class="col-4 .col-md-8">
          <input
            type="text"
            class="form-control"
            id="fc-spesialisasi"
            placeholder="Tulis spesialisasi, prosedur, nama, ..."
          />
        </div>
        <div class="col-3 .col-md-8">
          <input
            type="text"
            class="form-control"
            id="fc-city"
            placeholder="Jakarta Selatan"
          />
        </div>
        <div class="col-1 .col-md-5">
          <button type="button" class="btn btn-info rounded-3">
            <span>
              <!-- <i class="bi bi-bell-fill"></i> -->
              <img
                src="../assets/img/Frame.png"
                class="card-img-top"
                alt="Gambar 1"
                style="width: 18px; height: 18px"
              />
            </span>
          </button>
        </div>

        <div class="dropdown col-3 .col-md-8">
          <select class="form-select" aria-label="Terbaru">
            <option selected>Terbaru</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="col-1 .col-md-5" style="text-align: end;">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked
            />
            <label class="btn btn-outline-info" for="btnradio1">
              <img
                src="../assets/img/Frame-1.png"
                class="card-img-top"
                alt="Gambar 1"
                style="width: 18px; height: 18px"
              />
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-outline-info" for="btnradio2">
              <img
                src="../assets/img/Frame-2.png"
                class="card-img-top"
                alt="Gambar 1"
                style="width: 18px; height: 18px"
              />
            </label>
          </div>
        </div>
      </div>
    </form>

    <br />

    <!-- CARD  -->
    <div class="row">
      <!-- SIDEBAR SEARCH  -->
      <div class="col-3">
        <div
          class="card mb-4"
          style="border: none; border-radius: 10px; align-items: center"
        >
          <div class="card-body">
            <h5 class="card-title">Filter</h5>
            <hr />
            <p class="card-cat-title-2">Kategori</p>

            <ul class="list-group">
              <li class="list-group-item border-0 card-text">
                <input
                  class="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Pembangkitan
              </li>
              <li class="list-group-item border-0 card-text">
                <input
                  class="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Distribusi
              </li>
              <li class="list-group-item border-0 card-text">
                <input
                  class="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Transmisi dan Gardu Induk
              </li>
              <li class="list-group-item border-0 card-text">
                <input
                  class="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Energi Primer
              </li>
              <li class="list-group-item border-0 card-text">
                <input
                  class="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Green Industrial Cluster Study
              </li>
              <li class="list-group-item border-0 card-text">
                <input
                  class="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Property Planning Engineering
              </li>
              <li class="list-group-item border-0 card-text">
                <input
                  class="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Power Quality Solution
              </li>
            </ul>

            <hr />
            <p class="card-cat-title-2">Harga</p>
            <div>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Harga Minimum"
                style="margin-bottom: 10px ;"
              />
            </div>
            <div>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Harga Maksimum"
              />
            </div>
            <br />
            <div>
              <span
                class="badge rounded-pill text-bg-light"
                style="padding-top: 10px"
                >10 - 100rb</span
              >
              <span
                class="badge rounded-pill text-bg-light"
                style="padding-top: 10px"
                >100 - 300rb</span
              >
              <span
                class="badge rounded-pill text-bg-light"
                style="padding-top: 10px"
                >300 - 500rb</span
              >
            </div>

            <hr />

            <p class="card-cat-title-2">Rating</p>
            <div>
              <input
                class="form-check-input me-1 card-text"
                type="checkbox"
                value=""
                aria-label="..."
              />
              4 Keatas
            </div>
            <hr />

            <p class="card-cat-title-2">Pengalaman</p>

            <div>
              <span
                class="badge rounded-pill text-bg-light"
                style="padding-top: 10px"
                >1 - 5Tahun</span
              >
              <span
                class="badge rounded-pill text-bg-light"
                style="padding-top: 10px"
                >5 - 10Tahun</span
              >
              <span
                class="badge rounded-pill text-bg-light"
                style="padding-top: 10px"
                >10 - 20Tahun</span
              >
              <span
                class="badge rounded-pill text-bg-light"
                style="padding-top: 10px"
                >>20 Tahun</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <!-- CARD COLLECT -->
        <div class="row">
          <div class="col-4">
            <div
              class="card mb-4"
              style="border: none; border-radius: 10px; align-items: center"
            >
              <img
                src="../assets/img/Rectangle 198.png"
                class="card-img-top"
                alt="Gambar 1"
              />
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">Enjinir Mekanikal, Mesin Gas/Biogas</p>
                <h6 class="card-text-2">Rp. 35.000/jam</h6>
                <p class="card-title">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div
              class="card mb-4"
              style="border: none; border-radius: 10px; align-items: center"
            >
              <img
                src="../assets/img/Rectangle 193.png"
                class="card-img-top"
                alt="Gambar 1"
              />
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">Enjinir Mekanikal, Mesin Gas/Biogas</p>
                <h6 class="card-text-2">Rp. 35.000/jam</h6>
                <p class="card-title">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div
              class="card mb-4"
              style="border: none; border-radius: 10px; align-items: center"
            >
              <img
                src="../assets/img/Rectangle 200.png"
                class="card-img-top"
                alt="Gambar 1"
              />
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">Enjinir Mekanikal, Mesin Gas/Biogas</p>
                <h6 class="card-text-2">Rp. 35.000/jam</h6>
                <p class="card-title">Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <div
              class="card mb-4"
              style="border: none; border-radius: 10px; align-items: center"
            >
              <img
                src="../assets/img/Rectangle 198.png"
                class="card-img-top"
                alt="Gambar 1"
              />
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">Enjinir Mekanikal, Mesin Gas/Biogas</p>
                <h6 class="card-text-2">Rp. 35.000/jam</h6>
                <p class="card-title">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div
              class="card mb-4"
              style="border: none; border-radius: 10px; align-items: center"
            >
              <img
                src="../assets/img/Rectangle 193.png"
                class="card-img-top"
                alt="Gambar 1"
              />
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">Enjinir Mekanikal, Mesin Gas/Biogas</p>
                <h6 class="card-text-2">Rp. 35.000/jam</h6>
                <p class="card-title">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div
              class="card mb-4"
              style="border: none; border-radius: 10px; align-items: center"
            >
              <img
                src="../assets/img/Rectangle 200.png"
                class="card-img-top"
                alt="Gambar 1"
              />
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">Enjinir Mekanikal, Mesin Gas/Biogas</p>
                <h6 class="card-text-2">Rp. 35.000/jam</h6>
                <p class="card-title">Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-4">
            <div
              class="card mb-4"
              style="border: none; border-radius: 10px; align-items: center"
            >
              <img
                src="../assets/img/Rectangle 198.png"
                class="card-img-top"
                alt="Gambar 1"
              />
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">Enjinir Mekanikal, Mesin Gas/Biogas</p>
                <h6 class="card-text-2">Rp. 35.000/jam</h6>
                <p class="card-title">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div
              class="card mb-4"
              style="border: none; border-radius: 10px; align-items: center"
            >
              <img
                src="../assets/img/Rectangle 193.png"
                class="card-img-top"
                alt="Gambar 1"
              />
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">Enjinir Mekanikal, Mesin Gas/Biogas</p>
                <h6 class="card-text-2">Rp. 35.000/jam</h6>
                <p class="card-title">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div
              class="card mb-4"
              style="border: none; border-radius: 10px; align-items: center"
            >
              <img
                src="../assets/img/Rectangle 200.png"
                class="card-img-top"
                alt="Gambar 1"
              />
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">Enjinir Mekanikal, Mesin Gas/Biogas</p>
                <h6 class="card-text-2">Rp. 35.000/jam</h6>
                <p class="card-title">Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .marketplace {
    min-height: 100vh;
    padding-top: 50px;
    padding-left: 150px;
    padding-right: 150px;
  }
}

/* Mengatur label yang tidak dipilih */
.btn-check:not(:checked) + label {
  background-color: #f4f6fa;
  /* color: green; */
}
</style>
