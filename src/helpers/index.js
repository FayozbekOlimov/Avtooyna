import { fallbackLng } from "../constants";
import i18n from "i18next";

export const getLang = () => {
  let lang = localStorage.getItem("lang");
  if (lang === "uz" || lang === "ru" || lang === "en") return lang;
  return fallbackLng;
}


export const setLang = (lang) => {
  localStorage.setItem("lang", lang)
}

export const changeLang = (lang) => {
  i18n.changeLanguage(lang);
}