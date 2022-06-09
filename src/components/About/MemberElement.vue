<template>
  <div class="member-element">
    <div class="member-element-box">
      <div class="member-profile-img">
        <img
          :src="require('../../assets/member-pic/' + this.profileImgPath)"
          oncontextmenu="return false"
        />
      </div>
      <div class="member-info">
        <div class="member-role">{{ this.role }}</div>
        <div class="member-name">{{ this.name }}</div>
      </div>
    </div>
    <div class="member-spec">
      <div class="member-spec-text">
        {{ this.spec1 }}
        <br />
        {{ this.spec2 }}
        <br />
        {{ this.spec3 }}
        <br />
        {{ this.spec4 }}
        <br />
        {{ this.spec5 }}
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberElement",
  props: [
    "name",
    "role",
    "spec1",
    "spec2",
    "spec3",
    "spec4",
    "spec5",
    "profileImgPath",
  ],
  data() {
    return {};
  },
};
</script>

<style scoped>
.member-element {
  display: block;
  margin: auto;
}

.member-element-box {
  width: 33.333333%;
  min-width: 290px;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 10px;
  border: 1px solid #f4f4f4;
  margin: 10px auto;
}

@media screen and (max-width: 1024px) {
  .member-element {
    width: calc(50% - 20px);
    min-width: 200px;
  }
}
@media screen and (max-width: 663px) {
  .member-element {
    width: 100%;
  }
}
@media screen and (max-width: 480px) {
  .member-element {
    margin: 10px 0;
  }
}
.member-profile-img {
  width: 100px;
  height: 100px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  overflow: hidden;
}
.member-profile-img > img {
  width: 100%;
}
.member-role {
  display: block;
  margin-left: 20px;
  margin-top: 10px;

  font-size: 16px;
  font-weight: 600;
  color: #82549d;
  line-height: 1.2;
}
.member-name {
  display: block;
  margin-left: 20px;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.8;
}
.member-spec {
  width: 33.3333333%;
  min-width: 290px;
  min-height: 200px;

  border: 1px solid #f4f4f4;
  margin: 10px auto;
  text-align: center;
}
.member-spec-text {
  padding: 25px 0px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8;
}
</style>
