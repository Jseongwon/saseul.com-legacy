<template>
  <div class="banner-wrap">
    <div class="banner-box">BaaS</div>
  </div>
</template>

<script>
export default {
  name: "feature-banner",
};
</script>

<style scoped>
.banner-wrap {
  height: 320px;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url("../../assets/back-3.png");
  background-size: cover;
}
.banner-box {
  flex: 1;
  padding: 0 60px;
  max-width: 1024px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin: 45px 0 0 0;
}
@media screen and (max-width: 480px) {
  .banner-box {
    padding: 0 40px;
  }
}
</style>
