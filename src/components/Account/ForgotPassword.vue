<template>
  <div class="container-fluid p-0">
    <div
      class="row background mx-auto"
      style="height: 675px; max-width: 1440px"
    >
      <div class="col-md-6 left"></div>
      <div class="col-md-6 right d-flex">
        <div class="col-10 pt-5 pl-xl-5 main m-auto">
          <form class="" @submit.prevent="handleSendPassword">
            <div class="mb-3 font-weight-bolder text1">Forgot Password?</div>
            <div class="mb-5">Enter your email to reset your password.</div>
            <div>
              <input
                class="my-4 col-12 input"
                type="email"
                v-model="email"
                placeholder="Your E-mail"
                id="email"
              />
            </div>
            <div>
              <input
                type="submit"
                class="my-3 col-12 btn reset-button"
                value="Reset Password"
              />
            </div>
            <div>
              <input
                type="button"
                @click="$emit('click')"
                class="my-2 col-12 btn signin-button"
                value="Sign In"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handleSendPassword() {
      if (this.email === "") {
        alert("입력 정보 확인");
        return;
      }

      const randomString = Math.random().toString(36).slice(2);

      let encryptPassword = CryptoJS.AES.encrypt(
        randomString,
        "saseul"
      ).toString();

      const data = {
        url: "info",
        method: "put",
        email: this.email,
        originPassword: randomString,
        password: encryptPassword,
      };
      this.$store.dispatch("sendPassword", data);
      this.email = "";
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .left {
    display: none;
  }
}
.left {
  background-image: url("../../assets/group-13.png");
}
.background {
  background-image: url("../../assets/mask.png");
}
.right {
  background-color: white;
}

.main {
  height: 500px;
}
.input {
  padding: 0;
  font-size: 20px;
  outline: none;
  border: 0;
  border-bottom: 1px solid grey;
  background-color: white;
}
.input::placeholder {
  color: #cccccc;
}

.signin-button {
  font-size: 20px;
  height: 50px;
  color: #5e6499;
  border-radius: 5px;
  /*border: solid 1px #5e6499;*/
  text-decoration: underline;
  outline: none;
}
.reset-button {
  font-size: 20px;
  height: 50px;
  color: white;
  border-radius: 5px;
  background-color: #5e6499;
  outline: none;
}
.text1 {
  font-size: 25px;
}
</style>
