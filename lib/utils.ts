export const isValidStringLength = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const formatDateToExperiences = (dateString: string) => {
  if (dateString == 'Atual') {
    return dateString;
  }

  const [month, year] = dateString.split('/').map(Number);


  if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
    return 'Invalid Date';
  }

  const date = new Date(year, month - 1, 1);

  const monthFormatter = new Intl.DateTimeFormat('pt-BR', { month: 'short' });
  const yearFormatter = new Intl.DateTimeFormat('pt-BR', { year: 'numeric' });

  const formattedMonth = monthFormatter.format(date).replace(".", "");;
  const formattedYear = yearFormatter.format(date);

  return `${formattedMonth}/${formattedYear}`;
}
