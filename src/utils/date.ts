import { format, isValid, parse } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDate = (date: Date | string, formatStr: string = 'dd/MM/yyyy'): string => {
  if (!date) return '';
  
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  
  if (!isValid(parsedDate)) return '';
  
  return format(parsedDate, formatStr, { locale: es });
};

export const parseDate = (dateStr: string, formatStr: string = 'dd/MM/yyyy'): Date | null => {
  const parsedDate = parse(dateStr, formatStr, new Date());
  return isValid(parsedDate) ? parsedDate : null;
};