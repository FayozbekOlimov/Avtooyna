import { useTranslation } from 'react-i18next';
import { getLang } from '../../helper';


export const useT = () => {
  const { t } = useTranslation();
  return { t, lang: getLang() };
}