<template>
  <div class="error">
    <div>
      <div class="error-box">?</div>
      <br />
      Page Not Found<br /><br />
      <router-link to="/"> go back to main page </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style scoped>
.error {
  padding: 40px 20px 30px 20px;
  max-width: 1024px;
  margin: 0 auto;

  text-align: center;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.error-box {
  width: 120px;
  height: 120px;
  border: 2px dashed #82549d;
  background-color: #fff1fd;
  color: #82549d;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 36px;
  font-weight: 700;
}
@media screen and (max-width: 768px) {
  .error {
    height: 65vh;
  }
}
</style>
