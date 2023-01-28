// function getDrinkByProfession(param){
//     if (param.toLowerCase === "Jabroni"){
//       return "Patron Tequila";
//     } if (param.toLowerCase === "School Counselor") {
//       return "Anything with Alcohol";
//     } if (param.toLowerCase === "Programmer") {
//       return "Hipster Craft Beer";
//     } if (param.toLowerCase === "Bike Gang Member") {
//       return "Moonshine";
//     } if (param.toLowerCase === "Politician") {
//       return "Your tax dollars";
//     } if (param.toLowerCase === "Rapper") {
//       return "Cristal";
//     } else {
//       return "Beer";
//     }
// } 

function getDrinkByProfession(param){
    
    if ("Jabroni"){
    return "Patron Tequila";
  } if ("School Counselor") {
    return "Anything with Alcohol";
  } if ("Programmer") {
    return "Hipster Craft Beer";
  } if ("Bike Gang Member") {
    return "Moonshine";
  } if ("Politician") {
    return "Your tax dollars";
  } if ("Rapper"){
    return "Cristal";
  } else {
    return "Beer";
  }
  }

console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");