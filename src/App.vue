<template>
  <div id="app">
    <navigation :light="light"></navigation>
    <router-view />
  </div>
</template>

<script>
import navigation from "./components/navigation";
export default {
  components: { navigation },
  data() {
    return {
      light: false,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
