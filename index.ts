console.log('hello world');
console.log(`This isn't training.  I'm only destroying nature.`);

async function hello() {
  return 'world';
}
const alex = "my name is alex";
console.log(`Testing out ${alex} more ESNext features on typescript`);

//implicitly typing when assigned
let lucky = 23;
/*
This line below will fail because typescript remembers what the type the lucky variable contatins
lucky = '23';
*/

//explicitly typing when assigned
/*
By using a colon and declring any you are telling typescript that unlucky can
be any type and the compiler will not type check it
DO NOT do this unless you have a very very good reason too.
*/
let unlucky: any = 25;
unlucky = '25';

// No typing when assigned
/*
When you assign no value it's automatically given any typing, you can use the
colon to forcibly type it
*/
let beWhatever;
beWhatever = 30;
beWhatever = "30";

let beNumber: number;
beNumber = 30;
// beNumber = "30"; would throw an error in index.ts

interface User {
  name: string;
  ownPet: boolean;
}

const alexUser: User = {
  name: "Alex",
  ownPet: true,
};

console.log(alexUser);
console.log('trying out getting the value of alexuser.name ', alexUser.name);

//Made a few union examples.  These allow you to make a name that can be multiple types.
//MyBool in this instance can either be true or false.  But if you hover over it it's a boolean.
type MyBool = true | false;
type WindowStates = "open" | "closed";
