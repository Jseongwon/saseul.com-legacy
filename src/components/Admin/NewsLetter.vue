<template>
  <div>
    <div style="padding: 0 100px">
      <form v-show="!newButton" class="modify" @submit.prevent="modifyLetter">
        <input type="text" placeholder="제목입력.." />
        <input type="text" placeholder="텍스트입력.." />
        <input type="file" placeholder="파일입력.." />
        <input type="submit" value="수정" />
      </form>
      <form v-show="newButton" class="new" @submit.prevent="newLetter">
        <div>새로운 글쓰기</div>
        <input v-model="title" type="text" placeholder="제목입력......" />
        <input v-model="text" type="text" placeholder="텍스트입력......" />
        <input
          v-on:change="fileSelect"
          ref="image"
          type="file"
          placeholder="파일입력......"
          accept=".jpg, .jpeg"
        />
        <input type="submit" value="추가" />
      </form>
    </div>
    <hr />

    <div style="padding: 0 100px">
      <button @click="handleNewButtonClick">글쓰기</button>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">설명</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-active">
            <th>1</th>
            <td>사슬</td>
            <td>사슬 뉴스 레터</td>
            <td>133</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <a href="#">◀</a>
      <a href="#" style="margin: 0 5px">1</a>
      <a href="#">▶</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsLetter",
  data() {
    return {
      newButton: false,
      title: "",
      text: "",
      image: "",
    };
  },
  methods: {
    fileSelect() {
      this.image = this.$refs.image.files[0];
    },
    handleNewButtonClick() {
      this.newButton = !this.newButton;
    },
    newLetter() {
      if (this.title === "" || this.text === "" || this.image === "") {
        console.log(this.title, this.text, this.image);
        alert("정보입력바람");
        return;
      }

      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("text", this.text);
      formData.append("image", this.image);

      let data = {
        url: "news",
        method: "post",
        formData,
      };
      this.$store.dispatch("news", data);
    },
    modifyLetter() {},
  },
};
</script>

<style scoped></style>
