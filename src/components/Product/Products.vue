<template>
  <div class="product">
    <div
      class="product_box014"
      :class="{ product_box014_change: this.productPopupStatus === 0 }"
    >
      <div class="product_box015" @click="productPopupOff()"></div>
      <div class="product_box016">
        <div class="product_box019">
          <div class="product_box017">
            <img
              class="product_image001"
              :src="require('../../assets/' + this.popupData._image)"
            />
          </div>
          <div class="product_box018">
            <div class="product_text009">{{ this.popupData._name }}</div>
            <div class="product_text010">{{ this.popupData._contents }}</div>
          </div>
        </div>
        <div class="product_box020">
          <div class="product_box021">
            <ul class="product_list001">
              <li class="product_text011">
                {{ this.popupData._name }}
                <div class="product_text012">
                  {{ this.popupData._contents }}
                </div>
              </li>
              <li class="product_text011">
                {{ this.popupData._name }}
                <div class="product_text012">
                  {{ this.popupData._contents }}
                </div>
              </li>
              <li class="product_text011">
                {{ this.popupData._name }}
                <div class="product_text012">
                  {{ this.popupData._contents }}
                </div>
              </li>
              <li class="product_text011">
                {{ this.popupData._name }}
                <div class="product_text012">
                  {{ this.popupData._contents }}
                </div>
              </li>
            </ul>
          </div>
          <div class="product_box022">
            <div class="product_text013">{{ this.popupData._name }}</div>
            <div class="product_text014">{{ this.popupData._contents }}</div>
            <div class="product_text015">{{ this.popupData._name }}</div>
            <div class="product_box023">
              <input class="product_checkBox001" type="checkbox" />
              <div class="product_text016">Apple Bear Cat Dog</div>
            </div>
          </div>
        </div>
        <div class="product_box024">
          <button class="product_button001">Request</button>
          <div class="product_text018" v-if="this.popupData._price === '$0'">
            Free
          </div>
          <div
            class="product_text017"
            :class="{ product_text017_change: this.popupData._price !== '$0' }"
          >
            {{ this.popupData._price }}
          </div>
          <div style="clear: both"></div>
        </div>
      </div>
    </div>
    <div class="product_box001">
      <div class="product_box003">
        <div
          class="product_box005"
          @click="tabClick(0)"
          :class="{ product_status001: this.tabStatus === 0 }"
        >
          <div class="product_text001">Module</div>
        </div>
      </div>
      <div class="product_box004">
        <div
          class="product_box006"
          @click="tabClick(1)"
          :class="{ product_status001: this.tabStatus === 1 }"
        >
          <div class="product_text002">Price Policy</div>
        </div>
      </div>
      <div style="border-top: 1px solid white; position: relative">
        <div class="bar"></div>
      </div>
    </div>
    <div class="product_box002">
      <transition name="fade" mode="in-out">
        <div class="product_box007" v-if="this.tabStatus === 0">
          <product-element
            v-for="(product, index) in productObject.module"
            :key="index"
            :index="index"
            :type="'module'"
            :name="product._name"
            :contents="product._contents"
            :price="product._price"
            :image="product._image"
            @productPopupOn="productPopupOn"
          />
        </div>
      </transition>
      <transition name="fade" mode="in-out">
        <div class="product_box007 m-auto" v-if="this.tabStatus === 1">
          <product-element
            v-for="(product, index) in productObject.pricePolicy"
            :key="index"
            :index="index"
            :type="'pricePolicy'"
            :name="product._name"
            :contents="product._contents"
            :price="product._price"
            :image="product._image"
            :bar="product._bar"
            @productPopupOn="productPopupOn"
          />
        </div>
      </transition>
    </div>
    <!--    <div class="product_box008">-->
    <!--      &lt;!&ndash;-->
    <!--      <div class="product_box009">-->
    <!--        <div class="product_text003">FAQ</div>-->
    <!--        <div class="product_box012" v-for="(faq, index) in faqObject.faq" :faqStatus="faqStatus">-->
    <!--          <img class="product_arrow001" src="../../assets/utility/arrow_bottom.png" :class="{'product_arrow002' : faqStatus===index}"/>-->
    <!--          <div class="product_text004" @click="faqClick(index)">-->
    <!--            {{faq._title}}-->
    <!--          </div>-->
    <!--          <div class="product_text008" v-if="faqStatus===index">-->
    <!--            {{faq._contents}}-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      &ndash;&gt;-->
    <!--      &lt;!&ndash;      <div class="product_box010">&ndash;&gt;-->
    <!--      &lt;!&ndash;        <div class="product_text003">System Requirements</div>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <div class="product_text005">&ndash;&gt;-->
    <!--      &lt;!&ndash;          Validator, Supervisor Node<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Minimum: 2 Core, 4 Thread CPU Recommendation: 4 Core, 8 Thread CPU<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Minimum: 250 GB SSD Recommendation: 1 TB SSD<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Minimum: 8GB Memory Recommendation: 16GB Memory<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Minimum: 5 Gbps Network Capacity Recommendation: 20 Gbps Network&ndash;&gt;-->
    <!--      &lt;!&ndash;          Capacity<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          <br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Arbiter<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Minimum: 4 Core, 8 Thread CPU<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Recommendation: 8 Core, 16 Thread CPU or GPU equivalent spec of the&ndash;&gt;-->
    <!--      &lt;!&ndash;          CPU.<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Minimum: 1 TB SSD<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Recommendation: The more, the better.<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Minimum: 16GB Memory Recommendation: 64GB Memory<br />&ndash;&gt;-->
    <!--      &lt;!&ndash;          Minimum: 20 Gbps Network Capacity Recommendation: The more, the&ndash;&gt;-->
    <!--      &lt;!&ndash;          better.&ndash;&gt;-->
    <!--      &lt;!&ndash;        </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;      </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;    </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;-->
    <!--    <div class="product_box013">-->
    <!--      <div class="product_box011">-->
    <!--        <div class="product_text006">Buying for a team?</div>-->
    <!--        <div class="product_text007">-->
    <!--          Easy-to-use license management. Dedicated 24/7 technical support. See all business plans-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    &ndash;&gt;</div>-->
  </div>
