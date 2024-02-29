export default function validUsername(username) {
  return username
      && username.length >= 3
      && !username.includes(' ');
}
