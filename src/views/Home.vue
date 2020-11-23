<template>
  <div>
    <images class="images" />
    <div class="contents">
      <h1 class="title">The Blogs That I Wrote</h1>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga,
        dolorem saepe maiores eligendi explicabo, culpa, similique reprehenderit
        omnis blanditiis dignissimos? Et numquam, voluptates saepe repudiandae
        tempora dolorum in maiores?
      </p>
      <button @click="goToPeoplePage()">My Blogs</button>
    </div>
  </div>
</template>

<script>
import images from "../components/images";
export default {
  name: "Home",
  components: { images },
  methods: {
    goToPeoplePage() {
      this.$router.push("/blogs");
    },
  },
};
</script>

<style scoped>
.contents {
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}
.title,
.description {
  margin: 10px;
  text-align: center;
  width: 70%;
}
.description {
  line-height: 25px;
  letter-spacing: 1px;
}
button {
  margin: 10px;
  width: 200px;
  background: white;
  color: blue;
  font-weight: bold;
  font-size: 16px;
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
button:hover {
  background: blue;
  color: white;
}
</style>
