<template>
  <div class="account position-relative">
    <Navbar class="position-absolute w-100 p-0 nav" style="z-index: 999" />
    <account-signin @click="handleForgotPassword" v-show="!forgotButton" />
    <ForgotPassword @click="handleForgotPassword" v-show="forgotButton" />
  </div>
</template>

<script>
import AccountSignin from "./Account/Signin";
import ForgotPassword from "./Account/ForgotPassword";
import Navbar from "./Navbar";

export default {
  name: "Signin",
  components: { Navbar, ForgotPassword, AccountSignin },
  data() {
    return {
      forgotButton: false,
    };
  },
  methods: {
    handleForgotPassword() {
      this.forgotButton = !this.forgotButton;
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 767px) {
  .nav {
    display: none;
  }
}
</style>
