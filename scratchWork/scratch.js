function findKeyWords(str) {
  const regex = /\w+/gi;
  const result = str.match(regex);
  const searchWords = result.filter((word) => word.length >= 5);

  return searchWords;
}

console.log(
  findKeyWords(
    "This is a post about living in Galveston, TX! I love my life at the beach!"
  )
);
