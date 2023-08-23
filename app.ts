const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Elbert",
  age: 21,
  hobbies: ["Programming", "Gaming"],
  role: [1, "owner"],
};

console.log(person.name);
console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
