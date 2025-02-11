import { useContext, useCallback } from 'react';
import defaultLocale from '../locales/default';
import { CustomContext, CustomValue } from '../CustomProvider/CustomProvider';
import { format as formatFns } from '../utils/dateUtils';

const mergeObject = (list: any[]) =>
  list.reduce((a, b) => {
    a = { ...a, ...b };
    return a;
  }, {});

const getDefaultRTL = () =>
  typeof window !== 'undefined' && (document.body.getAttribute('dir') || document.dir) === 'rtl';

/**
 * A hook to get custom configuration of `<CustomProvider>`
 * @param keys
 */
function useCustom<T = any>(keys: string | string[], overrideLocale?): CustomValue<T> {
  const {
    locale = defaultLocale,
    rtl = getDefaultRTL(),
    formatDate: format = formatFns
  } = useContext(CustomContext);

  const componentLocale: T =
    typeof keys === 'string' ? locale?.[keys] : mergeObject(keys.map(key => locale?.[key]));

  const formatDate = useCallback(
    (date: Date, formatStr: string) => {
      return format(date, formatStr);
    },
    [format]
  );

  return {
    locale: overrideLocale || componentLocale,
    rtl,
    formatDate
  };
}

export default useCustom;
