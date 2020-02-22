import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const en = require("./locales/en.json");
  const tr = require("./locales/tr.json");

  return {
    en,
    tr
  };
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "tr",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "tr",
  messages: loadLocaleMessages()
});
