export const validateEmail = (email: string): boolean => {
  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "gm");

  return emailRegex.test(email);
}

export const validatePassword = (password: string): boolean => {
 return password.length > 3
}