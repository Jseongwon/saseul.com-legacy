<template>
  <transition name="modal">
    <div class="modal-mask" v-on:keypress.space="alert('space!')">
      <div class="modal-wrapper" @click="getBgClickEvent">
        <div class="modal-container">
          <div class="modal-header">
            <button class="modal-close-button" @click="$emit('close')">
              <img src="@/assets/utility/close.svg" />
            </button>
          </div>
          <div class="modal-body">
            <img :src="this.imgPath" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "image-modal",
  props: ["imgPath"],
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.$emit("close");
      }
    });
  },
  destroyed() {
    window.removeEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.$emit("close");
      }
    });
  },
  methods: {
    getBgClickEvent(e) {
      if (e.target.classList[0] === "modal-wrapper") {
        this.$emit("close");
      }
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90%;
  margin: 0 auto;
  padding: 20px 20px 40px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  max-height: calc(100vh - 80px);
}

.modal-header {
  text-align: right;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body > img {
  width: 95%;
}
.modal-body {
  margin: 20px 0;
  text-align: center;
  overflow: scroll;
  max-height: calc(100vh - 200px);
}

.modal-close-button > img {
  width: 24px;
}
.modal-close-button {
  border: none;
  cursor: pointer;
}

/*
   * The following styles are auto-fapplied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
