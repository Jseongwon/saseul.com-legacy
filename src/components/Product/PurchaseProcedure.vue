<template>
  <div class="container-fluid">
    <div class="m-auto" style="width: 95%">
      <div style="margin: 65px 0; font-size: 25px; font-weight: bold">
        Purchase procedure
      </div>
      <div class="row big-box mb-4 mx-auto">
        <div class="col-12 col-md-6 my-5 d-flex">
          <img class="m-auto" src="../../assets/1.png" style="width: 80%" />
        </div>
        <div class="col-12 col-md-6">
          <div class="col-12 col-md-3 mx-auto d-flex" style="margin: 65px 0">
            <img class="mx-auto" src="../../assets/group-7.png" />
          </div>
          <div
            class="col-8 mx-auto my-5"
            style="font-size: 20px; font-weight: bold; text-align: center"
          >
            1. 원하시는 상품에 구입하기 버튼을 눌러주세요.
          </div>
        </div>
      </div>
      <div class="row big-box mb-4 mx-auto">
        <div class="col-12 col-md-6 my-5 d-flex">
          <img class="m-auto" src="../../assets/1-copy.png" />
        </div>
        <div class="col-12 col-md-6">
          <div class="col-12 col-md-4 mt-5 mb-4 mx-auto d-flex">
            <img class="m-auto" src="../../assets/group-8.png" />
          </div>
          <div
            class="col-8 mx-auto my-5"
            style="font-size: 20px; font-weight: bold; text-align: center"
          >
            2. 문의 유형과 내용을 작성해주시면 영업일 기준 48시간 내로
            답변드립니다.
          </div>
        </div>
      </div>
      <div class="row small-box mb-4 mx-auto">
        <div class="col-5 my-5 d-flex mx-auto">
          <img class="m-auto" src="../../assets/group-9.png" />
        </div>
        <div
          class="col-7 m-auto"
          style="font-size: 20px; font-weight: bold; text-align: center"
        >
          3. 메일로 요청 해 주신 내용답변을 전달 받은 뒤 개인정보 확인을 합니다.
        </div>
      </div>
      <div class="row small-box mb-4 mx-auto">
        <div class="col-5 my-5 d-flex">
          <img class="m-auto" src="../../assets/group-10.png" />
        </div>
        <div
          class="col-7 m-auto"
          style="font-size: 20px; font-weight: bold; text-align: center"
        >
          4. 구입 완료가 된 후 마이페이지에서 라이센스키를 확인 하실 수
          있습니다.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurchaseProcedure",
};
</script>

<style scoped>
.box-1 {
  background-image: url("../../assets/1.png");
}
.big-box {
  border: 1px solid grey;
}
.small-box {
  border: 1px solid grey;
  /*height: 175px;*/
}
</style>
