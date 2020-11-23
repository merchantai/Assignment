<template>
  <div class="slideshow-container">
    <div class="mySlides">
      <img :src="url" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 0,
      images: [
        "https://images.unsplash.com/photo-1471991750293-5fc0e377b550?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1459&q=80",
        "https://images.unsplash.com/photo-1531152369337-1d0b0b9ef20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y3Jvd2R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
      ],
      url: "",
    };
  },
  mounted() {
    this.showSlides();
  },
  methods: {
    showSlides() {
      if (this.slideIndex === this.images.length) {
        this.slideIndex = 0;
      }
      this.url = this.images[this.slideIndex];
      this.slideIndex++;
      setTimeout(this.showSlides, 2000);
    },
  },
};
</script>

<style scoped>
img {
  width: 100vw;
  height: 90vh;
}

.slideshow-container {
  position: relative;
  margin: auto;
}
</style>