<template>
  <div class="container-full-bg">
    <div class="bg-primary text-white jbtron">
      <!-- SECTION TEXT JUMBOTRON  -->
      <div style="color: black;">
        <div class="row align-items-center" style="width: 100%;">
          <div class="col-sm-6">
            <div style="margin-left: 25vw; margin-top: 10vh;">
              <h1>Capturing <span style="color: #25cbd6;"><b>the voice</b></span></h1>
              <h1>of problem</h1>
              <p>
                Read verified feedback from your consultant.
              </p>
            </div>
          </div>
          <div class="col-sm-6 d-none d-sm-block">
            <img
              src="../assets/img/aasd-1.png"
              class="card-img-top"
              alt="Gambar 1"
              style="width: 25vw; margin-top: 20px;"
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
      <div class="card-body">
        <!-- Isi card di sini -->
        <div
          class="mb-3"
          style="
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
          "
        >
          <form class="d-flex" role="search">
            <div class="row">
              <div class="col-5 .col-md-8">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="col-5 .col-md-8">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="col-2 .col-md-5">
                <button class="btn btn-default-konsult" style="background: #25cbd6; color: white;" type="submit">Login</button>
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
          <span
            class="badge rounded-pill spilled"
            style="padding-top: 10px"
            >Distribusi</span
          >
          <span
            class="badge rounded-pill spilled"
            style="padding-top: 10px"
            >Transmisi & Gardu Induk</span
          >
          <span
            class="badge rounded-pill spilled"
            style="padding-top: 10px"
            >Energi Primer</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
