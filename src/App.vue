<template>
  <div id="app">
    <router-view />
    <Email />
    <Help />
    <Footer
      v-show="
        !(
          this.$route.path === '/signup' ||
          this.$route.path === '/signin' ||
          this.$route.path === '/mypage' ||
          this.$route.path === '/admin'
        )
      "
    />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Email from "./components/Modal/Email";
import Navbar from "./components/Navbar";
import Help from "./components/Modal/Help";

const blankNav = { template: '<div class="navbar"></div>' };
const blankFooter = { template: '<div class="saseul-footer"></div>' };

export default {
  name: "App",
  components: { Help, Footer, Email, Navbar },
  created() {
    this.checkToken();
  },
  methods: {
    checkToken() {
      this.$store.dispatch("checkToken");
    },
  },
  // created () {
  //   let url = document.location.href.split('/').reverse()[0]
  //   if (router.getMatchedComponents(url).pop() !== undefined &&
  //     router.getMatchedComponents(url)[0].name === 'ErrorPage') {
  //     componentsArr = {
  //       Navbar: blankNav,
  //       'saseul-footer': blankFooter
  //     }
  //     console.log("blank")
  //   } else {
  //     componentsArr = {
  //       Navbar: basicNavbar,
  //       'saseul-footer': basicFooter
  //     }
  //   }
  // }
};
</script>

<style>
* {
  box-sizing: border-box !important;
}
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
