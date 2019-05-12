<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/one">One</router-link> |
      <router-link to="/two">Two</router-link> |
      <router-link to="/two">Three</router-link> |
      <router-link to="/two">Four</router-link> |
      <router-link to="/two">Five</router-link> |
      <router-link to="/two">Six</router-link>
    </div>
    <router-view class="router-box" />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  >#nav {
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  >.router-box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

  }
}
</style>
