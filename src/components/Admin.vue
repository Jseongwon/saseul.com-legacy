<template>
  <AdminPage />
</template>

<script>
import AdminPage from "./Admin/Admin-Page";
export default {
  name: "Admin",
  components: { AdminPage },
  computed: {
    userInfo: function () {
      return this.$store.state.userInfo;
    },
  },
  created() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      if (
        !(
          this.userInfo.email === "admin@artifriends.com" &&
          this.userInfo.isAuth
        )
      ) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped></style>
