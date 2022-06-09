import Vue from "vue";
import Router from "vue-router";
import About from "@/components/About";
import BaaS from "@/components/BaaS";
import Product from "@/components/Product";
import Detail from "@/components/Detail";
import Contact from "@/components/Contact";
import Signin from "@/components/Signin";
import Signup from "@/components/Signup";
import Mypage from "@/components/Mypage";
import ErrorPage from "@/components/Error";
import LicensePolicy from "@/components/Product/LicensePolicy";
import Admin from "@/components/Admin";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "About", component: About },
    { path: "/BaaS", name: "BaaS", component: BaaS },
    { path: "/product", name: "Product", component: Product },
    { path: "/detail", name: "Detail", component: Detail },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/signin", name: "Signin", component: Signin },
    { path: "/signup", name: "Signup", component: Signup },
    { path: "/mypage", name: "Mypage", component: Mypage },
    { path: "/licensepolicy", name: "LicensePolicy", component: LicensePolicy },
    { path: "/admin", name: "Admin", component: Admin },
    { path: "/404", name: "ErrorPage", component: ErrorPage },
    { path: "/*", redirect: "/404" },
  ],
});
