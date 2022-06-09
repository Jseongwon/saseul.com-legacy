<template>
  <div class="feature">
    <Navbar class="position-absolute w-100 p-0" />
    <feature-banner />
    <feature-content />
    <feature-price-policy />
  </div>
</template>

<script>
import FeatureBanner from "./Feature/FeatureBanner";
import FeatureContent from "./Feature/FeatureContent";
import FeaturePricePolicy from "./Feature/FeaturePricePolicy";
import Navbar from "./Navbar";

export default {
  name: "Feature",
  components: { Navbar, FeatureContent, FeatureBanner, FeaturePricePolicy },
};
</script>

<style scoped></style>
