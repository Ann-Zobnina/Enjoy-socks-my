export default function validUsername(username) {
  const digits = '0123456789';
  return username
      && username.length >= 3
      && !username.includes(' ')
      && !username.split('').every((char) => digits.includes(char));
}