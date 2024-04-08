// interface 和 type 类似，但是 interface 可以定义函数类型，而 type 不行
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}
interface Teacher extends Person {
  teach(): string
}
interface SayHi {
  (word: string): string
}
const getPersonName = (person: Person): void => {
  console.log(person.name)
}
const setPersonName = (person: Teacher, name: string): void => {
  person.name = name
  console.log(person.name);

}
const person = {
  name: 'dell',
  sex: 'male',
  age: 1,
  say() {
    return 'say hello'
  },
  teach() {
    return 'teach';
  }
}
getPersonName(person)
setPersonName(person, '111')

class User implements Person {
  name = 'dell';
  say() {
    return 'hello'
  }
}
const say: SayHi = (word: string) => {
  return word
}