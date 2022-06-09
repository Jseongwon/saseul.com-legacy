<template>
  <div style="background-color: #0d161a">
    <div class="footer" @click="moveTo('/contact')">
      <div class="flex-wrap">
        <div
          class="text button-text"
          @click="moveTo('https://artifriends.com')"
        >
          ArtiFriends inc.
        </div>
        <div class="line"></div>
        <div class="text">CEO: Jungwoo Lee</div>
        <div class="line"></div>
        <div class="text">Business Registration No. 658-88-00525</div>
      </div>
      <div class="flex-wrap">
        <div class="text">TEL +82) 31-712-8130</div>
        <div class="line"></div>
        <div class="text">Email help@artifriends.com</div>
        <div class="line web-only"></div>
        <div class="text">
          Location 1908, 19F, 248, Jeongjail-ro, Bundang-gu, Seongnam-si,
          Gyeonggi-do, Korea (13554)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    moveTo(path) {
      if (path === "https://artifriends.com") {
        window.open(path, "_blank");
      } else {
        this.$router.push(path);
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>

<style scoped>
.button-text {
  font-weight: 600;
  cursor: pointer;
}

.footer {
  padding: 40px 20px;
  /*margin: 40px 40px 0;*/
  border-top: 1px solid #a5a5a5;
  font-size: 12px;
  text-align: center;
  color: white;
}

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
}

.text {
  line-height: 1.5;
}

.line {
  flex: none;
  width: 1px;
  margin: 0 5px;
  height: 10px;
  background-color: #2d2d2d;
}

@media screen and (max-width: 841px) {
  .line.web-only {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .footer {
    padding: 20px 10px;
  }
}
</style>