</template>

<script>
import ProductElement from "./ProductElement";

export default {
  name: "Products",
  components: { ProductElement },
  data() {
    let tabStatus = 0; // 0, 1
    let faqStatus = -1;
    let productPopupStatus = -1;

    let productObject = {
      module: [
        {
          _name: "Base",
          _contents:
            "Basic Blockchain Functions\n" +
            "Cryptocurrency\n" +
            "Social Random\n" +
            "Transaction, Request, Accept",
          // _contents: 'Provides basic blockchain functionality',
          _price: "$0",
          _image: "1-1.png",
        },
        {
          _name: "Issuing Token",
          _contents:
            "Separate Token within Network\n" + "Currency Exchange Available",
          // _contents: 'Essential Modules for Configuring Blockchain Services',
          // _price: '$22,000',
          _image: "2-1.png",
        },
        {
          _name: "dExchange",
          _contents:
            "Create/manage Orderbooks\n" +
            "Buying/Selling Ordering and Handling by Designated/Market Price",
          // _contents: 'For the occupations whose main task is to manage the order form, for example, an online shopping mall',
          // _price: '$99,000',
          _image: "3-1.png",
        },
        {
          _name: "SupplyChain",
          _contents:
            "Asymmetric Token Pairs\n" +
            "QR or Barcode Scanning\n" +
            "Product’s Unique Signature (Unique Attestation)",
          // _contents: 'For the occupations with a high risk of falsifying information, for example, valuable goods and art-related industries.',
          // _price: '$77,000',
          _image: "4-1.png",
        },
        {
          _name: "Issuing Certificate",
          _contents:
            "Issuing Certificate\n" +
            "Certificate to Token/Coin Interlink\n" +
            "Execution of Funds, Third-party Signature, Redistribution of Cryptographic Information",
          // _contents: 'For the occupations whose main task is to manage various certificates, for example, accounting firms.',
          // _price: '$77,000',
          _image: "5-1.png",
        },
        {
          _name: "DID",
          _contents:
            "Personal Information Hashing\n" +
            "ID Issuance Rights\n" +
            "First-Time Email-Based Authentication\n" +
            "Telecom Based Authentication",
          // _contents: 'For the occupations occupations requiring strong personal information security, for example, government offices.',
          // _price: '$55,000',
          _image: "6-1.png",
        },
        {
          _name: "Board",
          _contents:
            "Bulletin Board functions\n" +
            "Writing, Modifying, Deleting, Commenting\n" +
            "Counting Number of Views, Collecting Statistical Functions",
          // _contents: 'For the occupations whose main job is managing bulletin boards, for example, SNS, web community operators',
          // _price: '$44,000',
          _image: "7-1.png",
        },
      ],
      pricePolicy: [
        // {
        //   _name: "Lite",
        //   _contents: "Only can use light node",
        //   _price: "$0",
        //   _image: "Lite.png",
        // },
        {
          _name: "Community",
          _contents:
            "1-Year Free Trial\n" + "No Arbiter(Storage Management Node)",
          // _price: "$50,000/Year",
          _image: "price-policy-1.png",
          _bar: true,
        },
        {
          _name: "Enterprise",
          _contents:
            "Enterprise Version\n" +
            "Perpetual License\n" +
            "Arbiter(Storage Management Node)",
          // _price: "$300,000/Copy",
          _image: "price-policy-2.png",
        },
      ],
    };
    let faqObject = {
      faq: [
        {
          _title: "Can I downgrade to a different plan?",
          _contents:
            "No, you cannot downgrade to a lower plan during your commitment period. You can upgrade to a higher plan within your commitment period, however, you cannot reduce the number of seats if you upgrade.",
        },
        {
          _title: "Can I downgrade to a different plan?",
          _contents:
            "No, you cannot downgrade to a lower plan during your commitment period. You can upgrade to a higher plan within your commitment period, however, you cannot reduce the number of seats if you upgrade.",
        },
      ],
    };

    let popupData = productObject.module[0];

    return {
      tabStatus,
      faqStatus,
      productPopupStatus,
      productObject,
      faqObject,
      popupData,
    };
  },
  methods: {
    tabClick(tabNumber) {
      if (tabNumber === 0) {
        document.querySelector(".bar").classList.remove("bar-right");
      } else {
        document.querySelector(".bar").classList.add("bar-right");
      }
      this.tabStatus = tabNumber;
    },
    faqClick(faqNumber) {
      if (this.faqStatus === faqNumber) {
        this.faqStatus = -1;
        return;
      }
      this.faqStatus = faqNumber;
    },
    productPopupOn(index, type) {
      if (type === "module") this.popupData = this.productObject.module[index];
      else if (type === "pricePolicy")
        this.popupData = this.productObject.pricePolicy[index];

      this.productPopupStatus = 0;

      document.getElementById("body").style.overflow = "hidden";
    },
    productPopupOff() {
      this.productPopupStatus = -1;
      document.getElementById("body").style.overflow = "visible";
    },
  },
};
</script>

