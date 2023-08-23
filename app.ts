const person = {
    name: 'Elbert',
    age: 21,
    hobbies: ['Programming', 'Gaming']
};

console.log(person.name);
console.log(person.age);

for(const hobby of person.hobbies){
    console.log(hobby);
}