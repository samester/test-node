exports.parse = (str) => {
  let result = '';
  str.toUpperCase().split(' ').forEach((elem) => {
    result = `${result}${elem.charAt(0)}`;
  });
  return result;
};
