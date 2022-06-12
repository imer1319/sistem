<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand text-white">Lectura Veloz</a>
      <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item px-md-3">
          <h5 class="mb-0">
            <a class="nav-link text-warning">{{ currentUser.puntos }} Pts.</a>
          </h5>
        </li>
        <li class="nav-item">
          <img
          :src="`/imagenes/usuario/${currentUser.avatar}`"
          class="rounded-circle pb-0"
          height="40"
          width="40"
          />
        </li>
        <li class="nav-item dropdown">
          <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >
          {{ currentUser.name }}
        </a>
        <div
        class="dropdown-menu dropdown-menu-right"
        aria-labelledby="navbarDropdownMenuLink"
        >
        <router-link class="dropdown-item" to="/profile">
          Mi perfil
        </router-link>
        <a
        class="dropdown-item"
        href="/logout"
        onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
        >Cerrar Sesión
      </a>
    </div>
  </li>
</ul>
</div>
</div>
</nav>
</template>
