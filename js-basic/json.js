// Object to JSON
// JSON.stringify

let json = JSON.stringify(true);
console.log(json);
console.log(typeof json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);
console.log(typeof json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
console.log(typeof json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

console.clear();
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`${key} ${value}`);
  return key === "name" ? "minji" : value;
});
console.log(json);
//JSON to Object

console.clear();

const obj = JSON.parse(json, (key, value) => {
  console.log(`${key} ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log("parsing BirthDate", obj.birthDate.getDate());
