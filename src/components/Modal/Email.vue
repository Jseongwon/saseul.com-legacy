<template>
  <div>
    <b-modal
      ok-only
      id="modal-1"
      size="lg"
      ok-title="Send"
      ok-variant=""
      @ok="sendEmail"
    >
      <b-form-group
        class="email-form"
        style="height: 600px"
        @submit.prevent="sendEmail"
      >
        <b-form-select
          name="select"
          v-model="selected"
          :options="options"
          class="my-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-select>
        <hr />
        <div style="float: left; margin: 0 0 15px 15px">
          I'll contact you if you send it.
        </div>
        <div>
          <b-form-textarea
            v-model="text"
            name="text"
            id="textarea-no-resize"
            placeholder="Please enter the contents."
            rows="19"
            no-resize
          ></b-form-textarea>
        </div>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Email",
  data() {
    return {
      text: "",
      selected: "Module-Issuing Token",
      options: [
        { item: "Module-Issuing Token", name: "Module-Issuing Token" },
        { item: "Module-dExchange", name: "Module-dExchange" },
        { item: "Module-SupplyChain", name: "Module-SupplyChain" },
        {
          item: "Module-Issuing Certificate",
          name: "Module-Issuing Certificate",
        },
        { item: "Module-DID", name: "Module-DID" },
        { item: "Module-Board", name: "Module-Board" },
        { item: "Price Policy-Community", name: "Price Policy-Community" },
        { item: "Price Policy-Enterprise", name: "Price Policy-Enterprise" },
      ],
    };
  },
  methods: {
    sendEmail() {
      if (this.text === "") {
        alert("메세지 입력해주세요");
        return;
      }
      let data = {
        product: this.selected,
        message: this.text,
        email: this.$store.state.userInfo.email,
        country: this.$store.state.userInfo.country,
        name: this.$store.state.userInfo.name,
        position: this.$store.state.userInfo.position,
        phone: this.$store.state.userInfo.phone,
        company: this.$store.state.userInfo.company,
        address: this.$store.state.userInfo.address,
      };
      this.$store.dispatch("sendEmail", data);
      this.text = "";
      this.selected = "Module-Issuing Token";
    },
  },
};
</script>

<style scoped>
.email-form {
  text-align: center;
}
</style>
