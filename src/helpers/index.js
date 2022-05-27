import { fallbackLng } from "../constants";
import i18n from "i18next";

export const fallbackMode = { color: 'light', isImage: true };

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

export const setModeLocalstr = (mode) => {
  localStorage.setItem("mode", JSON.stringify(mode))
}

export const getModeFromLocalstr = () => {
  let mode = JSON.parse(localStorage.getItem("mode"));
  if (!mode) return fallbackMode;
  return mode;
}

// export const setIsImage = () => {
//   localStorage.setItem('isImage', true);
// }

// export const getIsImage = () => {
//   let isImage = localStorage.getItem('isImage');
//   if (!isImage) return true;
//   return isImage;
// }

// export const toggleIsImage = () => {
//   let isImage = getIsImage();
//   setIsImage(!isImage);
// }
