import {lettersList, numberReg} from "../constants";

export const generateStr = (length = 5) => {
  let text = "";

  for (let i = 0; i < length; i++)
    text += lettersList.charAt(Math.floor(Math.random() * lettersList.length));

  return text;
}

export const isPalindrome = (str) => {
  let len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;

  return true;
}

export const isNumber = (str) => numberReg.test(str)

