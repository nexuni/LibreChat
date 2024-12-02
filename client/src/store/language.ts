import Cookies from 'js-cookie';
import { atomWithLocalStorage } from './utils';

const defaultLang = () => {
  const userLang = navigator.language || navigator.languages[0];
  return Cookies.get('lang') || localStorage.getItem('lang') || userLang;
};

const lang = atom({
  key: 'lang',
  default: localStorage.getItem('lang') || "zh-TW",//userLang,
});

export default { lang };
