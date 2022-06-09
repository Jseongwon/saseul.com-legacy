<template>
  <div class="members">
    <div class="member-element-wrap">
      <member-element
        v-for="(member, index) in memberObject.team"
        :key="index"
        :name="member._name"
        :role="member._role"
        :spec1="member._spec1"
        :spec2="member._spec2"
        :spec3="member._spec3"
        :spec4="member._spec4"
        :spec5="member._spec5"
        :profileImgPath="member._imagePath"
      />
    </div>
  </div>
</template>

<script>
import MemberElement from "./MemberElement";

export default {
  name: "Members",
  components: { MemberElement },
  data() {
    let memberObject = {
      team: [
        {
          _name: "Lee Jungwoo",
          _role: "CEO",
          _spec1: "• Co-Founder & Principal Researcher",
          _spec2: "• Former Developer in Woowa Bros",
          _spec3: "• Former CTO in JPCOMPANY",
          _spec4: "• CTO in ArtiWealth",
          _spec5: " ",
          _imagePath: "LeeJungwoo.png",
        },
        {
          _name: "Aesop Lee",
          _role: "CSO",
          _spec1: "• Former IAMCOMPANY Marketing Director",
          _spec2: "• Former Educode CEO",
          _spec3: "",
          _spec4: "",
          _spec5: " ",
          _imagePath: "LeeChangSeop.png",
        },
        {
          _name: "Damian",
          _role: "CMO",
          _spec1: "• B.A. in Asian History, SNU",
          _spec2: "• B.S. in MOT, SNU",
          _spec3: "• Former Midam CEO",
          _spec4: "• Former M&J CEO",
          _spec5: " ",
          _imagePath: "Damian.png",
        },
        {
          _name: "Han Sol",
          _role: "",
          _spec1: "• B.A. in Aesthetics, SNU",
          _spec2: "• Former ATOZ head of the team",
          _spec3: "",
          _spec4: "",
          _spec5: " ",
          _imagePath: "Hansol.png",
        },
        {
          _name: "Lee Yongjae",
          _role: "",
          _spec1: "• B.S. in Computer Science, KAIST",
          _spec2: "• Former Developer in JPCOMPANY",
          _spec3: "",
          _spec4: "",
          _spec5: " ",
          _imagePath: "LeeYongjae.png",
        },
        {
          _name: "Yun Hyungjun",
          _role: "",
          _spec1: "• ArtiFriends Developer",
          _spec2: "",
          _spec3: "",
          _spec4: "",
          _spec5: " ",
          _imagePath: "YunHyungjun.png",
        },
        {
          _name: "Son Heeji",
          _role: "",
          _spec1: "• ArtiFriends Designer",
          _spec2: "• ex Application gymday designer",
          _spec3: "",
          _spec4: "",
          _spec5: " ",
          _imagePath: "SonHeeji.png",
        },
        {
          _name: "Lee Byungsik",
          _role: "",
          _spec1: "• ArtiFriends Designer",
          _spec2: "• Former Designer in Tempos",
          _spec3: "• Former Designer in Talklish",
          _spec4: "• Former Designer in Polio",
          _spec5: "• Former Designer in Samik Industry",
          _imagePath: "LeeByungSik.png",
        },
        {
          _name: "Chae SueRyong",
          _role: "",
          _spec1: "• ArtiFriends Developer",
          _spec2: "",
          _spec3: "",
          _spec4: "",
          _spec5: "",
          _imagePath: "ChaeSueRyong.png",
        },
        {
          _name: "Kim SeungHyun",
          _role: "",
          _spec1: "• ArtiFriends Developer",
          _spec2: "",
          _spec3: "",
          _spec4: "",
          _spec5: "",
          _imagePath: "KimSeungHyun.png",
        },
      ],
    };
    return {
      memberObject,
    };
  },
};
</script>

<style scoped>
.members {
  /*max-width: 1024px;*/
  margin: 0 auto;
  padding: 60px 20px;
}

.member-label {
  display: flex;
  align-items: center;
  align-content: center;
  padding: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #2d2d2d;
}

.member-label-square {
  width: 10px;
  height: 30px;
  margin-right: 15px;
  background-color: #2d2d2d;
}

.member-element-wrap {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.member-class {
  padding: 0 20px;
  font-size: 21px;
  color: #2d2d2d;
  font-weight: 600;
}

@media screen and (max-width: 480px) {
  .member-element-wrap {
    padding: 20px 0;
  }
  .member-class {
    padding: 0;
  }
  .member-label {
    padding: 0 0 20px 0;
  }
}
</style>
