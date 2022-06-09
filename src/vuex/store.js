import Vue from "vue";
import Vuex from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

Vue.use(Vuex);

const state = {
  userInfo: {
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
    purchaseList: [],
  },
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
