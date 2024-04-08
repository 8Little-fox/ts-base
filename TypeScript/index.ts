let value: string | number
value = 123   // 编译正确
value = '456' // 编译正确
// value = true  // 编译报错


let tsNum: number = 124
let tsStr: string = 'Hello'
let tsFlag: boolean = true
let tsNull: null = null
// let tsUndefinded: undefined = undefined

function sayHello(): void {
  console.log("Hello World11111");
}
sayHello()

let tsAny: any = 123
tsAny = '123'

// 函数的返回值是number 类型
function add(first: number, second: number): number {
  return first + second
}
// 函数的返回值是空void 类型
function sayHello2(): void {
  console.log("Hello World");
}
// 函数的返回值是never类型
function error(message: string): never {
  while (true) {
    console.log(message)
  }
}
// 函数解构注解
function getNumber({ first }: { first: number }) {
  return first
}