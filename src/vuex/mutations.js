import router from "../router/index";

export const mutations = {
  setUserData: function (state, payload) {
    if (payload.status === "success") {
      payload.data.userInfo = { ...payload.data.userInfo, isAuth: true };
      let localData = JSON.stringify(payload.data.userInfo);
      localStorage.setItem("userInfo", localData);
      state.userInfo = payload.data.userInfo;
      router.push("/");
      window.scrollTo(0, 0);
    } else if (payload.status === "token") {
      let localData = payload.data;
      state.userInfo = localData;
    } else {
      localStorage.clear();
      alert("만료된 세션");
    }
  },
  clearUserData: function (state, payload) {
    state.userInfo = {
      id: undefined,
      email: "",
      name: "",
      country: "",
      position: "",
      phone: "",
      company: "",
      address: "",
      token: "",
      isAuth: false,
      products: [],
    };
    window.open("/", "_self");
    window.scrollTo(0, 0);
    console.log(payload.data);
    localStorage.clear();
  },
};
