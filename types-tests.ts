enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 1,
  AUTHOR = 2,
}

const person = {
  name: "Elbert",
  age: 21,
  hobbies: ["Programming", "Gaming"],
  role: Role.ADMIN,
};

console.log(person.name);
console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role == Role.ADMIN) {
  console.log(person.role);
}
