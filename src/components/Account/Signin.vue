<template>
  <div class="container-fluid p-0">
    <div class="row background w-100 m-auto" style="height: 675px">
      <div class="col-md-6 col-0 signin-left"></div>
      <div class="col-md-6 col-12 signin-right d-flex">
        <div class="col-10 pt-5 pl-xl-5 signin-main m-auto">
          <form class="" @submit.prevent="handleLogin">
            <div class="mb-2 font-weight-bolder text1">SIGN IN</div>
            <div class="mb-4">Welcome! Log into your account</div>
            <div>
              <input
                class="my-3 col-12 input"
                type="email"
                v-model="email"
                placeholder="Your E-mail"
              />
            </div>
            <div>
              <input
                class="my-3 col-12 input"
                type="password"
                v-model="password"
                placeholder="Your Password"
              />
            </div>
            <div>
              <input
                type="submit"
                class="my-3 col-12 btn signin-button"
                value="Sign In"
              />
            </div>
            <div>
              <input
                type="button"
                @click="$emit('click')"
                class="my-2 col-12 btn forgot-button"
                value="Forgot Password?"
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
  name: "account-signin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.email === "" || this.password === "") {
        alert("입력 정보 확인");
        return;
      }
      let encryptPassword = CryptoJS.AES.encrypt(
        this.password,
        "saseul"
      ).toString();

      const data = {
        url: "signin",
        email: this.email,
        password: encryptPassword,
      };
      this.$store.dispatch("account", data);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .signin-left {
    display: none;
  }
}
.signin-left {
  background-image: url("../../assets/group-13.png");
}
.background {
  max-width: 1440px;
  background-image: url("../../assets/mask.png");
}
.signin-right {
  background-color: white;
}

.signin-main {
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
  color: white;
  border-radius: 5px;
  background-color: #5e6499;
  outline: none;
}
.forgot-button {
  font-size: 20px;
  height: 50px;
  color: #5e6499;
  border-radius: 5px;
  /*border: solid 1px #5e6499;*/
  text-decoration: underline;
  outline: none;
}
.text1 {
  font-size: 25px;
}
</style>
