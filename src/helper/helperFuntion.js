export function findVowels(str) {
  return str.match(/[aeiou]/gi) || [];
}

export function findConsonans(str) {
  return str.match(/[bcdfghjklmnpqrstvwxz]/gi) || [];
}
