import { format } from 'date-fns';
import type { DateRange } from '@/types/shared';
import { getConfig } from '@/data/config';

const formatDateRange = ([from, to]: DateRange, localeCode: 'en' | 'fa' = 'en'): string => {
  const { i18n } = getConfig(localeCode);
  const { locale, dateFormat, translations } = i18n;

  const formatWithLocaleCalendar = (date: Date): string => {
    if (locale.code === 'fa-IR') {
      return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        month: 'long',
        year: 'numeric',
      }).format(date);
    }

    return format(date, dateFormat, { locale });
  };

  return formatWithLocaleCalendar(from).concat(' - ', to ? formatWithLocaleCalendar(to) : translations.now);
};

export default formatDateRange;
