<template>
  <div>
    <div class="container-fluid edit edit-background mx-auto">
      <div class="row" style="height: 883px">
        <div class="p-5 pl-5 col-9 edit-main" style="margin: auto">
          <div
            class="ml-5 mb-4 pl-1"
            style="font-size: 24px; font-weight: bold; color: black"
          >
            EDIT ACCOUNT
          </div>

          <form class="p-2" @submit.prevent="edit">
            <div class="col-12 input-box">
              <label class="col-2 ml-3" for="email" style="color: black"
                >Email *</label
              >
              <input
                class="col-4 ml-3 input"
                type="email"
                id="email"
                :placeholder="userInfo.email"
                readonly="true"
              />
              <!--              <span class="col-3">이메일 주소가 사용자 이름입니다.</span>-->
            </div>
            <div class="col-12 input-box">
              <label class="col-2 ml-3" for="password" style="color: black"
                >Password *</label
              >
              <input
                class="col-4 ml-3 input"
                v-model="password"
                @keyup="checkPassword"
                type="password"
                id="password"
              />
              <span class="col-1" style="color: red; font-size: 12px">{{
                validationPassword
              }}</span>
            </div>
            <div class="col-12 input-box">
              <label
                class="col-2 ml-3"
                for="re-password"
                style="font-size: 14px; color: black"
                >Re-enter Password *</label
              >
              <input
                class="col-4 ml-3 input"
                type="password"
                v-model="passwordConfim"
                @keyup="checkReEnterPassword"
                id="re-password"
              />
              <span class="col-3" style="color: red; font-size: 15px">{{
                validationReEnterPassword
              }}</span>
            </div>
            <hr />
            <div class="col-12 input-box">
              <label class="col-2 ml-3" for="country" style="color: black"
                >Country *</label
              >
              <select
                class="col-4 ml-3 select-box"
                v-model="country"
                id="country"
              >
                <option v-for="c in countryList" :value="c" :key="c">
                  {{ c }}
                </option>
              </select>
            </div>
            <div class="col-12 input-box">
              <label class="col-2 ml-3" for="name" style="color: black"
                >Name *</label
              >
              <input
                class="col-4 ml-3 input"
                v-model="name"
                type="text"
                id="name"
              />
            </div>
            <div class="col-12 input-box">
              <label class="col-2 ml-3" for="position" style="color: black"
                >Position *</label
              >
              <input
                class="col-4 ml-3 input"
                v-model="position"
                type="text"
                id="position"
              />
            </div>
            <div class="col-12 input-box">
              <label class="col-2 ml-3" for="phone" style="color: black"
                >Phone *</label
              >
              <input
                class="col-4 ml-3 input"
                @keyup="checkPhone"
                v-model="phone"
                type="text"
                id="phone"
              />
              <span class="col-3" style="color: red">{{
                validationPhone
              }}</span>
            </div>
            <div class="col-12 input-box">
              <label class="col-sm-2 ml-3" for="company" style="color: black"
                >Company *</label
              >
              <input
                class="col-4 ml-3 input"
                v-model="company"
                type="text"
                id="company"
              />
            </div>
            <div class="col-12 input-box">
              <label class="col-sm-2 ml-3" for="address" style="color: black"
                >Address *</label
              >
              <input
                class="col-4 ml-3 input"
                v-model="address"
                type="text"
                id="address"
              />
            </div>
            <input
              type="submit"
              class="col-11 mt-4 p-1 edit-button btn"
              value="Edit"
            />
          </form>
        </div>
      </div>
    </div>

    <div class="container-fluid mobile-edit mobile-edit-background">
      <div>
        <div class="edit-main" style="margin: auto">
          <div class="my-4" style="font-size: 24px; font-weight: bold">
            EDIT ACCOUNT
          </div>

          <form class="" @submit.prevent="edit">
            <div class="input-box">
              <div>Email</div>

              <div class="d-flex">
                <input
                  class="col-12 input mx-auto"
                  type="email"
                  :placeholder="userInfo.email"
                  readonly="true"
                />
              </div>
            </div>
            <div class="input-box mt-3">
              <div>Password</div>
              <div class="d-flex">
                <input
                  class="col-12 input mx-auto"
                  v-model="password"
                  @keyup="checkPassword"
                  type="password"
                />
              </div>
              <div style="color: red; font-size: 12px">
                {{ validationPassword }}
              </div>
            </div>
            <div class="input-box">
              <div style="font-size: 14px">Re-enter Password</div>
              <div class="d-flex">
                <input
                  class="col-12 input mx-auto"
                  type="password"
                  v-model="passwordConfim"
                  @keyup="checkReEnterPassword"
                />
              </div>
              <div style="color: red; font-size: 15px">
                {{ validationReEnterPassword }}
              </div>
            </div>
            <hr />
            <div class="input-box">
              <div>Country</div>
              <div class="d-flex">
                <select class="col-12 select-box mx-auto" v-model="country">
                  <option v-for="c in countryList" :value="c" :key="c">
                    {{ c }}
                  </option>
                </select>
              </div>
            </div>
            <div class="input-box mt-3">
              <div>Name</div>
              <div class="d-flex">
                <input
                  class="col-12 input mx-auto"
                  v-model="name"
                  type="text"
                />
              </div>
            </div>
            <div class="input-box mt-3">
              <div>Position</div>
              <div class="d-flex">
                <input
                  class="col-12 input mx-auto"
                  v-model="position"
                  type="text"
                />
              </div>
            </div>
            <div class="input-box mt-3">
              <div class="">Phone</div>
              <div class="d-flex">
                <input
                  class="col-12 input mx-auto"
                  @keyup="checkPhone"
                  v-model="phone"
                  type="text"
                />
              </div>

              <div style="color: red">{{ validationPhone }}</div>
            </div>
            <div class="input-box">
              <div>Company</div>
              <div class="d-flex">
                <input
                  class="col-12 input mx-auto"
                  v-model="company"
                  type="text"
                />
              </div>
            </div>
            <div class="input-box mt-3">
              <div>Address</div>
              <div class="d-flex">
                <input
                  class="col-12 input mx-auto"
                  v-model="address"
                  type="text"
                />
              </div>
            </div>
            <div class="d-flex mt-4">
              <input
                type="submit"
                class="col-12 mobile-edit-button btn mx-auto"
                value="Edit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNames } from "country-list";
