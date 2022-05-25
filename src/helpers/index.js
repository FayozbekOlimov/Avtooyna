import { fallbackLng } from "../constants";
import i18n from "i18next";

export const fallbackMode = "light";

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

export const setModeLocalstr = (color) => {
localStorage.setItem("mode", color)
}

export const getModeFromLocalstr = () => {
  let mode = localStorage.getItem("mode");
  if (!mode) return fallbackMode;
  return mode;
}