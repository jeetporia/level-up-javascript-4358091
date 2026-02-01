const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Max",
  [password] : "12345678",
  age: 24
}

console.log(user.username);
console.log(user.password);