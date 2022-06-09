<template>
  <div class="position-relative">
    <navbar
      class="position-absolute w-100 p-0 nav"
      style="z-index: 999"
    ></navbar>
    <div class="blank" style="height: 75px"></div>

    <div class="signup" style="object-fit: cover">
      <div class="container-fluid signup-background mx-auto">
        <div class="row w-100" style="height: 1190px">
          <div class="p-5 pl-5 col-10 signup-main" style="margin: auto">
            <div class="ml-5 mb-2" style="font-size: 24px; font-weight: bold">
              Create SASEUL
            </div>
            <p class="ml-5">
              Do you already have an account?
              <a class="col" href="#" @click="moveTo('/signin')">Login</a>
            </p>
            <form class="p-2" @submit.prevent="join">
              <div class="col-12 input-box">
                <label class="col-2 ml-3" for="email">Email *</label>
                <input
                  class="col-4 ml-3 input"
                  v-model="email"
                  type="email"
                  id="email"
                />
                <span class="col-3">이메일 주소가 사용자 이름입니다.</span>
              </div>
              <div class="col-12 input-box">
                <label class="col-2 ml-3" for="password">Password *</label>
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
                  style="font-size: 14px"
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
                <label class="col-2 ml-3" for="country">Country *</label>
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
                <label class="col-2 ml-3" for="name">Name *</label>
                <input
                  class="col-4 ml-3 input"
                  v-model="name"
                  type="text"
                  id="name"
                />
              </div>
              <div class="col-12 input-box">
                <label class="col-2 ml-3" for="position">Position *</label>
                <input
                  class="col-4 ml-3 input"
                  v-model="position"
                  type="text"
                  id="position"
                />
              </div>
              <div class="col-12 input-box">
                <label class="col-2 ml-3" for="phone">Phone *</label>
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
                <label class="col-sm-2 ml-3" for="company">Company *</label>
                <input
                  class="col-4 ml-3 input"
                  v-model="company"
                  type="text"
                  id="company"
                />
              </div>
              <div class="col-12 input-box">
                <label
                  class="col-sm-2 ml-3"
                  for="address"
                  style="font-size: 12px"
                  >Company Address *</label
                >
                <input
                  class="col-4 ml-3 input"
                  v-model="address"
                  type="text"
                  id="address"
                />
              </div>
              <hr />
              <div class="col-12">
                <div class="col-2 ml-3 font-weight-bold">전체 동의</div>
              </div>

              <div class="all-agree pl-4" style="width: 90%">
                <div class="row h-100">
                  <div class="pr-0 h-100 d-flex" style="width: 3%">
                    <input
                      type="checkbox"
                      class="mobile-check-box m-auto"
                      v-on:click="checkAll(0)"
                    />
                  </div>
                  <div class="col-10 my-auto pl-1" style="padding-left: 1%">
                    이용약관 및 개인정보수집 및 이용, 정보수신에 모두
                    동의합니다.
                  </div>
                </div>
              </div>
              <div class="agree" style="width: 90%">
                <div>
                  <div class="m-3">
                    <input
                      type="checkbox"
                      class="children-box"
                      @click="validationCheckAll(0)"
                    />본인은 SASEUL이 본인의 개인 정보(특히 성, 이름, 이메일
                    주소, 전화 번호, 주소, 우편 번호, 회사 이름, 암호, 쿠키)를
                    다음 목적으로 수집하여 사용하는 데 동의합니다.
                  </div>
                  <div class="ml-4" style="font-size: 12px">
                    (i) SASEUL에 대한 귀하의 요청 및 질의에 소통하고 대응 (ii)
                    우리 사이트에서의 및 그 기술적 및 기능적 관리를 위한 기능을
                    제공 (iii) 거래의 관여 및 처리 (iv) SASEUL 온라인 커뮤니티
                    참여 허용 (v) 제품 다운로드를 관리하고 라이선스 준수 확인
                    (vi) SASEUL 웹 사이트의 사용을 용이하게 하며 품질을
                    향상시키고 콘텐츠를 선택 (vii) SASEUL 제품, 서비스 및 경험
                    개선 (viii) 제품 경고 및 업데이트 알림 제공 (ix) 당사 직원,
                    웹 사이트, 시설 및 운영 보호; 및 (x) SASEUL의 법적 요건과
                    전사 처리 준수.
                  </div>
                  <div class="m-3">
                    또한 SASEUL이 다음과 같은 범위에서 개인 정보를 보유할 수
                    있음에 동의합니다.
                  </div>
                  <div class="ml-4" style="font-size: 12px">
                    (a) 본인 계정이 활성 상태인 동안 (b) 제품이나 서비스를
                    제공하기 위해 필요한 경우 (SASEUL 잡지 또는 Profit 잡지를
                    포함한 우리의 뉴스레터 및 블로그에 본인이 등록한 경우,
                    본인의 가입 데이터는 본인이 SASEUL의 배포 리스트에 등재되어
                    있는 동안 유지될 것입니다 SASEUL 채팅을 통해 본인이 SASEUL에
                    접촉한 경우, SASEUL은 채팅 종료 90일 후에 모든 채팅 내용을
                    삭제할 것입니다 (c) 상기 명시된 목적을 위해 필요한 경우 (d)
                    법적 의무를 준수하기 위해 필요한 경우(예: 옵트아웃 이행),
                    분쟁 해결 및 계약 이행 또는 (e) 법률로 허용되는
                    범위까지(본인의 옵트아웃 기본 설정을 유지하기 위해 필요한
                    개인 정보는 20년 동안 또는 해당 법률을 준수하기 위해 필요한
                    만큼 더 긴 기간 동안 유지될 것입니다).
                  </div>
                  <div class="m-3">
                    SASEUL의 개인 정보 수집 및 활용에 대한 자세한 내용은 SASEUL
                    개인정보보호 정책에서 확인할 수 있음을 이해합니다.
                  </div>
                </div>
                <div class="m-3">
                  <input
                    type="checkbox"
                    class="children-box"
                    @click="validationCheckAll(1)"
                  />본인은 SASEUL이 위와 같이 수집된 본인의 개인 정보를 사용 및
                  보유를 목적으로 자회사에 제공할 수 있음에 동의합니다. 자회사
                  목록은 <a href="#">여기</a>에서 확인할 수 있습니다.
                </div>
                <div class="m-3">
                  <input
                    type="checkbox"
                    class="children-box"
                    @click="validationCheckAll(2)"
                  />본인은 SASEUL이 본인의 개인 정보를 해외 자회사 및 SASEUL의
                  지사가 위치한 국가의 대리자에게 전송할 수 있음에 동의합니다.
                  개인 정보 수집 후 귀하가 온라인 멤버십을 신청하는 경우, 그러한
                  개인 정보가 통신 네트워크 또는 기타 전자 기반 수단을 통해
                  전송될 수 있습니다. 자회사 목록은 <a href="#">여기</a> 에서
                  확인할 수 있습니다. 대리인 및 위임된 업무의 범위는
                  <a href="#">여기</a> 에서 확인할 수 있습니다. 이들 국가 목록은
                  여기에서 확인할 수 있습니다. 본인은 SASEUL이 상기 사항에 따라
                  SASEUL을 대신하여 직무를 수행하는 서드 파티 서비스 제공 업체에
                  본인의 개인 정보를 처리하도록 위임할 수 있음에 동의합니다.
                  이러한 대리인 및 위임된 업무의 범위는 <a href="#">여기</a>에서
                  확인할 수 있습니다.
                </div>
                <div class="m-3">
                  귀하는 상기 명시된 개인 정보의 수집, 전송 및 활용을 거부할
                  권리가 있습니다. 단, 개인 정보의 수집, 전송 및 활용을 거부하는
                  경우 SASEUL의 온라인 멤버십 가입이 불가능하거나 SASEUL이
                  제공하는 다양한 혜택을 받을 수 없습니다.
                </div>
              </div>
              <div class="join-box" style="width: 90%">
                <input
                  type="submit"
                  class="join btn w-100 m-auto"
                  value="Join"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-signup">
      <div class="container-fluid mobile-edit mobile-edit-background">
        <div>
          <div class="edit-main" style="margin: auto">
            <div class="my-4" style="font-size: 24px; font-weight: bold">
              Create SASEUL
            </div>

            <form class="" @submit.prevent="join">
              <div class="input-box">
                <div>Email</div>

                <div class="d-flex">
                  <input
                    class="col-12 input mx-auto"
                    type="email"
                    v-model="email"
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

              <div style="font-weight: bold; margin-top: 10px">전체 동의</div>

              <div class="all-agree d-flex">
                <div class="row col-12 m-auto p-0">
                  <div class="col-1 d-flex p-0">
                    <input
                      type="checkbox"
                      class="check-box m-auto"
                      v-on:click="checkAll(1)"
                    />
                  </div>
                  <div class="col" style="padding-left: 1%; font-size: 10px">
                    이용약관 및 개인정보수집 및 이용, 정보수신에 모두
                    동의합니다.
                  </div>
                </div>
              </div>

              <div class="col-12 agree">
                <div>
                  <div class="m-3">
                    <input
                      type="checkbox"
                      class="children-box"
                      @click="validationCheckAll(3)"
                    />본인은 SASEUL이 본인의 개인 정보(특히 성, 이름, 이메일
                    주소, 전화 번호, 주소, 우편 번호, 회사 이름, 암호, 쿠키)를
                    다음 목적으로 수집하여 사용하는 데 동의합니다.
                  </div>
                  <div class="ml-4" style="font-size: 12px">
                    (i) SASEUL에 대한 귀하의 요청 및 질의에 소통하고 대응 (ii)
                    우리 사이트에서의 및 그 기술적 및 기능적 관리를 위한 기능을
                    제공 (iii) 거래의 관여 및 처리 (iv) SASEUL 온라인 커뮤니티
                    참여 허용 (v) 제품 다운로드를 관리하고 라이선스 준수 확인
                    (vi) SASEUL 웹 사이트의 사용을 용이하게 하며 품질을
                    향상시키고 콘텐츠를 선택 (vii) SASEUL 제품, 서비스 및 경험
                    개선 (viii) 제품 경고 및 업데이트 알림 제공 (ix) 당사 직원,
                    웹 사이트, 시설 및 운영 보호; 및 (x) SASEUL의 법적 요건과
                    전사 처리 준수.
                  </div>
                  <div class="m-3">
                    또한 SASEUL이 다음과 같은 범위에서 개인 정보를 보유할 수
                    있음에 동의합니다.
                  </div>
                  <div class="ml-4" style="font-size: 12px">
                    (a) 본인 계정이 활성 상태인 동안 (b) 제품이나 서비스를
                    제공하기 위해 필요한 경우 (SASEUL 잡지 또는 Profit 잡지를
                    포함한 우리의 뉴스레터 및 블로그에 본인이 등록한 경우,
                    본인의 가입 데이터는 본인이 SASEUL의 배포 리스트에 등재되어
                    있는 동안 유지될 것입니다 SASEUL 채팅을 통해 본인이 SASEUL에
                    접촉한 경우, SASEUL은 채팅 종료 90일 후에 모든 채팅 내용을
                    삭제할 것입니다 (c) 상기 명시된 목적을 위해 필요한 경우 (d)
                    법적 의무를 준수하기 위해 필요한 경우(예: 옵트아웃 이행),
                    분쟁 해결 및 계약 이행 또는 (e) 법률로 허용되는
                    범위까지(본인의 옵트아웃 기본 설정을 유지하기 위해 필요한
                    개인 정보는 20년 동안 또는 해당 법률을 준수하기 위해 필요한
                    만큼 더 긴 기간 동안 유지될 것입니다).
                  </div>
                  <div class="m-3">
                    SASEUL의 개인 정보 수집 및 활용에 대한 자세한 내용은 SASEUL
                    개인정보보호 정책에서 확인할 수 있음을 이해합니다.
                  </div>
                </div>
                <div class="m-3">
                  <input
                    type="checkbox"
                    class="children-box"
                    @click="validationCheckAll(4)"
                  />본인은 SASEUL이 위와 같이 수집된 본인의 개인 정보를 사용 및
                  보유를 목적으로 자회사에 제공할 수 있음에 동의합니다. 자회사
                  목록은 <a href="#">여기</a>에서 확인할 수 있습니다.
                </div>
                <div class="m-3">
                  <input
                    type="checkbox"
                    class="children-box"
                    @click="validationCheckAll(5)"
                  />본인은 SASEUL이 본인의 개인 정보를 해외 자회사 및 SASEUL의
                  지사가 위치한 국가의 대리자에게 전송할 수 있음에 동의합니다.
                  개인 정보 수집 후 귀하가 온라인 멤버십을 신청하는 경우, 그러한
                  개인 정보가 통신 네트워크 또는 기타 전자 기반 수단을 통해
                  전송될 수 있습니다. 자회사 목록은 <a href="#">여기</a> 에서
                  확인할 수 있습니다. 대리인 및 위임된 업무의 범위는
                  <a href="#">여기</a> 에서 확인할 수 있습니다. 이들 국가 목록은
                  여기에서 확인할 수 있습니다. 본인은 SASEUL이 상기 사항에 따라
                  SASEUL을 대신하여 직무를 수행하는 서드 파티 서비스 제공 업체에
                  본인의 개인 정보를 처리하도록 위임할 수 있음에 동의합니다.
                  이러한 대리인 및 위임된 업무의 범위는 <a href="#">여기</a>에서
                  확인할 수 있습니다.
                </div>
                <div class="m-3">
                  귀하는 상기 명시된 개인 정보의 수집, 전송 및 활용을 거부할
                  권리가 있습니다. 단, 개인 정보의 수집, 전송 및 활용을 거부하는
                  경우 SASEUL의 온라인 멤버십 가입이 불가능하거나 SASEUL이
                  제공하는 다양한 혜택을 받을 수 없습니다.
                </div>
              </div>

              <div class="d-flex mt-4 mb-5">
                <input
                  type="submit"
                  class="col-12 mobile-join-button btn mx-auto"
                  value="Join"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../vuex/store";
import CryptoJS from "crypto-js";
import { getNames } from "country-list";
import Navbar from "../Navbar";

export default {
  name: "account-signup",
  components: { Navbar },
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
    validationCheckAll(index) {
      const allCheckBox = document.querySelector(".check-box");
      const allMobilecheckBox = document.querySelector(".mobile-check-box");
      const checkBoxes = document.querySelectorAll(".children-box");

      if (index === 0) {
        if (checkBoxes[0].checked) {
          checkBoxes[3].checked = true;
        } else {
          checkBoxes[3].checked = false;
        }
      } else if (index === 1) {
        if (checkBoxes[1].checked) {
          checkBoxes[4].checked = true;
        } else {
          checkBoxes[4].checked = false;
        }
      } else if (index === 2) {
        if (checkBoxes[2].checked) {
          checkBoxes[5].checked = true;
        } else {
          checkBoxes[5].checked = false;
        }
      } else if (index === 3) {
        if (checkBoxes[3].checked) {
          checkBoxes[0].checked = true;
        } else {
          checkBoxes[0].checked = false;
        }
      } else if (index === 4) {
        if (checkBoxes[4].checked) {
          checkBoxes[1].checked = true;
        } else {
          checkBoxes[1].checked = false;
        }
      } else if (index === 5) {
        if (checkBoxes[5].checked) {
          checkBoxes[2].checked = true;
        } else {
          checkBoxes[2].checked = false;
        }
      }

      for (let i = 0; i < checkBoxes.length; i++) {
        if (!checkBoxes[i].checked) {
          allCheckBox.checked = false;
          allMobilecheckBox.checked = false;
          return;
        }
      }
      allCheckBox.checked = true;
      allMobilecheckBox.checked = true;
    },
    checkAll(index) {
      const allCheckBox = document.querySelector(".check-box");
      const allMobilecheckBox = document.querySelector(".mobile-check-box");
      const checkBoxes = document.querySelectorAll(".children-box");

      if (index === 1) {
        if (allCheckBox.checked) {
          allMobilecheckBox.checked = true;
          for (let i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].checked = true;
          }
        } else {
          allMobilecheckBox.checked = false;
          for (let i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].checked = false;
          }
        }
      } else {
        if (allMobilecheckBox.checked) {
          allCheckBox.checked = true;
          for (let i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].checked = true;
          }
        } else {
          allCheckBox.checked = false;
          for (let i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].checked = false;
          }
        }
      }
    },
    join() {
      const checkBoxes = document.querySelectorAll(".children-box");

      if (
        this.email === "" ||
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

      for (let i = 0; i < checkBoxes.length; i++) {
        if (!checkBoxes[i].checked) {
          alert("체크박스 확인");
          return;
        }
      }
      let encryptPassword = CryptoJS.AES.encrypt(
        this.password,
        "saseul"
      ).toString();

      const data = {
        url: "signup",
        email: this.email,
        password: encryptPassword,
        name: this.name,
        country: this.country,
        position: this.position,
        phone: this.phone,
        company: this.company,
        address: this.address,
      };
      store.dispatch("account", data);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .signup {
    display: none;
  }
}
@media screen and (min-width: 1000px) {
  .mobile-signup {
    display: none;
  }
  .nav {
    display: none;
  }
  .blank {
    display: none;
  }
}
.signup {
  background-image: url("../../assets/mask.png");
}
.signup-background {
  background-image: url("../../assets/group-23.png");
}
.signup-main {
  max-width: 980px;
  padding-left: 20px;
  background-color: white;
}
.input {
  border-radius: 5px;
  border: 1px solid grey;
  margin-bottom: 10px;
}
.join-box {
  margin: 15px auto;
  border: 1px solid #82549d;
  border-radius: 5px;
  height: 40px;
}
.all-agree {
  margin: 15px auto;
  border: 1px solid #82549d;
  border-radius: 5px;
  height: 40px;
  padding-left: 5px;
}
.mobile-all-agree {
  margin: 15px auto;
  border: 1px solid #82549d;
  border-radius: 5px;
  height: 40px;
  padding-left: 5px;
}
.agree {
  overflow: scroll;
  overflow-x: hidden;
  height: 300px;
  margin: 0 auto;
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 15px;
  padding: 15px;
}
.join {
  font-size: 18px;
  color: white;
  height: 38px;
  font-weight: bold;
  font-family: AppleSDGothicNeo;
  border-radius: 3px;
  background-color: #82549d;
}
.mobile-join-button {
  font-size: 18px;
  color: white;
  height: 38px;
  font-weight: bold;
  font-family: AppleSDGothicNeo;
  border-radius: 3px;
  background-color: #82549d;
}
.select-box {
  border-radius: 5px;
  border: 1px solid grey;
  margin-bottom: 10px;
  height: 30px;
  padding: 2px;
}
.check-box {
  height: 15px;
  width: 15px;
}
.mobile-check-box {
  height: 13px;
  width: 13px;
}
</style>
