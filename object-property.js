const student = [
  { id: 21, name: "Omor sani" },
  { id: 43, name: "Mousumi" },
  { id: 44, name: "Dipjol" },
  { id: 420, name: "Misha" },
];
//let names = [];

// for (let i = 0; i < student.length; i++) {
//   const element = student[i];
//   const getName = element.name;
//   names.push(getName);
// }

// const names = student.map((s) => s.name);
// const ids = student.map((x) => x.id);
// const bigger = student.filter((s) => s.id > 40);
const biggerOne = student.find((s) => s.id > 40);
console.log(biggerOne);
