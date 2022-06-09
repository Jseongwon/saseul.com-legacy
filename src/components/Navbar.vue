<template>
  <div class="navbar w-100 position-absolute">
    <div class="navbar-inner-wrap w-100">
      <div class="navbar-buttonset w-100">
        <div
          class="w-100"
          style="
            height: 75px;
            opacity: 0.7;
            position: fixed;
            background-color: black;
            z-index: 1;
          "
        ></div>
        <div class="row w-100 position-fixed" style="height: 75px; z-index: 2">
          <div class="h-100 d-flex" style="width: 18%">
            <img
              class="navbar-image m-auto"
              src="../assets/new.png"
              @click="moveTo('/')"
              style="height: 23px"
            />
          </div>
          <div class="h-100 d-flex" style="width: 5%">
            <button
              class="web-nav-button about m-auto"
              type="button"
              v-bind:class="[currentPath === '/' ? 'selected' : '']"
              @click="moveTo('/')"
            >
              About
            </button>
          </div>
          <div class="h-100 d-flex" style="width: 5%">
            <button
              class="web-nav-button detail m-auto"
              type="button"
              v-bind:class="[currentPath === '/detail' ? 'selected' : '']"
              @click="moveTo('/detail')"
            >
              Detail
            </button>
          </div>
          <div class="h-100 d-flex" style="width: 5%">
            <button
              class="web-nav-button product m-auto"
              type="button"
              v-bind:class="[currentPath === '/product' ? 'selected' : '']"
              @click="moveTo('/product')"
            >
              Partners
            </button>
          </div>
          <div class="h-100 d-flex" style="width: 5%">
            <button
              class="web-nav-button feature m-auto"
              type="button"
              v-bind:class="[currentPath === '/BaaS' ? 'selected' : '']"
              @click="moveTo('/BaaS')"
            >
              BaaS
            </button>
          </div>
          <div class="h-100 d-flex" style="width: 7%">
            <button
              class="web-nav-button contact m-auto"
              type="button"
              v-bind:class="[currentPath === '/contact' ? 'selected' : '']"
              @click="moveTo('/contact')"
            >
              Contact Us
            </button>
          </div>
          <div class="h-100 d-flex" style="width: 5%">
            <button
              class="web-nav-button api m-auto"
              type="button"
              @click="linkTo('https://docs.saseul.com')"
            >
              API
            </button>
          </div>
          <div class="h-100 d-flex" style="width: 5%">
            <button
              class="web-nav-button github m-auto"
              type="button"
              @click="navigateToGithub"
            >
              <img class="icon-image m-auto" src="../assets/octocat.png" />
            </button>
          </div>
          <div class="h-100 d-flex" style="width: 5%">
            <button
              class="web-nav-button m-auto"
              type="button"
              @click="linkTo('https://hub.docker.com/r/artifriends/saseul-network')"
            >
              <img class="icon-image m-auto" src="../assets/docker.png" />
            </button>
          </div>
          <div class="h-100 d-flex" style="width: 5%">
            <button
              class="web-nav-button m-auto"
              type="button"
              @click="linkTo('https://explorer.saseul.com')"
            >
              <img class="icon-image m-auto" src="../assets/explorer.png" />
            </button>
          </div>
          <div class="col"></div>
          <div class="h-100 d-flex" style="width: 12%">
            <span v-if="userInfo.isAuth" class="m-auto">
              <img src="../assets/call.png" style="margin-bottom: 2px" />
              <button
                class="web-nav-button"
                v-bind:class="[currentPath === '/mypage' ? 'selected' : '']"
                @click="moveTo('/mypage')"
              >
                {{ userInfo.name }}
              </button>
            </span>
            <span v-else class="m-auto"
              ><button
                class="web-nav-button signin"
                type="button"
                v-bind:class="[currentPath === '/signin' ? 'selected' : '']"
                @click="moveTo('/signin')"
              >
                Sign in &nbsp;
              </button>
              <span class="web-nav-button">|</span>
              <button
                class="web-nav-button join"
                type="button"
                v-bind:class="[currentPath === '/signup' ? 'selected' : '']"
                @click="moveTo('/signup')"
              >
                &nbsp; Join
              </button></span
            >
          </div>
          <div class="h-100 d-flex">
            <button
              v-b-modal.modal-2
              @click="checkAuth"
              class="web-nav-button help m-auto"
            >
              <img class="help-image" src="../assets/group-5.png" />
            </button>
          </div>
        </div>
      </div>

      <div class="mobile-navbar-buttonset position-fixed">
        <div
          class="w-100 position-fixed navbar-background"
          style="height: 75px; background-color: black"
        ></div>

        <div class="position-fixed w-100" style="z-index: 1000; height: 75px">
          <div
            class="position-absolute h-100 d-flex"
            style="transform: translate(-50%, -50%); top: 50%; left: 10%"
          >
            <button
              class="m-auto"
              type="button"
              @click="toggleNav"
              style="
                border: none;
                box-shadow: none;
                background-color: transparent;
                width: 38px;
              "
            >
              <div
                style="
                  width: 24px;
                  height: 3px;
                  background-color: white;
                  margin: 5px 0;
                "
              ></div>
              <div
                style="
                  width: 24px;
                  height: 3px;
                  background-color: white;
                  margin: 5px 0;
                "
              ></div>
              <div
                style="
                  width: 24px;
                  height: 3px;
                  background-color: white;
                  margin: 5px 0;
                "
              ></div>
            </button>
          </div>
          <div
            class="position-absolute"
            style="transform: translate(-50%, -50%); top: 50%; left: 50%"
          >
            <img
              class="navbar-image m-auto"
              src="../assets/new.png"
              @click="moveTo('/')"
            />
          </div>
          <div
            class="position-absolute"
            style="transform: translate(-50%, -50%); top: 50%; left: 90%"
          >
            <div class="h-100 d-flex">
              <button
                class="web-nav-button docker m-auto"
                type="button"
                @click="linkTo('https://hub.docker.com/r/artifriends/saseul-network')"
              >
                <img class="icon-image" src="../assets/docker.png" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-nav-background">
        <div class="mobile-nav-closing-shadow" @click="toggleNav"></div>
        <div class="mobile-nav p-4">
          <div class="w-100 side-text mb-3">
            <div v-if="userInfo.isAuth">
              <div class="mb-3">
                <img src="../assets/call.png" style="margin-bottom: 3px" />
                <button
                  class="mobile-nav-button mx-auto"
                  v-bind:class="[currentPath === '/mypage' ? 'selected' : '']"
                  @click="moveTo('/mypage')"
                >
                  {{ userInfo.name }}
                </button>
              </div>
              <div>
                <button
                  class="signin m-auto"
                  type="button"
                  v-bind:class="[currentPath === '/mypage' ? 'selected' : '']"
                  @click="moveTo('/mypage')"
                >
                  Edit Account
                </button>
                <button
                  class="join ml-2 side-text"
                  type="button"
                  @click="handleSignOut"
                >
                  Logout
                </button>
              </div>
            </div>

            <span v-else class="m-auto">
              <button
                class="signin m-auto"
                type="button"
                v-bind:class="[currentPath === '/signin' ? 'selected' : '']"
                @click="moveTo('/signin')"
              >
                Signin
              </button>
              <button
                class="join ml-2 side-text"
                type="button"
                v-bind:class="[currentPath === '/signup' ? 'selected' : '']"
                @click="moveTo('/signup')"
              >
                Join
              </button>
            </span>
          </div>
          <div class="side-text mb-3">
            <button
              class="mobile-nav-button"
              v-bind:class="[currentPath === '/' ? 'selected' : '']"
              @click="moveTo('/')"
            >
              About
            </button>
          </div>
          <div class="side-text mb-3">
            <button
              class="mobile-nav-button"
              v-bind:class="[currentPath === '/detail' ? 'selected' : '']"
              @click="moveTo('/detail')"
            >
              Detail
            </button>
          </div>
          <div class="side-text mb-3">
            <button
              class="mobile-nav-button"
              v-bind:class="[currentPath === '/product' ? 'selected' : '']"
              @click="moveTo('/product')"
            >
              Partners
            </button>
          </div>

          <div class="side-text mb-3">
            <button
              class="mobile-nav-button"
              v-bind:class="[currentPath === '/BaaS' ? 'selected' : '']"
              @click="moveTo('/BaaS')"
            >
              BaaS
            </button>
          </div>

          <div class="side-text mb-3">
            <button
              class="mobile-nav-button"
              v-bind:class="[currentPath === '/contact' ? 'selected' : '']"
              @click="moveTo('/contact')"
            >
              Contact Us
            </button>
          </div>
          <div class="side-text mb-3">
            <button
              class="mobile-nav-button"
              @click="linkTo('https://api.saseul.com')"
            >
              API
            </button>
          </div>
          <div class="side-text mb-3">
            <button
              class="mobile-nav-button"
              @click="linkTo('https://explorer.saseul.com')"
            >
              Explorer
            </button>
          </div>
          <div class="side-text mb-3">
            <button
              class="mobile-nav-button"
              @click="navigateToGithub"
            >
              Github
            </button>
          </div>
          <div class="side-text">
            <button
              v-b-modal.modal-2
              @click="checkAuth"
              class="mobile-nav-button"
            >
              <img class="help-image" src="../assets/group-15.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageModal from "./BaaS/imageModal";

