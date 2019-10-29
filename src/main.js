import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faHtml5,
  faCss3,
  faJs,
  faGitAlt,
  faVuejs,
  faReact,
  faNodeJs,
  faNpm,
  faYarn,
  faGulp,
  faSass
} from "@fortawesome/free-brands-svg-icons";
import {
  faEye,
  faSpinner,
  faEllipsisH,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faGithub,
  faLinkedin,
  faTwitter,
  faHtml5,
  faCss3,
  faJs,
  faGitAlt,
  faVuejs,
  faReact,
  faNodeJs,
  faNpm,
  faYarn,
  faGulp,
  faSass,
  faEye,
  faSpinner,
  faEllipsisH,
  faEnvelope
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({ render: h => h(App) }).$mount("#app");
