<template>
  <div class="about">
    <div class="p-0 d-flex">
      <div class="background w-100 position-relative" style="height: 750px">
        <Navbar class="position-absolute w-100 p-0" style="z-index: 999"/>
        <img
          class="w-100 h-100 position-absolute"
          src="../assets/blockchain-composition.png"
          style="object-fit: cover; z-index: 20"
        />
        <div
          class="w-100 h-100 banner-text position-absolute d-flex"
          style="z-index: 800"
        >
          <div class="m-auto" style="width: 70%">
            <div style="color: white">
              Overwhelming Performance, <br/>
              Still Blockchain<br/><br/>
            </div>
            <div class="btn-line-area">
              <div class="link-btn" style="margin-right: 12px" v-on:click="openPage(
                    'https://hub.docker.com/r/artifriends/saseul-network')">
                Docker Hub
              </div>
              <div class="link-btn" style="margin-left: 12px" v-on:click="openPage(
                    'https://explorer.saseul.com')">
                Explorer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <saseul-characteristics/>
    <saseul-advantage/>

  </div>
</template>

<script>
    import SaseulCharacteristics from "./About/SaseulCharacteristics";
    import SaseulAdvantage from "./About/SaseulAdvantage";
    import Navbar from "./Navbar";

    export default {
        name: "About",
        components: {Navbar, SaseulAdvantage, SaseulCharacteristics},
        methods: {
            openPage(page) {
                window.open(page, "_blank");
            },
        },
    };
</script>

<style scoped>
  .background {
    /* 250px */
    /*background-image: url("../assets/blockchain-composition.png");*/

    /*-webkit-animation: Gradient 10s ease-in-out infinite;*/
    /*-moz-animation: Gradient 10s ease-in-out infinite;*/
    /*animation: Gradient 10s ease-in-out infinite;*/

    /*display: flex;*/
    /*align-content: center;*/
    /*align-items: center;*/
  }

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 20%;
    }
    50% {
      background-position: 100% 70%;
    }
    100% {
      background-position: 0% 20%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 20%;
    }
    50% {
      background-position: 100% 70%;
    }
    100% {
      background-position: 0% 20%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 20%;
    }
    50% {
      background-position: 100% 70%;
    }
    100% {
      background-position: 0% 20%;
    }
  }

  .banner-text {
    font-weight: 600;
    flex: 1;
    margin-top: 5px;
    font-size: 40px;
    text-align: center;
    padding: 20px;
  }

  .btn-line-area {
    flex: 1;
    width: 100%;
    flex-direction: row;
    display: flex;
    justify-content: center;
  }

  .link-btn {
    font-family: "Avenir Heavy", self;
    font-size: 16pt;
    line-height: 56px;
    color: #ffffff;
    width: 240px;
    height: 56px;
    border: 1px solid #ffffff;
  }

  .link-btn:hover {
    font-family: "Avenir Heavy", self;
    /*font-size: 16pt;*/
    line-height: 56px;
    color: #6a609b;
    background-color: #ffffff;
    width: 240px;
    height: 56px;
    border: 1px solid #ffffff;
    cursor: pointer;
    transition: 0.25s;
  }

  .docs-down-img {
    width: 20px;
    height: 19px;
    vertical-align: middle;
    padding-left: 2px;
  }


  .docs-down-img-hover {
    width: 20px;
    height: 19px;
    vertical-align: middle;
    padding-left: 2px;
    display: none;
  }

  .link-down-btn:hover .docs-down-img-hover {
    display: inline;
    transition: 0.25s ease-out;
  }

  @media screen and (max-width: 480px) {
    .background-gradient-div {
      height: 400px;
    }

    .link-btn {
      font-size: 13px;
    }

    .docs-down-img {
      display: none;
    }

    .banner-text {
      font-size: 28px;
    }
  }

  .about-vertical-line-wrap {
    padding: 40px 20px 30px 20px;

    margin: 0 auto;
  }

  .about-vertical-line {
    height: 5px;
    border: 1px solid #82549d;
    background-color: #82549d;
  }
</style>
