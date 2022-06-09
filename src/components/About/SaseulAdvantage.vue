<template>
  <div class="about-saseul-advantage">
    <div class="about-saseul-title">SASEUL Advantage</div>
    <div class="about-saseul-text">
      SASEUL is the blockchain engine developed by the blockchain team of
      ArtiFriends. Inc. The consensus algorithm for SASEUL was newly introduced
      by Jungwoo Lee, CEO of ArtiFriends. Inc, in 2017. By focusing on role
      distribution of the nodes in the network, SASEUL keep the philosophy of
      decentralization. The nodes which can be either light node, validator,
      supervisor or arbiter have both responsibility and authority SASEUL have
      the unique properties which are different from others.<br /><br />
      - To be public or private is not a big deal<br />
      - Super Fast, you can do your business that other blockchain can’t
      handle.<br />
      - Punishment for malfunctions leads the nonfaulty state and keeps the
      network fast.
    </div>
  </div>
</template>

<script>
export default {
  name: "SaseulAdvantage",
};
</script>

<style scoped>
.about-saseul-advantage {
  padding: 60px 40px;
  /*max-width: 1024px;*/
  margin: 0 auto;
  background-color: #ededed;
}

.about-saseul-title {
  margin: 0 auto;
  font-weight: bold;
  font-family: NotoSans;
  font-size: 30px;
  text-align: center;
  color: #141414;
}
.about-saseul-text {
  /*word-wrap: break-word;*/
  margin: 31px auto;
  font-family: NotoSans;
  font-size: 20px;
  color: #141414;
}

@media screen and (max-width: 480px) {
  .about-saseul-advantage {
    padding: 60px 20px 0;
  }

  .about-saseul-title {
    font-size: 21px;
  }

  .about-saseul-text {
    font-size: 16px;
    line-height: 25px;
    text-align: initial;
  }
}
</style>
