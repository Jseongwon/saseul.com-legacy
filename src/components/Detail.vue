<template>
  <div class="detail">
    <Navbar class="position-absolute w-100 p-0" />
    <banner />
    <detail-content />
  </div>
</template>

<script>
import Banner from "./Detail/Banner";
import DetailContent from "./Detail/DetailContent";
import Navbar from "./Navbar";

export default {
  name: "Detail",
  components: { Navbar, DetailContent, Banner },
};
</script>

<style scoped></style>
