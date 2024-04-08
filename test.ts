const hello = (name: string) => {
  return `hello${name}`
}
hello('111')

let arr: number[] = [1, 2, 3]
arr.pop()

// interface 
interface Person {
  name: string,
  age?: number, // 可选属性
}
let obj: Person = {
  name: 'sdslfj',
  // age: 2
}

//Fun

interface ISum {
  (x: number, y: number, z?: number): number
}
const add = (x: number, y: number, z?: number): number => {
  if(typeof z === 'number') {
    return x + y + z
  }
  else {
    return x + y 
  }
}
let result: ISum = add

// 联合类型/类型断言,手动指定一个值的类型
let str : number | string 

function getLength(input: string | number): number {
  const str = input as string
  if(str.length) {
    return str.length
  }else {
    const number = input as number
    return number.toString().length
  }
}


// 类
interface Radio{
  switchRadio(trigger:boolean):void
}
class Car {
  switchRadio(trigger: boolean){

  }
}

class CellPhone implements Radio{
  switchRadio(trigger:boolean) {

  }
}

// 泛型

function echo<T> (arg: T) : T {
  return arg
}

const res = echo(111)

//约束泛型

interface objLen {
  length: number
}
function demo<T extends objLen>(arg: T) :T {
  console.log(arg.length);
  return arg
}

interface keyPair<T, U> {
  key: T,
  value: U
}

const a: keyPair<number, string> = { key: 1, value: 'string' }
const b: number[] = [1,2,3]

// 类型别名 