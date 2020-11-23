<template>
  <div class="content">
    <h1 class="name">Merchant Ashraf Iqbal</h1>
    <div class="wrapper">
      <div class="edit">
        <img
          src="../assets/edit-button.svg"
          alt="edit button"
          @click="onEdit()"
          v-if="edit"
        />
        <img
          src="../assets/save.svg"
          alt="save button"
          @click="onSave()"
          v-if="!edit"
        />
      </div>
      <label class="label">Email</label>
      <input type="email" :disabled="edit" v-model="email" />
    </div>
    <div class="wrapper">
      <label class="label">Phone</label>
      <input type="number" :disabled="edit" v-model="phone" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: true,
      email: "",
      phone: "",
    };
  },
  mounted() {
    this.email = localStorage.getItem("email")
      ? localStorage.getItem("email")
      : "test@domain.com";
    this.phone = localStorage.getItem("phone")
      ? localStorage.getItem("phone")
      : 1234567890;
  },
  methods: {
    onEdit() {
      this.edit = false;
    },
    onSave() {
      this.edit = true;
      localStorage.setItem("phone", this.phone);
      localStorage.setItem("email", this.email);
    },
  },
};
</script>

<style scoped>
.content {
  background: #e4e4e4;
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.name {
  margin: 50px 0 20px 0;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  position: relative;
}
.label {
  margin-right: 20px;
}
input {
  border: none;
  padding: 5px 15px;
  font-size: 16px;
  line-height: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
input:focus {
  outline: none;
}
.edit {
  position: absolute;
  top: -30px;
  right: -30px;
  cursor: pointer;
}
.edit img {
  width: 20px;
}
</style>