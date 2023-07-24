import Vue from "vue";
import App from "./App.vue";

import "carbon-components/scss/globals/scss/styles.scss";
// @ts-ignore
import CarbonComponentsVue from "@carbon/vue/src/index";

Vue.use(CarbonComponentsVue);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
