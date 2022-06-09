<template>
  <div class="feature-content">
    <div class="feature-box-wrap">
      <div class="feature-title">SASEUL based BaaS</div>
      <div class="feature-line"></div>
      <div class="feature-box">
        <div class="feature-img-box">
          <img
            src="../../assets/BaaS_tmp.png"
            height="50"
            width="50"
            @click="
              openPage(
                'https://aws.amazon.com/marketplace/server/procurement?productId=9c2df039-e40d-4035-bd93-29f72c19647b'
              )
            "
          />
          <!--
          <div>
            <button class="feature-link" type="button" @click="openPage('https://youtu.be/v2njK6f7blU')">
              <svg version="1.1" class="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	               width="20px" height="20px" viewBox="0 0 90 90" style="enable-background:new 0 0 90 90;" xml:space="preserve">
                <g>
                  <path class="iconpath" d="M90,26.958C90,19.525,83.979,13.5,76.55,13.5h-63.1C6.021,13.5,0,19.525,0,26.958v36.084
                    C0,70.475,6.021,76.5,13.45,76.5h63.1C83.979,76.5,90,70.475,90,63.042V26.958z M36,60.225V26.33l25.702,16.947L36,60.225z"></path>
                </g>
            </svg>
              Demonstration
            </button>
          </div>-->
        </div>
        <div class="feature-text-box">
          SASEUL is a blockchain engine that overcame the limitations faced by
          other engines like Ethereum and Hyperledger Fabric. It implements
          HAP-2 consensus algorithm, which enables the engine to reach finality
          between max 3 seconds and displays max 5000 transactions per second on
          average, which is enough to cover most industrial needs, considering
          that VISA processes around 1700 transactions per second. In addition,
          SASEUL smart contracts are designed to be developer-friendly since
          developers can draft a contract in any programming language they wish
          as long as the compiled product is in JSON format - a prominent
          data-interchange format. Therefore, our ultimate goal in uploading
          SASEUL AMI in Amazon Marketplace is to facilitate blockchain
          development around the world in various industries simply because
          SASEUL engine can handle the needs.
          <br />
          <span class="feature-notice"
            >* You can get Full SASEUL CODE by downloading on
            <a
              href="https://aws.amazon.com/marketplace/pp/B07SHW8NBD"
              class="feature-text-link"
              >AWS marketplace.</a
            >
          </span>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="feature-box-wrap">
      <div class="feature-title">SASEUL CLI v.0.5 Tutorial</div>
      <div class="feature-line"></div>
      <BaaSTutorial />
    </div>
  </div>
</template>

<script>
import BaaSTutorial from "../BaaS/BaaSTutorial";
export default {
  name: "feature-content",
  components: { BaaSTutorial },
  methods: {
    openPage(page) {
      window.open(page, "_blank");
    },
  },
};
</script>

<style scoped>
.feature-content {
  width: 100%;
  margin: 0 auto;
  padding: 0 60px;
  /*max-width: 1024px;*/
}

.feature-box-wrap {
  padding-bottom: 60px;
}

.feature-box-wrap:first-child {
  padding-top: 60px;
}

.feature-title {
  font-size: 24px;
  font-weight: bold;
  color: #82549d;
  padding: 0 0 10px 0;
}

.feature-line {
  border-top: 2px solid #82549d;
  padding-bottom: 20px;
}

.feature-box {
  display: flex;
  font-size: 16px;
  line-height: 25px;
  padding: 0px 0 30px 0;
  color: #2d2d2d;
}

.feature-img-box {
  flex: none;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.feature-img-box > img {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 4px;
  height: auto;
  cursor: pointer;
}

.feature-text-box {
  text-align: justify;
  padding-left: 20px;
}

.feature-link {
  margin-top: 10px;
  padding: 8px 10px;
  border: 1px solid #82549d;
  color: #82549d;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  font-size: 14px;
  background-color: transparent;
  width: 220px;
  transition: 0.25s ease-in-out;
  cursor: pointer;
  outline: none;
}
.feature-notice {
  font-size: 14px;
  color: #808080;
  font-style: italic;
}

.feature-link:hover {
  color: #ffffff;
  background-color: #82549d;
}

.small-button-caption {
  font-size: 12px;
}

.svg-icon {
  margin: 0 3px -5px 0;
}

.iconpath {
  fill: #82549d;
  vertical-align: middle;
  margin-bottom: -5px;
  transition: 0.25s ease-in-out;
}

.feature-link:hover .iconpath {
  fill: #ffffff;
}

@media screen and (max-width: 768px) {
  .feature-box {
    flex-wrap: wrap;
  }

  .feature-text-box {
    flex: 1 1 100%;
    padding-left: 0;
    padding-top: 20px;
    text-align: left;
  }

  .feature-img-box > div {
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  .feature-img-box > img {
    width: 100%;
    height: auto;
    margin-right: 15px;
  }
  .feature-link:first-child {
    margin-top: 0;
  }
  .feature-link {
    width: 180px;
  }
  .feature-img-box {
    flex: 1 1 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 480px) {
  .feature-img-box > img {
    width: 100%;
    height: auto;
    margin-right: 15px;
  }
  .feature-content {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1024px;
  }
}

@media screen and (max-width: 360px) {
  .feature-link {
    width: 160px;
  }
}
</style>