const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
export default {
  name: "Navbar",
  components: { ImageModal },
  data() {
    let currentPath = this.$route.path;
    return {
      currentPath,
    };
  },
  computed: {
    userInfo: function () {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    navigateToGithub() {
      window.open("https://github.com/saseul", "_blank");
    },
    toggleNav() {
      const navDOM = this.$el.querySelector(".mobile-nav-background").classList;
      const navButtonDOM = this.$el.querySelector(".mobile-nav").classList;
      if (navDOM.length - 1) {
        navButtonDOM.remove("opened");
        setTimeout(function () {
          navDOM.remove("opened");
        }, 500);
        this.enableScroll();
      } else {
        navDOM.add("opened");
        this.disableScroll();
        setTimeout(function () {
          navButtonDOM.add("opened");
        }, 50);
      }
    },
    closeNav() {
      const navDOM = this.$el.querySelector(".mobile-nav-background").classList;
      const navButtonDOM = this.$el.querySelector(".mobile-nav").classList;
      navButtonDOM.remove("opened");
      setTimeout(function () {
        navDOM.remove("opened");
      }, 500);
      this.enableScroll();
    },
    preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.returnValue = false;
    },
    preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
        this.preventDefault(e);
        return false;
      }
    },
    disableScroll() {
      if (window.addEventListener) {
        // older FF
        window.addEventListener("DOMMouseScroll", this.preventDefault, false);
      }
      if (window.addEventListener) {
        window.addEventListener("DOMMouseScroll", this.preventDefault, false);
      }
      window.onwheel = this.preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
      window.ontouchmove = this.preventDefault; // mobile
      document.onkeydown = this.preventDefaultForScrollKeys;
      document.addEventListener("touchmove", this.handleScroll, {
        passive: false,
      });
    },
    enableScroll() {
      if (window.removeEventListener) {
        window.removeEventListener(
          "DOMMouseScroll",
          this.preventDefault,
          false
        );
      }
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
      document.removeEventListener("touchmove", this.handleScroll, {
        passive: true,
      });
    },
    moveTo(path) {
      this.$router.push(path);
      this.currentPath = path;
      if (window.innerWidth < 769) {
        this.closeNav();
      }
      window.scrollTo(0, 0);
    },
    linkTo(path) {
      window.open(path, "_blank");
    },
    handleScroll(e) {
      e.preventDefault();
    },
    handleSignOut() {
      const data = {
        url: "signout",
        userId: this.$store.state.userInfo.id,
      };
      this.$store.dispatch("account", data);
    },
    checkAuth() {
      if (!this.userInfo.isAuth) {
        this.$router.push("/signin");
      }
    },
  },
};
</script>

