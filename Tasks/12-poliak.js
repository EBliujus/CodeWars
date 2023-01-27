// ąćęłńóśźż 


correctPolishLetters = string => string.replace(/ąćęłńóśźż/g, replacer => 'acelnoszz'['ąćęłńóśźż'.indexOf(correctPolishLetters)])

// ąćęłńóśźż -> acelnoszz

function correctPolishLetters (string) {
    
    // let str = ąćęłńóśźż;
    // const newstr = string.replace(/ąćęłńóśźż/i, "acelnoszz");
    console.log(string)
  }

// console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski")
// console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa")
// console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie")


function replacer(match, p1, p2, p3, offset, string) {
    // p1 is non-digits, p2 digits, and p3 non-alphanumerics
    return [p1, p2, p3].join(" - ");
  }
  const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
  console.log(newString); // abc - 12345 - #$*%
  