<template>
  <div class="container-fluid" style="height: 100vh">
    <div class="row h-100">
      <div class="col-3 navbar h-100 p-0">
        <div class="col-12 nav p-0" @click="checkCurrentPage(0)">
          라이센스 사람 추가
        </div>

        <div class="col-12 nav p-0" @click="checkCurrentPage(1)">
          뉴스레터 게시판
        </div>
      </div>
      <div class="col-9 p-0">
        <news-letter v-show="newsLetterPageButton" />
        <add-license v-show="addLicensePageButton" />
      </div>
    </div>
  </div>
</template>

<script>
import NewsLetter from "./NewsLetter";
import AddLicense from "./AddLicense";

export default {
  name: "Admin-Page",
  components: { AddLicense, NewsLetter },
  data() {
    return {
      addLicensePageButton: false,
      newsLetterPageButton: false,
    };
  },
  methods: {
    checkCurrentPage(index) {
      const navList = document.querySelectorAll(".nav");
      for (let i = 0; i < navList.length; i++) {
        navList[i].classList.remove("navclick");
      }
      this.addLicensePageButton = false;
      this.newsLetterPageButton = false;
      if (index === 0) {
        navList[0].classList.add("navclick");
        this.addLicensePageButton = true;
      } else if (index === 1) {
        navList[1].classList.add("navclick");
        this.newsLetterPageButton = true;
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #9d9d9d;
}
.nav {
  cursor: pointer;
}
.navclick {
  background-color: white;
  transition: 0.3s ease-in-out !important;
}
</style>
