function SwapCase(str) { 
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) {
      result += str[i].toLowerCase();
    } else if (str[i] !== str[i].toUpperCase()) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}