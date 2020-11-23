<template>
  <nav class="nav" :class="{ light: light, dark: !light }">
    <p class="logo" :class="{ lightLink: light, datkLink: !light }">
      Random User
    </p>
    <ul>
      <li>
        <router-link
          to="/"
          :class="{ lightLink: light, datkLink: !light }"
          exact
          >Home</router-link
        >
      </li>
      <li>
        <router-link to="/blogs" :class="{ lightLink: light, datkLink: !light }"
          >Blogs</router-link
        >
      </li>
      <li>
        <router-link
          to="/Profile"
          :class="{ lightLink: light, datkLink: !light }"
          >Profile</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    light: {
      default: false,
    },
  },
};
</script>

<style scoped>
.light {
  background: white;
}
.dark {
  background: #333333;
}
.logo {
  margin-left: 20px;
  padding: 10px;
}
nav {
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
}

nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 50px;
}
nav ul li {
  padding: 0 20px;
}
.lightLink {
  text-decoration: none;
  color: #333333;
}
.datkLink {
  text-decoration: none;
  color: white;
}
.router-link-active {
  color: blue;
  font-weight: bold;
  background: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>