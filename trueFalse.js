//Falsy
// false
// 0
// ""
// null
// NaN
// undefined
//Truthy
// "0" ' ' [] {} true

const age = 4;

if (age || age == 0) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}
