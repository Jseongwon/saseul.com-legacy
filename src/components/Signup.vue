<template>
  <div class="account">
    <account-signup />
  </div>
</template>

<script>
import AccountSignup from "./Account/Signup";

export default {
  name: "Signup",
  components: { AccountSignup },
};
</script>

<style scoped>
@media screen and (min-width: 767px) {
  .nav {
    display: none;
  }
}
</style>