import CryptoJS from "crypto-js";
import store from "../../vuex/store";

export default {
  name: "EditAccount",
  data() {
    return {
      email: "",
      password: "",
      passwordConfim: "",
      country: "",
      name: "",
      position: "",
      phone: "",
      company: "",
      address: "",
      checked: [],
      validationPassword: "영문 대소문자/숫자/특수문자 중 2가지 이상 조합",
      validationReEnterPassword: "",
      validationPhone: "ex) 123-4567-8910",
      validationAddress: "",
    };
  },
  computed: {
    countryList: function () {
      return getNames();
    },
    userInfo: function () {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    moveTo(location) {
      this.$router.push(location);
    },
    checkPhone() {
      let hp = this.phone;
      if (/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(hp)) {
        this.validationPhone = "";
        return true;
      }
      this.validationPhone = "ex) 123-4567-8910";
      return false;
    },
    checkReEnterPassword() {
      if (this.password !== this.passwordConfim) {
        this.validationReEnterPassword = "비밀번호가 일치하지 않습니다.";
        return false;
      }
      this.validationReEnterPassword = "";
      return true;
    },
    checkPassword() {
      let pw = this.password;
      let num = pw.search(/[0-9]/g);
      let eng = pw.search(/[a-z]/gi);
      let spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

      if (pw.search(/\s/) != -1) {
        this.validationPassword = "비밀번호는 공백 없이 입력해주세요.";
        this.checkReEnterPassword();
        return false;
      } else if (
        (num < 0 && eng < 0) ||
        (eng < 0 && spe < 0) ||
        (spe < 0 && num < 0)
      ) {
        this.validationPassword =
          "영문 대소문자/숫자/특수문자 중 2가지 이상 조합";
        this.checkReEnterPassword();
        return false;
      } else if (pw.length < 10 || pw.length > 20) {
        this.checkReEnterPassword();
        this.validationPassword = "10자리 ~ 20자리 이내로 입력해주세요.";
        return false;
      } else {
        this.checkReEnterPassword();
        this.validationPassword = "";
        return true;
      }
    },

    edit() {
      if (
        this.password === "" ||
        this.passwordConfim === "" ||
        this.name === "" ||
        this.country === "" ||
        this.position === "" ||
        this.phone === "" ||
        this.company === "" ||
        this.address === "" ||
        !this.checkPhone()
      ) {
        alert("입력 정보 확인");
        return;
      }
      if (!this.checkReEnterPassword()) {
        return;
      }
      let encryptPassword = CryptoJS.AES.encrypt(
        this.password,
        "saseul"
      ).toString();

      const data = {
        url: "info",
        method: "put",
        userId: this.userInfo.id,
        email: this.userInfo.email,
        password: encryptPassword,
        name: this.name,
        country: this.country,
        position: this.position,
        phone: this.phone,
        company: this.company,
        address: this.address,
      };
      store.dispatch("user", data);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .edit {
    display: none;
  }
}
@media screen and (min-width: 1000px) {
  .mobile-edit {
    display: none;
  }
}
.edit-background {
  min-width: 1100px;
  max-width: 1180px;
  height: 883px;
}
.edit-main {
  height: 883px;
  /*padding-left: 20px;*/
  background-color: white;
}
.input {
  border-radius: 5px;
  border: 1px solid grey;
  margin-bottom: 10px;
}
.edit-button {
  font-size: 18px;
  color: white;
  margin-left: 32px;
  height: 38px;
  font-weight: bold;
  font-family: AppleSDGothicNeo;
  border-radius: 5px;
  background-color: #82549d;
}
.mobile-edit-button {
  font-size: 18px;
  color: white;
  height: 38px;
  font-weight: bold;
  font-family: AppleSDGothicNeo;
  border-radius: 5px;
  background-color: #82549d;
}
.select-box {
  border-radius: 5px;
  border: 1px solid grey;
  margin-bottom: 10px;
  height: 30px;
  padding: 2px;
}
</style>
