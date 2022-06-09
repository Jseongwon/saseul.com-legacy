<template>
  <div class="product-element">
    <div v-b-modal.modal-1 class="product-element-view" @click="checkAuth">
      <img
        class="product-element-image"
        :src="require('../../assets/' + this.image)"
      />
      <!--      <div class="product-element-title">{{ this.name }}</div>-->
      <!--      <ul class="product-element-contents">-->
      <!--        <li v-if="this.contents.split('\n')[0] !== undefined">-->
      <!--          {{ this.contents.split("\n")[0] }}-->
      <!--        </li>-->
      <!--        <li v-if="this.contents.split('\n')[1] !== undefined">-->
      <!--          {{ this.contents.split("\n")[1] }}-->
      <!--        </li>-->
      <!--        <li v-if="this.contents.split('\n')[2] !== undefined">-->
      <!--          {{ this.contents.split("\n")[2] }}-->
      <!--        </li>-->
      <!--        <li v-if="this.contents.split('\n')[3] !== undefined">-->
      <!--          {{ this.contents.split("\n")[3] }}-->
      <!--        </li>-->
      <!--      </ul>-->
      <!--      <div class="product-element-block d-flex">-->
      <!--        <div-->
      <!--          class="product-element-price"-->
      <!--          :class="{ 'product-element-price-change': this.price !== '$0' }"-->
      <!--        ></div>-->
      <!--        <span-->
      <!--          class="product-element-free m-auto d-flex"-->
      <!--          v-if="this.price === '$0'"-->
      <!--        >-->
      <!--          <div class="m-auto">-->
      <!--            <del style="color: grey">-->
      <!--              {{ this.price }}-->
      <!--            </del>-->
      <!--            <span> Free </span>-->
      <!--          </div>-->
      <!--        </span>-->

      <!--              <b-button-->
      <!--                v-b-modal.modal-1-->
      <!--                v-if="this.price !== '$0'"-->
      <!--                @click="checkAuth"-->

      <!--                class="btn button m-auto"-->
      <!--                >Request</b-button-->
      <!--        >-->
      <!--      </div>-->
    </div>
    <!--
    <div class="product-elment-buttonBox-center">
      <div class="product-element-buttonBox">
        <button class="product-element-request">Request</button>
        <div class="product-element-learn" @click="productPopupOn(index, type)" >LearnMore</div>
      </div>
    </div>
    -->
    <div class="bar position-relative">
      <div
        v-show="this.bar"
        style="
          position: absolute;
          border: 1px solid #bfbfbf;
          width: 93vw;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductElement",
  components: {},
  props: ["index", "type", "name", "contents", "price", "image", "bar"],
  computed: {
    isAuth: function () {
      return this.$store.state.userInfo.isAuth;
    },
  },
  data() {
    return {};
  },
  methods: {
    productPopupOn(index, type) {
      this.$emit("productPopupOn", index, type);
    },
    checkAuth() {
      if (!this.isAuth) {
        this.$router.push("/signin");
      }
    },
  },
};
</script>

<style scoped>
.button {
  width: 60%;
  height: 37px;
  border-radius: 5px;
  background-color: #82549d;
  outline: none;
  font-weight: bold;
  font-family: Arial;
  font-size: 18px;
  color: #ffffff;
  outline: none;
}
.product-element {
  display: block;
  margin: 30px auto;
  width: 1152px;
  height: 600px;

  /*border: 1px solid #d2d2d2;*/
  /*border-radius: 5px;*/
  /*background: white;*/

  /*margin: 10px;*/
  /*margin-bottom: 40px;*/
}
.product-element-view {
  padding-left: 20px;
  padding-right: 20px;
}
.product-element-image {
  display: block;
  width: 90%;
  /*height: 100px;*/

  margin: 25px auto;
}
.product-element-title {
  display: block;

  height: 27px;

  /* font-family: "Arial Rounded MT", sans-serif; */
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0px;
  color: #1e1e1e;
}
.product-element-box {
  height: 73px;
}
.product-element-contents {
  display: block;
  height: 100px;
  margin-top: 15px;
  margin-bottom: 0px;
  padding-left: 20px;

  /* font-family: "Arial Rounded MT", sans-serif; */
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 1.5;
  color: #3a3a3a;
}
.product-element-price {
  display: inline-block;

  height: 22px;

  /* font-family: "Arial Rounded MT", sans-serif; */
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0px;
  color: #9d9d9d;

  /*margin-top: 15px;*/
  text-decoration: line-through;
}
.product-element-price-change {
  /* font-family: "Arial Rounded MT", sans-serif; */
  color: #232323;
  text-decoration: none;
}
.product-element-free {
  width: 60%;
  height: 37px;
  border-radius: 5px;
  border: 1px solid #82549d;
  outline: none;
  font-weight: bold;
  font-family: Arial;
  font-size: 18px;
  outline: none;
}
.product-element-buttonBox {
  display: inline-block;

  width: auto;

  padding-left: 13px;
  padding-right: 13px;
}
.product-element-request {
  display: inline-block;
  float: left;

  width: 136px;
  height: 36px;

  margin-top: 30px;

  background: #82549d;
  border: 1px solid #9068a9;
  border-radius: 5px;
  box-sizing: border-box;

  /* font-family: "Arial Rounded MT", sans-serif; */
  font-size: 18px;
  letter-spacing: 0px;
  color: #ffffff;
  cursor: pointer;
  outline: 0;
}
.product-element-learn {
  display: inline-block;
  margin-top: 38px;
  margin-left: 23px;

  /* font-family: "Arial Rounded MT", sans-serif; */
  font-size: 18px;
  letter-spacing: 0px;
  color: #82549d;
  cursor: pointer;
}
.product-element-learn:hover {
  color: cornflowerblue;
  text-decoration: underline;
}
.product-elment-buttonBox-center {
  text-align: center;
}

@media screen and (max-width: 1024px) {
  .product-element {
    width: calc(50% - 20px);
    min-width: 200px;
  }
}
@media screen and (max-width: 1024px) {
  .product-element {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 480px) {
  .product-element {
    margin: 10px 0;
  }
}
@media screen and (min-width: 2437px) {
  .bar {
    display: none;
  }
}
</style>
