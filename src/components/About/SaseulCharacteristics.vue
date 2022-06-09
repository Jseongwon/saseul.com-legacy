<template>
  <div class="about-characteristic-list">
    <div class="about-characteristic-element">
      <div class="about-characteristic-icon">
        <img src="../../assets/infographic/icon_1.png" />
      </div>
      <div class="about-characteristic-label">
        <div>Unique Consensus</div>
        <div>Algorithm from Scratch</div>
      </div>
    </div>
    <div class="line my-auto"></div>
    <div class="about-characteristic-element">
      <div class="about-characteristic-icon">
        <img src="../../assets/infographic/icon_2.png" />
      </div>
      <div class="about-characteristic-label">
        <div>Fully-customizable Settings</div>
        <div>for Individual Mainnets</div>
      </div>
    </div>
    <div class="line my-auto"></div>
    <div class="about-characteristic-element">
      <div class="about-characteristic-icon">
        <img src="../../assets/infographic/icon_3.png" />
      </div>
      <div class="about-characteristic-label">
        <div>Proved Performance with</div>
        <div>Efficient Architecture</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SaseulCharacteristics",
};
</script>

<style scoped>
.line {
  height: 229px;
  border-right: 1px solid #bbbbbb;
}
@media screen and (max-width: 770px) {
  .line {
    height: 1px;
    width: 90%;
    border-top: 1px solid #bbbbbb;
  }
}

.about-characteristic-list {
  padding: 60px 40px 0;
  display: flex;
  margin: 0 auto;
}

.about-characteristic-element {
  width: 33.3333333333%;
  flex: 1;
  padding: 20px;
}

.about-characteristic-icon {
  width: 100%;
  text-align: center;
  padding: 10px 0;
}

.about-characteristic-icon > img {
  width: 160px;
  padding: 12px;
  /*border-radius: 16px;*/
  /*border: 1px solid #d2d2d2;*/
}

.about-characteristic-label {
  text-align: center;
  font-weight: 600;
  color: #2d2d2d;
  font-size: 21px;
  margin-bottom: 10px;
}

/*           Characteristics ~ under 768           */

@media screen and (max-width: 768px) {
  .about-characteristic-list {
    flex-wrap: wrap;
  }
  .about-characteristic-element {
    padding: 10px 0;
    flex: 1 1 100%;
    display: flex;
    align-items: center;
    align-content: center;
  }

  .about-characteristic-icon {
    flex: 0;
    padding: 0;
  }

  .about-characteristic-icon > img {
    width: 80px;
    padding: 4px;
    margin-right: 10px;
    border-radius: 12px;
  }

  .about-characteristic-label {
    text-align: left;
    font-size: 18px;
    padding-left: 10px;
  }
}

@media screen and (max-width: 480px) {
  .about-characteristic-list {
    padding: 60px 20px 0;
  }
}
</style>
