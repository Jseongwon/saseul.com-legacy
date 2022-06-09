<template>
  <div>
    <Navbar class="position-absolute w-100 p-0" style="z-index: 999" />
    <div style="height: 75px"></div>
    <account-mypage @click="handleEditAccount" v-show="!editButton" />
    <EditAccount v-show="editButton" />
  </div>
</template>

<script>
import AccountMypage from "./Account/Mypage";
import Navbar from "./Navbar";
import EditAccount from "./Account/EditAccount";

export default {
  name: "Mypage",
  components: { EditAccount, Navbar, AccountMypage },
  computed: {
    userInfo: function () {
      return this.$store.state.userInfo;
    },
  },
  created() {
    this.checkAuth();
  },
  data() {
    return {
      editButton: false,
    };
  },
  methods: {
    handleEditAccount() {
      this.editButton = !this.editButton;
    },
    checkAuth() {
      if (!this.userInfo.isAuth) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped></style>
