import i18n from "i18next";
import { en } from "./en.js";
import { pl } from "./pl.js";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    pl: {
      translation: pl
    }
  },
  lng: "pl"
});

export default i18n;
