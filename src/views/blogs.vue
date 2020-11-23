<template>
  <div class="content">
    <div class="left">
      <input type="text" class="search" placeholder="Search" v-model="search" />
      <div class="list" v-for="(item, index) in filteredData" :key="index">
        <div
          class="listItem"
          @click="onSelected(index)"
          :class="{ active: selectedItemData.id === item.id }"
        >
          <h4 class="name">{{ item.title }}</h4>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="container">
        <h1 class="title">{{ selectedItemData.title }}</h1>
        <p class="details">{{ selectedItemData.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      selectedItemData: {},
      selectedItem: null,
    };
  },
  computed: {
    data() {
      return this.$store.state.dataList;
    },
    filteredData() {
      if (this.data.length) {
        let filteredData = this.data.filter((item) => {
          return (
            item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          );
        });
        return filteredData;
      } else {
        return [];
      }
    },
  },
  methods: {
    onSelected(index) {
      this.selectedItemData = this.filteredData[index];
      this.selectedItem = index;
    },
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

<style scoped>
.content {
  background: #e4e4e4;
  width: 100vw;
  height: 90vh;
  display: grid;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: 1fr 2fr;
}
.left {
  background: white;
  height: 90vh;
  overflow-y: scroll;
}
.listItem {
  width: 90%;
  margin: 10px auto;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px 20px;
}
.name {
  margin: 5px 0;
}
.search {
  width: 80%;
  margin: 10px 10%;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}
.search:focus {
  outline: none;
}
.container {
  width: 60%;
  margin: 20px auto;
}
.title {
  margin-bottom: 20px;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  background: rgb(99, 99, 99);
}
::-webkit-scrollbar-thumb:hover {
  background: blue;
}
.active {
  color: white;
  background: blue;
}
</style>