<style scoped>
.bar {
  border-top: 7px solid white;
  top: -4px;
  left: 0%;
  width: 50%;
  position: absolute;

  transition: 0.3s ease-in-out !important;
}
.bar-right {
  left: 50%;
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}
.fade-leave-to {
  transition: 0s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.product {
  width: 100%;
  height: auto;

  margin: 0 auto;

  padding-top: 35px;
  background-color: #0d161a;
}
.product_box001 {
  width: 95%;
  height: 8vh;

  margin: 0 auto;
}
.product_box002 {
  display: block;

  width: 100%;
  height: auto;

  padding-top: 25px;
  /*border-top: 2px solid black;*/
  /*border-bottom: 2px solid #82549d;*/
}
.product_box003 {
  position: relative;
  display: inline-block;
  float: left;

  width: 50%;
  height: 100%;
}
.product_box004 {
  position: relative;
  width: 50%;
  height: 100%;
  display: inline-block;
}
.product_box005 {
  position: absolute;
  width: 100%;
  height: 50px;
  cursor: pointer;

  /*background: rgba(130, 84, 157, 0.5);*/
  border: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 0px;
  /* transition: .25s ease-out; */
}
.product_box006 {
  position: absolute;
  width: 100%;
  height: 50px;
  cursor: pointer;

  /*background: rgba(130, 84, 157, 0.5);*/
  border: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 0px;
}
.product_status001 {
  height: 52px;

  /*background: white;*/
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  color: white;
}
.product_text001 {
  margin-top: 10px;
}
.product_text002 {
  margin-top: 10px;
}
.product_box007 {
  display: flex;

  width: 96%;
  margin: 0 auto;

  padding: 10px;
  flex-wrap: wrap;
}
.product_box008 {
  max-width: 1024px;
  margin: 0 auto;

  height: auto;
  clear: both;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 60px;
}
.product_box009 {
  display: inline-block;
  float: left;

  width: 50%;

  padding-right: 40px;
  box-sizing: border-box;
}
.product_box010 {
  display: inline-block;
  width: 100%;
}
.product_text003 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0px;
  color: #6c6c6c;

  margin-bottom: 30px;
}
.product_text004 {
  display: inline-block;
  font-size: 16px;
  letter-spacing: 0px;
  color: #6c6c6c;
  line-height: 25px;

  margin-bottom: 22px;
  cursor: pointer;
}
.product_text005 {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0px;
  color: #6c6c6c;
  line-height: 25px;

  margin-bottom: 22px;
}
.product_box011 {
  display: block;

  max-width: 1024px;
  height: 156px;

  margin: 0 auto;
  margin-top: 80px;

  padding-top: 34px;
  padding-left: 52px;
  padding-right: 52px;

  border: 1px solid #979797;
}
.product_box013 {
  display: block;

  width: 100%;
  height: 156px;

  padding: 0px 20px;
  box-sizing: border-box;
}
.product_text006 {
  display: inline-block;
  float: left;

  font-size: 16px;
  letter-spacing: 0px;
  color: #1e1e1e;
}
.product_text007 {
  display: inline-block;
  float: right;

  width: 500px;

  font-size: 16px;
  letter-spacing: 0px;
  color: #1e1e1e;
}
.product_text008 {
  font-size: 16px;
  letter-spacing: 0px;
  color: #6c6c6c;
  line-height: 25px;

  margin-bottom: 40px;
  margin-left: 40px;
}
.product_arrow001 {
  display: inline-block;
  width: 16px;
  cursor: pointer;
  margin-right: 20px;
  transition: 0.25s;
}
.product_arrow002 {
  transform: rotate(180deg);
}
.product_box014 {
  position: fixed;
  visibility: hidden;

  width: 100%;
  height: 100%;

  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 3;
  opacity: 0;

  transition: 0.25s;
}
.product_box014_change {
  visibility: visible;
  opacity: 1;
}
.product_box015 {
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  background: #000000;
  opacity: 0.53;
}
.product_box016 {
  position: absolute;
  width: 70%;
  height: 90%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ffffff;

  padding-left: 80px;
  padding-right: 80px;
  padding-top: 50px;
  padding-bottom: 80px;
  box-sizing: border-box;
}
.product_box017 {
  display: inline-block;
  float: left;

  width: 100px;
  height: 100px;
}
.product_box018 {
  display: inline-block;
  width: calc(100% - 100px);
  min-height: 100px;
  height: auto;

  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  box-sizing: border-box;
}
.product_image001 {
  width: 100px;
  height: 100px;
}
.product_text009 {
  font-size: 24px;
  letter-spacing: 0px;
  color: #1e1e1e;
}
.product_text010 {
  font-size: 20px;
  letter-spacing: 0px;
  color: #1e1e1e;

  margin-top: 10px;
}
.product_box019 {
  display: block;
}
.product_box020 {
  display: block;

  width: 100%;
  height: 70%;

  margin-top: 50px;
}
.product_box021 {
  display: inline-block;
  float: left;

  width: 50%;
  height: 100%;

  border-right: 1px solid #d4d4d4;
  padding-right: 40px;
  box-sizing: border-box;
}
.product_box022 {
  display: inline-block;

  width: 50%;
  height: 100%;

  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
}
.product_text011 {
  font-size: 20px;
  letter-spacing: 0px;
  color: #1e1e1e;
}
.product_text012 {
  font-size: 20px;
  letter-spacing: 0px;
  color: #3a3a3a;

  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  margin-bottom: 30px;
}
.product_text013 {
  font-size: 20px;
  letter-spacing: 0px;
  color: #1e1e1e;
}
.product_text014 {
  font-size: 18px;
  letter-spacing: 0px;
  color: #3a3a3a;

  margin-top: 10px;
}
.product_text015 {
  font-size: 20px;
  letter-spacing: 0px;
  color: #1e1e1e;

  margin-top: 30px;
}
.product_box023 {
  display: block;
  margin-top: 10px;
}
.product_checkBox001 {
  display: inline-block;
  float: left;

  width: 24px;
  height: 24px;
}
.product_text016 {
  display: inline-block;

  font-size: 18px;
  letter-spacing: 0px;
  color: #3a3a3a;

  margin-left: 5px;
  margin-top: 4px;
}
.product_button001 {
  display: inline-block;
  float: right;

  width: 136px;
  height: 36px;
  border-radius: 5px;
  background: #82549d;

  font-size: 18px;
  letter-spacing: 0px;
  color: #ffffff;
  cursor: pointer;
}
.product_button001:focus {
  outline: none;
}
.product_text017 {
  display: inline-block;
  float: right;

  margin-right: 20px;

  font-size: 30px;
  letter-spacing: 0px;
  color: #9d9d9d;
  text-decoration: line-through;
}
.product_text017_change {
  right: 250px;
  bottom: 80px;

  color: #232323;
  text-decoration: none;
}
.product_text018 {
  display: inline-block;
  float: right;

  margin-right: 20px;

  font-size: 30px;
  letter-spacing: 0px;
  color: #232323;
}
.product_list001 {
  margin: 0;
}
.product_box024 {
  display: block;
  margin-top: 40px;
}