<style scoped>
*.selected {
  color: #82549d !important;
  font-weight: 700;
  letter-spacing: -0.4px;
}

button {
  outline: none;
}
.navbar {
  position: relative;
}

.navbar-image {
  height: 23px;
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
  .navbar-buttonset {
    display: none;
  }
}
.web-nav-button {
  background-color: transparent;
  font-family: NotoSans;
  border: none;
  box-shadow: none;
  padding: 0;
  height: 40px;
  font-size: 16px;
  color: white;
  cursor: pointer;
}

.docker {
  width: 65px;
}

.icon-image {
  height: 24px;
  margin-bottom: -5px;
}

/********************************/
/*          for mobile          */
/********************************/
.join {
  background-color: transparent;
  font-family: NotoSans;
  border: none;
  box-shadow: none;
  padding: 0;
  font-size: 1rem;
  color: #a3a3a3;
  cursor: pointer;
}
.signin {
  background-color: transparent;
  font-family: NotoSans;
  border: none;
  box-shadow: none;
  padding: 0;
  font-size: 1rem;
  color: #a3a3a3;
  cursor: pointer;
}

.mobile-nav-background.opened {
  margin-top: 75px;
  display: inherit;
}
@media screen and (min-width: 1000px) {
  .mobile-nav-background {
    display: none !important;
  }
  .navbar-background {
    opacity: 0.8;
  }
}

.mobile-nav {
  max-width: 250px;
  position: fixed;
  left: -80%;
  width: 75%;
  transition: left 0.5s ease-in-out;
  height: 100%;
  background-color: white;
  z-index: 999;
}

.opened.mobile-nav {
  left: 0;
}
.mobile-nav-closing-shadow {
  margin-top: 75px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
}
.mobile-nav-button {
  background-color: transparent;
  font-family: NotoSans;
  border: none;
  box-shadow: none;
  padding: 0;
  font-size: 1rem;
  color: black;
  cursor: pointer;
}

@media screen and (min-width: 1000px) {
  .mobile-navbar-buttonset {
    display: none;
  }
}

.mobile-nav-background {
  z-index: 1;
  display: none;
  overflow: hidden;
}
</style>
