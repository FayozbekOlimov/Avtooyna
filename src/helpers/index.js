import { fallbackLng } from "../constants";
import i18n from "i18next";

export const fallbackMode = "light";

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

// export const setModeLocalstr = (color) => {
//   localStorage.setItem("mode", color)
// }

// export const getModeFromLocalstr = () => {
//   let mode = localStorage.getItem("mode");
//   if (!mode) return fallbackMode;
//   return mode;
// }

export const setIsImage = () => {
  localStorage.setItem('isImage', true);
}

export const getIsImage = () => {
  let isImage = localStorage.getItem('isImage');
  if (!isImage) return true;
  return isImage;
}

export const toggleIsImage = () => {
  let isImage = getIsImage();
  setIsImage(!isImage);
}
