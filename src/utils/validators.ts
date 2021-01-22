export const validateText = (text: string): boolean => {
  if (!text) {
    return false;
  }

  const regex = /^[\-0-9a-zA-Z=., ]+$/;
  return regex.test(String(text).toLowerCase());
};
