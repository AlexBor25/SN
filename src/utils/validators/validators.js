export const required = value => {
  if (value) return undefined;

  return 'Field is required';
}

export const maxLength = maxSym => value => {
  if (value.length > maxSym) return `Max length is ${maxSym} symbols`;

  return undefined;
}