@media screen and (max-width: 1024px) {
  .product_box016 {
    position: absolute;
    width: 70%;
    height: 90%;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: #ffffff;

    padding-left: 40px;
    padding-right: 40px;
    padding-top: 50px;
    padding-bottom: 80px;
    box-sizing: border-box;
  }
  .product_box021 {
    display: inline-block;
    float: left;

    width: 50%;

    border-right: 1px solid #d4d4d4;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .product_box022 {
    display: inline-block;

    width: 50%;

    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .product_text009 {
    font-size: 22px;
    letter-spacing: 0px;
    color: #1e1e1e;
  }
  .product_text010 {
    font-size: 18px;
    letter-spacing: 0px;
    color: #1e1e1e;

    margin-top: 10px;
  }
  .product_text011 {
    font-size: 18px;
    letter-spacing: 0px;
    color: #1e1e1e;
  }
  .product_text012 {
    font-size: 18px;
    letter-spacing: 0px;
    color: #3a3a3a;

    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .product_text013 {
    font-size: 18px;
    letter-spacing: 0px;
    color: #1e1e1e;
  }
  .product_text014 {
    font-size: 16px;
    letter-spacing: 0px;
    color: #3a3a3a;

    margin-top: 10px;
  }
  .product_text015 {
    font-size: 18px;
    letter-spacing: 0px;
    color: #1e1e1e;

    margin-top: 30px;
  }
  .product_checkBox001 {
    display: inline-block;
    float: left;

    width: 18px;
    height: 18px;
  }
  .product_text016 {
    display: inline-block;

    /* font-family: "Arial Rounded MT", sans-serif; */
    font-size: 16px;
    letter-spacing: 0px;
    color: #3a3a3a;

    margin-left: 5px;
    margin-top: 4px;
  }
  .product_text017 {
    font-size: 26px;
  }
  .product_text018 {
    font-size: 26px;
  }
  .product_button001 {
    width: 136px;
    height: 36px;
    border-radius: 5px;
    background: #82549d;

    /* font-family: "Arial Rounded MT Bold", sans-serif; */
    font-size: 18px;
    letter-spacing: 0px;
    color: #ffffff;
    cursor: pointer;
  }
}
@media screen and (max-width: 768px) {
  .product_arrow001 {
    display: none;
  }
  .product_text007 {
    float: none;
    width: auto;
    margin-top: 10px;
  }

  .product_box016 {
    position: absolute;
    width: 70%;
    height: 90%;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: #ffffff;

    padding-left: 15px;
    padding-right: 15px;
    padding-top: 50px;
    padding-bottom: 80px;
    box-sizing: border-box;
  }
  .product_text017 {
    font-size: 22px;
  }
  .product_text018 {
    font-size: 22px;
  }
  .product_button001 {
    width: 136px;
    height: 36px;
    border-radius: 5px;
    background: #82549d;

    /* font-family: "Arial Rounded MT Bold", sans-serif; */
    font-size: 18px;
    letter-spacing: 0px;
    color: #ffffff;
    cursor: pointer;
  }
}
@media screen and (max-width: 480px) {
  .product {
    width: 100%;
    height: auto;

    margin: 0 auto;

    padding-top: 35px;
    padding-bottom: 35px;
  }
  .product_text003 {
    margin-bottom: 20px;
  }
  .product_box005 {
    font-size: 20px;
  }
  .product_box006 {
    font-size: 20px;
  }
  .product_text001 {
    margin-top: 12px;
  }
  .product_text002 {
    margin-top: 12px;
  }
  .product_box009 {
    display: block;
    float: none;
    width: 100%;
    padding-right: 0px;
  }
  .product_box010 {
    display: block;
    width: 100%;
  }
  .product_box011 {
    display: block;

    width: 100%;
    height: 156px;

    margin: 0 auto;
    margin-top: 40px;

    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;

    border: 1px solid #979797;
  }
  .product_arrow001 {
    display: inline-block;
    float: left;

    width: 16px;
    cursor: pointer;
    margin-right: 20px;
    transition: 0.25s;
  }
  .product_text007 {
    width: auto;
    float: none;
    margin-top: 10px;
  }

  .product_box016 {
    position: absolute;
    width: 100%;
    height: 100%;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: #ffffff;

    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
    box-sizing: border-box;
    overflow: auto;
  }
  .product_box017 {
    display: inline-block;
    float: left;

    width: auto;
    height: auto;

    margin-top: 10px;
  }
  .product_box018 {
    display: inline-block;
    width: calc(100% - 70px);
    min-height: 100px;
    height: auto;

    padding-left: 20px;
    padding-right: 0px;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .product_image001 {
    width: 70px;
    height: 70px;
  }
  .product_text009 {
    /* font-family: "Arial Rounded MT Bold", sans-serif; */
    font-size: 18px;
    letter-spacing: 0px;
    color: #1e1e1e;
  }
  .product_text010 {
    /* font-family: "Arial Rounded MT", sans-serif; */
    font-size: 16px;
    letter-spacing: 0px;
    color: #1e1e1e;

    margin-top: 10px;
  }
  .product_box020 {
    display: block;

    width: 100%;
    height: auto;

    margin-top: 25px;
  }
  .product_list001 {
    padding-left: 20px;
  }
  .product_box021 {
    display: block;

    width: 100%;
    height: auto;

    border: none;
    padding-right: 0px;
  }
  .product_box022 {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  .product_text011 {
    /* font-family: "Arial Rounded MT Bold", sans-serif; */
    font-size: 16px;
    letter-spacing: 0px;
    color: #1e1e1e;
  }
  .product_text012 {
    /* font-family: "Arial Rounded MT", sans-serif; */
    font-size: 14px;
    letter-spacing: 0px;
    color: #3a3a3a;

    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .product_text013 {
    /* font-family: "Arial Rounded MT Bold", sans-serif; */
    font-size: 16px;
    letter-spacing: 0px;
    color: #1e1e1e;
  }
  .product_text014 {
    /* font-family: "Arial Rounded MT", sans-serif; */
    font-size: 14px;
    letter-spacing: 0px;
    color: #3a3a3a;

    margin-top: 10px;
  }
  .product_text015 {
    /* font-family: "Arial Rounded MT Bold", sans-serif; */
    font-size: 16px;
    letter-spacing: 0px;
    color: #1e1e1e;

    margin-top: 10px;
  }
  .product_checkBox001 {
    display: inline-block;
    float: left;

    width: 14px;
    height: 14px;
  }
  .product_text016 {
    display: inline-block;

    /* font-family: "Arial Rounded MT", sans-serif; */
    font-size: 14px;
    letter-spacing: 0px;
    color: #3a3a3a;

    margin-left: 5px;
    margin-top: 0px;
  }
  .product_text017 {
    font-size: 22px;
  }
  .product_text018 {
    font-size: 22px;
  }
  .product_button001 {
    width: 110px;
    height: 36px;
    border-radius: 5px;
    background: #82549d;

    /* font-family: "Arial Rounded MT Bold", sans-serif; */
    font-size: 18px;
    letter-spacing: 0px;
    color: #ffffff;
    cursor: pointer;
  }
  .product_text017_change {
    right: 150px;
    font-size: 22px;
  }
  .product_box024 {
    display: block;
    margin-top: 60px;
  }
}
</style>
