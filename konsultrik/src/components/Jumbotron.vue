<template>
  <div class="container-full-bg">
    <div class="bg-primary text-white jbtron">
      <h1>Jumbotron Example</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat..
      </p>
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
                <button class="btn btn-info" type="submit">Login</button>
              </div>
            </div>
          </form>

        </div>

        <div style="display: flex; gap: 0.5em;">
            <span class="badge rounded-pill text-bg-info" style="padding-top: 10px; color: whi;" >Pembangkit</span>
            <span class="badge rounded-pill text-bg-info" style="padding-top: 10px;">Distribusi</span>
            <span class="badge rounded-pill text-bg-info" style="padding-top: 10px;">Transmisi & Gardu Induk</span>
            <span class="badge rounded-pill text-bg-info" style="padding-top: 10px;">Energi Primer</span>
        </div>
      </div>
    </div>
  </div>
</template>
