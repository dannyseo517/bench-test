import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

/**
 * convert string date to for example Jan-1st, 2019 format
 * @param value string representation of number
 */
export const formatDate = (value: string) => {
  dayjs.extend(advancedFormat);
  return dayjs(value).format('MMM-Do, YYYY');
};

/**
 * convert currency to a readable format using Intl numberformat
 * @param value number to convert to currency
 * @param currency default is USD for US Dollar
 */
export const formatNumberToCurrency = (
  value: number,
  currency: string = 'USD'
) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(
    Number(value)
  );
};
