import { useTranslation } from 'react-i18next';
import { getLang } from '../../helpers';


export const useT = () => {
  const { t } = useTranslation();
  return { t, lang: getLang() };
}