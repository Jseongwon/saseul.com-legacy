<template>
  <div>
    <Navbar class="position-absolute w-100 p-0" style="z-index: 999" />
    <product-banner
      @clickProcedure="handleProcedureButton"
      @clickLicense="handleLicensePolicyButton"
    />
    <products v-show="!(procedureButton || licensePolicyButton)" />
    <PurchaseProcedure v-show="procedureButton && !licensePolicyButton" />
    <license-policy v-show="licensePolicyButton && !procedureButton" />
  </div>
</template>

<script>
import ProductBanner from "./Product/ProductBanner";
import Products from "./Product/Products";
import PurchaseProcedure from "./Product/PurchaseProcedure";
import Navbar from "./Navbar";
import LicensePolicy from "./Product/LicensePolicy";

export default {
  name: "Product",
  components: {
    LicensePolicy,
    Navbar,
    Products,
    ProductBanner,
    PurchaseProcedure,
  },
  data() {
    return {
      procedureButton: false,
      licensePolicyButton: false,
    };
  },
  methods: {
    handleProcedureButton() {
      if (this.procedureButton) {
        this.procedureButton = false;
        this.licensePolicyButton = false;
      } else {
        this.procedureButton = true;
        this.licensePolicyButton = false;
      }
    },
    handleLicensePolicyButton() {
      if (this.licensePolicyButton) {
        this.licensePolicyButton = false;
        this.procedureButton = false;
      } else {
        this.licensePolicyButton = true;
        this.procedureButton = false;
      }
    },
  },
};
</script>

<style scoped></style>
