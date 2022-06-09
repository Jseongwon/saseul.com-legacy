<template>
  <div class="container-fluid p-0">
    <div class="row info m-0">
      <div class="col-12 col-md-3 h-100" style="background-color: #f9f9f9">
        <div class="ml-5 my-5 h-100">
          <div style="font-size: 30px" class="mx-auto">
            {{ userInfo.name }}
          </div>
          <div style="font-size: 20px" class="my-2">{{ userInfo.country }}</div>
          <div style="font-size: 20px" class="mb-2">
            {{ userInfo.position }}
          </div>
          <div style="font-size: 20px" class="mb-2">{{ userInfo.phone }}</div>
          <div style="font-size: 20px" class="mb-2">{{ userInfo.company }}</div>
          <div style="font-size: 14px; color: #6c6c6c" class="mb-2">
            {{ userInfo.address }}
          </div>
          <div>
            <input
              class="button btn my-3 p-0"
              type="button"
              style="color: grey"
              value="Edit Account"
              @click="$emit('click')"
            />
          </div>
          <div>
            <input
              class="button btn p-0"
              type="button"
              value="Logout"
              @click="handleSignOut"
              style="color: grey"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-9">
        <div class="pl-5 pt-4 h-100">
          <div class="my-2" style="font-size: 20px">구입목록</div>
          <div
            class="mb-4 col-10 h-50 p-0"
            style="border: 1px solid darkgrey; overflow-y: auto"
          >
            <ul class="list-group" v-show="purchaseList.length">
              <li
                class="list-group-item p-0"
                :key="i"
                v-for="(product, i) in purchaseList"
              >
                <div style="background-color: #f5f5f5; padding: 25px">
                  <div>
                    <img
                      style="width: 36px; height: 36px"
                      :src="
                        require('../../assets/product-pic/' +
                          product.productInfo._image)
                      "
                    />
                  </div>
                  <div class="row">
                    <div class="col-10 p-0">
                      <div style="font-size: 18px">
                        {{ product.productInfo._name }}
                      </div>
                      <div style="font-size: 13px">
                        {{ product.productInfo._contents }}
                      </div>
                    </div>
                    <div class="col-2" style="font-size: 14px">
                      {{ product.purchaseDate }}
                    </div>
                  </div>
                </div>
                <div style="padding: 25px">
                  <div class="row">
                    <div class="col-6 p-0" style="font-size: 15px">
                      License key for SASEUL
                    </div>
                    <div class="col-6 text-right" style="font-size: 13px">
                      <span class="license"> {{ product.licenseNumber }} </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div
              v-show="purchaseList.length < 1"
              style="
                height: 100%;
                width: 100%;
                text-align: center;
                line-height: 100px;
                background-color: #f9f9f9;
              "
            >
              구입한 내역이 없습니다.
            </div>
          </div>
          <!--          <div class="my-2" style="font-size: 20px">문의내용</div>-->
          <!--          <div class="mb-4 col-10 h-25" style="border: 1px solid grey"></div>-->
          <!--          <div class="my-2" style="font-size: 20px">?</div>-->
          <!--          <div class="col-10 h-25" style="border: 1px solid grey"></div>-->
        </div>
      </div>
    </div>

    <div class="mobile-info">
      <div class="mobile-info-background">
        <div class="row mt-4 m-0">
          <div class="col-8 pl-4">
            <div class="name pt-3">{{ userInfo.name }}</div>
            <div class="email mb-3">{{ userInfo.email }}</div>
          </div>
          <div
            class="col-4 m-auto"
            @click="$emit('click')"
            style="
              font-size: 13px;
              color: #a3a3a3;
              text-align: center;
              cursor: pointer;
            "
          >
            Edit Account
          </div>
        </div>
        <div
          class="m-auto"
          style="width: 95%; border-bottom: 1px solid #d5d5d5"
        ></div>
        <div class="col pl-4">
          <div class="row mt-3">
            <div class="col mb-1" style="font-size: 13px; color: #a3a3a3">
              {{ userInfo.country }}
            </div>
            <div class="col" style="font-size: 13px; color: #a3a3a3">
              {{ userInfo.position }}
            </div>
            <div class="col-4" style="font-size: 13px; color: #a3a3a3">
              {{ userInfo.phone }}
            </div>
          </div>
          <div
            class="col pl-0"
            style="font-size: 13px; color: #a3a3a3; height: 30px"
          >
            {{ userInfo.address }}
          </div>
        </div>
      </div>
      <div style="border-bottom: 1px solid #d5d5d5"></div>
      <div>
        <div class="pl-4 pt-4" style="height: 900px">
          <div class="my-2" style="font-size: 15px; font-weight: bold">
            구입목록
          </div>
          <div
            class="mb-4 col-11 h-25 p-0"
            style="border: 1px solid darkgrey; overflow-y: auto"
          >
            <ul class="list-group" v-show="purchaseList.length > 0">
              <li
                class="list-group-item p-0"
                :key="i"
                v-for="(product, i) in purchaseList"
              >
                <div style="background-color: #f5f5f5; padding: 30px">
                  <div class="row">
                    <img
                      style="width: 36px; height: 36px"
                      :src="
                        require('../../assets/product-pic/' +
                          product.productInfo._image)
                      "
                    />
                    <div
                      style="font-size: 18px; margin-left: 10px; padding: 4px"
                    >
                      {{ product.productInfo._name }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-10 p-0">
                      <div style="font-size: 13px">
                        {{ product.productInfo._contents }}
                      </div>
                    </div>
                    <div
                      class="col-2 p-0"
                      style="font-size: 10px; text-align: center"
                    >
                      {{ product.purchaseDate }}
                    </div>
                  </div>
                </div>
                <div style="padding: 15px">
                  <div class="">
                    <div
                      style="
                        font-size: 13px;
                        font-weight: bold;
                        margin-bottom: 5px;
                      "
                    >
                      License key for SASEUL
                    </div>
                    <div style="font-size: 13px">
                      <span class="license"> {{ product.licenseNumber }} </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div
              v-show="purchaseList.length < 1"
              style="
                height: 100%;
                width: 100%;
                text-align: center;
                line-height: 100px;
                background-color: #f9f9f9;
              "
            >
              구입한 내역이 없습니다.
            </div>
          </div>
          <!--          <div class="my-2" style="font-size: 20px">문의내용</div>-->
          <!--          <div class="mb-4 col-10 h-25" style="border: 1px solid grey"></div>-->
          <!--          <div class="my-2" style="font-size: 20px">?</div>-->
          <!--          <div class="col-10 h-25" style="border: 1px solid grey"></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account-mypage",
  computed: {
    userInfo: function () {
      return this.$store.state.userInfo;
    },
    purchaseList: function () {
      return this.$store.getters.purchaseList;
    },
  },
  methods: {
    handleSignOut() {
      const data = {
        url: "signout",
        userId: this.$store.state.userInfo.id,
      };
      this.$store.dispatch("account", data);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .info {
    display: none;
  }
}
@media screen and (min-width: 767px) {
  .mobile-info {
    display: none;
  }
}
.info {
  /*background-color: #f9f9f9;*/
  height: 953px;
  font-weight: bold;
}
.button {
  outline: none;
}
.license {
  background-color: grey;
  border-radius: 2px;
  opacity: 0.5;
  color: grey;
}
.license:hover {
  color: black;
}
.name {
  font-size: 24px;
  font-weight: bold;
}
.mobile-info-background {
  background-color: #f9f9f9;
}
</style>
