<template>
  <div class="banner-wrap">
    <div class="banner-box">
      <div class="banner-title">Partners</div>
      <div class="banner-small-box">
        <div class="banner-small-text">with SASEUL Engine</div>
        <button
          class="license-down-btn"
          type="button"
          @click="moveTo('/licensepolicy')"
        >
          <div>
            License Policy &nbsp;<img
              class="img"
              src="../../assets/shape.png"
            />
          </div>
        </button>
        <button
          class="procedure-down-btn"
          type="button"
          @click="$emit('clickProcedure')"
        >
          <div>
            Purchase Procedure &nbsp;<img
              class="img"
              src="../../assets/shape.png"
            />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-banner",
  methods: {
    openPage(page) {
      window.open(page, "_blank");
    },
    moveTo(path) {
      this.$router.push(path);
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
  background-image: url("../../assets/12-copy.png");
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
  height: 25px;
  margin: 7px 8px 0 0;
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
.procedure-down-btn {
  width: 180px;
  height: 25px;
  margin: 7px 0 0 0;
  color: white;
  font-size: 14px;
  border: 1px solid #582a74;
  border-radius: 15px;
  outline: none;
  background-color: #82549d;
  transition: 0.25s ease-in-out;
}

.procedure-down-btn:hover {
  transition: 0.25s ease-in-out;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.license-down-btn {
  width: 140px;
  height: 25px;
  margin: 7px 7px 0 0;
  color: white;
  font-size: 14px;
  border: 1px solid #582a74;
  border-radius: 15px;
  outline: none;
  background-color: #82549d;
  transition: 0.25s ease-in-out;
}
.license-down-btn:hover {
  transition: 0.25s ease-in-out;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

@media screen and (max-width: 480px) {
  .banner-box {
    padding: 0 40px;
  }
}

@media screen and (max-width: 420px) {
  .docs-down-btn {
    word-wrap: break-word;
  }
  .procedure-down-btn {
    word-wrap: break-word;
  }
}
@media screen and (max-width: 1000px) {
  .img {
    display: none;
  }
  .docs-down-btn {
    width: 63px;
    height: 25px;
    font-size: 9px;
    padding: 2px;
  }
  .license-down-btn {
    width: 79px;
    height: 25px;
    font-size: 9px;
    padding: 2px;
  }
  .procedure-down-btn {
    width: 105px;
    height: 25px;
    font-size: 9px;
    padding: 2px;
  }
}
@media screen and (min-width: 1000px) {
  .img {
  }
}
</style>
