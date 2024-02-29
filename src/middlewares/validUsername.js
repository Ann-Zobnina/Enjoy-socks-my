export default function validUsername(username) {
  return username
      && username.length >= 5
      && !username.includes(' ');
}
