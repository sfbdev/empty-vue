import Vue from "vue";
import App from "./App.vue";

import "ty-feedback/dist/ty-feedback.css";
import FeedbackTy from "ty-feedback";

Vue.use(FeedbackTy, { clientId: "250a7f74-e69f-4d35-9404-dc08a3689beb" });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
