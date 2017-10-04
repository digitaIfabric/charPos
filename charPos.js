function charPos(str){

var charCount = {};
  for (var i = 0; i < str.length; i++) {
    //charCount[str[i]] = 1;

    if (charCount[str[i]] === undefined ) {
      charCount[str[i]] = [i];
    }
    else {
      charCount[str[i]].push(i)
    }
  }
return charCount;

}

console.log(charPos("This t is a string"));


// unshift()