<template>
  <div class="banner-wrap">
    <div class="banner-box">
      <div class="banner-title">Detail</div>
      <div class="banner-small-box">
        <div class="banner-small-text">
          SASEUL Consensus Document Full Version
        </div>
        <button
          class="docs-down-btn"
          type="button"
          @click="
            openPage(
              'https://drive.google.com/file/d/1LvVMXSKM-jqUukuM9z1sQjK19ZxqpeSB/view?usp=sharing'
            )
          "
        >
          <img src="../../assets/utility/download.svg" />Download
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  methods: {
    openPage(page) {
      window.open(page, "_blank");
    },
  },
};
</script>

<style scoped>
.banner-wrap {
  height: 320px;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url("../../assets/back-2.png");
  background-size: cover;
}
.banner-box {
  flex: 1;
  padding: 0 60px;
  max-width: 1024px;
  margin: 45px 0 0 0;
}
.banner-title {
  font-size: 30px;
  font-weight: bold;
  color: white;
}
.banner-small-box {
  flex: 1;
}
.banner-small-text {
  margin: 15px 0;
  color: white;
  font-size: 16px;
}
.docs-down-btn {
  width: 130px;
  height: 30px;
  margin: 7px 0;
  color: white;
  font-size: 14px;
  border: 1px solid white;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  transition: 0.25s ease-in-out;
}
.docs-down-btn:hover {
  transition: 0.25s ease-in-out;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.docs-down-btn img {
  width: 11px;
  height: 11px;
  margin-right: 3px;
}
@media screen and (max-width: 480px) {
  .banner-box {
    padding: 0 40px;
  }
}
</style>
