<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <div class="row">
          <div class="col -4">
            <router-link class="display-3" to="/">Inicio</router-link>
          </div>
          <div class="col-4">
            <router-link class="display-4" to="/movies"
              >Gestión de Películas</router-link>
          </div>
          <div class="col-4">
            <router-link class="display-4 info" to="/genres"
              >Gestión de Generos</router-link>
          </div>
        </div>
      </div>
      <notifications position="bottom right" />
    </div>
    <router-view class="container mt-4" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #07b83c;
}
</style>
