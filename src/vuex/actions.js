import axios from "axios";
import router from "../router/index";
import emailjs from "emailjs-com";

// const baseUrl = "http://localhost:5000";
const baseUrl = "https://api.saseul.com";

//한솔님 계정
const serviceID = "service_qw6g4yg";
const templateID_request = "template_nm6qd3c";
const templateID_password = "template_xxavioa";
const userID = "user_CciQ5GCyYVabuPHakTDEM";

export const actions = {
  account: async function ({ commit }, data) {
    let resData = {};
    try {
      const result = await axios.post(`${baseUrl}/account/${data.url}`, data);
      resData = {
        status: "success",
        data: result.data,
      };
      if (data.url === "signup") {
        router.push("/signin");
      } else if (data.url === "signin") {
        commit("setUserData", resData);
      } else if (data.url === "signout") {
        commit("clearUserData", resData);
      }
    } catch (error) {
      resData = {
        status: "fail",
        data: error.response.data,
      };
      alert(resData.data);
    }
  },
  user: async function ({ commit }, data) {
    let resData = {};
    try {
      if (data.url === "info") {
        if (data.method === "put") {
          const result = await axios.put(`${baseUrl}/user/${data.url}`, data);
          resData = {
            status: "success",
            data: result.data,
          };
          alert(resData.data);
          window.open("/", "_self");
        }
      }
    } catch (error) {
      resData = {
        status: "fail",
        data: error.response.data,
      };
      alert(resData.data);
    }
  },
  sendEmail: async function ({ commit }, data) {
    emailjs.send(serviceID, templateID_request, data, userID).then(
      (result) => {
        alert("SUCCESS!", result.status, result.text);
      },
      (error) => {
        alert("FAILED...", error);
      }
    );
  },
  sendPassword: async function ({ commit }, data) {
    let resData = {};
    try {
      const isUser = await axios.get(`${baseUrl}/user/${data.url}`, {
        params: {
          email: data.email,
        },
      });

      resData = {
        status: "success",
        data: isUser.data,
      };

      if (resData.status === "success") {
        let sendData = {
          to_email: resData.data.userInfo.email,
          password: data.originPassword,
        };

        emailjs.send(serviceID, templateID_password, sendData, userID).then(
          (result) => {
            resData.data.userInfo.password = data.password;
            resData.data.userInfo.userId = resData.data.userInfo.id;

            axios.put(`${baseUrl}/user/${data.url}`, resData.data.userInfo);
            alert("SUCCESS!", result.status, result.text);
          },
          (error) => {
            alert("FAILED...", error);
          }
        );
      }
    } catch (error) {
      alert(error.response.data);
    }
  },
  checkToken: async function ({ commit }) {
    let resData = {};
    try {
      if (!localStorage.getItem("userInfo")) {
        return;
      }
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      await axios.post(`${baseUrl}/account/checktoken`, {
        token: userInfo.token,
      });
      resData = {
        status: "token",
        data: userInfo,
      };
      commit("setUserData", resData);
    } catch (error) {
      resData = {
        status: "fail",
        data: error.response.data,
      };
      commit("clearUserData", resData);
    }
  },
  news: async function ({ commit }, data) {
    let resData = {};
    try {
      if (data.url === "news") {
        if (data.method === "post") {
          await axios.post(`${baseUrl}/news/${data.url}`, data.formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        } else if (data.method === "put") {
          await axios.put(`${baseUrl}/news/${data.url}`, data);
        }
      }
      const result = await axios.get(`${baseUrl}/news/newslist`);
      resData = {
        status: "success",
        data: result.data,
      };
      // commit("setNewsList", resData);
    } catch (error) {
      resData = {
        status: "fail",
        data: error.response.data,
      };
      console.log(resData.data);
    }
  },
};
