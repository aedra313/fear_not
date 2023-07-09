const failMessages = {
  day: 'день по людськи напиши',
  id: 'го 1488))))))',
  militaryData: 'Єба ти народив',
  militaryData2: 'Як мені це впихнути в стікер?',
  civilData: 'ТАРААС',
  civilData2: 'зупинись.',
  russian: 'піздєц',
};

export function validateDay(day, lastDay) {
  if (day <= lastDay || day > lastDay + 1) {
    return failMessages.day;
  }
  return '';
}

export function validateId(id) {
  if (id < 1 || id > 7) {
    return failMessages.id;
  }
  return '';
}

export function validateDataLength(data, fieldName) {
  if (data.length > 20) {
    return failMessages[fieldName];
  }
  return '';
}
