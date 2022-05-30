import { fallbackLng } from "../constants";
import i18n from "i18next";

export const getLang = () => {
  let lang = localStorage.getItem("language");
  if (lang === "uz" || lang === "ru" || lang === "en") return lang;
  return fallbackLng;
}


export const setLang = (lang) => {
  localStorage.setItem("language", lang)
}

export const changeLang = (lang) => {
  i18n.changeLanguage(lang);
}

export const setIsImage = (isImage) => {
  localStorage.setItem("isImage", isImage);
}

export const getIsImage = () => {
  return localStorage.getItem("isImage");

}
