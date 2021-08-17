import {isNumber, isPalindrome} from "../../helpers";

export const getSpecialStyle = (item) => {
  let style = ''

  if(isPalindrome(item)){
    style += ' palindrome'
  }

  if(isNumber(item)){
    style += ' number'
  }

  return style
}
