<template>
  <div>
    <Navbar class="position-absolute w-100 p-0" />
    <div class="contact">
      <div class="contact-content">
        <div class="contact-title">Contact Us<br /></div>

        <div class="contact-title2">ArtiFriends Inc.</div>
        <div class="contact-text inline">
          RM 1908, Jeongjail-ro 248, Bundang-gu, Seongnam-si, Gyeonggi-do,
          Republic of Korea (13554)
        </div>

        <div class="contact-title2">
          Email
          <span class="contact-text">help@artifriends.com Tel</span>
          <span class="contact-text">+82) 31-712-8130</span>
        </div>

        <!--        <div class="contact-title2">-->
        <!--          Tel-->
        <!--          <span class="contact-text">+82) 31-712-8130</span>-->
        <!--        </div>-->
      </div>
    </div>
    <div class="contact-content-2">
      <div class="map-box" id="map"></div>
    </div>
  </div>
</template>

<script>
import GoogleMapsLoader from "google-maps";
import Navbar from "./Navbar";

GoogleMapsLoader.KEY = "AIzaSyCal34H7Iip1YMWq57aJcTuiyX7n1koq-M";
GoogleMapsLoader.VERSION = "3.35";

export default {
  name: "contact",
  components: { Navbar },
  mounted() {
    GoogleMapsLoader.load((google) => {
      const el = document.getElementById("map");
      const center = new google.maps.LatLng({
        lat: 37.372759,
        lng: 127.107351,
      });
      const options = { zoom: 16, center };
      const map = new google.maps.Map(el, options);
      new google.maps.Marker({
        position: center,
        map: map,
      });
    });
  },
};
</script>

<style scoped>
.contact {
  display: flex;
  align-items: center;
  /* 350px */
  height: 320px;
  background-image: url("../assets/back-1.png");
  background-size: cover;
  color: #ffffff;
}
.contact-content {
  flex: 1;
  padding: 0 60px;
  margin: 45px 0 0 0;
  max-width: 1024px;
}

.contact-title {
  font-size: 30px;
  font-weight: bold;
}

.contact-title2 {
  font-size: 16px;
  font-weight: bold;
}

.contact-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
}
.contact-text.inline {
  line-height: 1.5;
}
.contact-content-2 {
  display: flex;
  justify-content: center;
  padding: 0 60px;
  margin: 0 auto;
  max-width: 1024px;
}
.map-box {
  height: 600px;
  width: 100%;
  margin: 60px 0;
}
@media screen and (max-width: 450px) {
  .contact-title {
    font-size: 1.2rem;
  }
  .contact-title2 {
    font-size: 0.6rem;
  }
  .contact-text {
    font-size: 0.6rem;
  }
  .contact-text.inline {
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 480px) {
  /*.contact-title {*/
  /*font-size: 24px;*/
  /*}*/

  /*.contact-title2 {*/
  /*font-size: 16px;*/
  /*}*/

  /*.contact-text {*/
  /*font-size: 16px;*/
  /*}*/

  .contact {
    height: 250px;
  }
  .contact-content {
    padding: 0px 40px;
  }
  .contact-content-2 {
    padding: 0;
    margin: 0px 40px;
  }
  .map-box {
    margin: 30px 0;
    height: 300px;
  }
}
</style>
