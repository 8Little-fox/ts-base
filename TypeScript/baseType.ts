// 基础类型 null, undefined, symbol, boolean, number, string, void

// 对象类型 {}, Class, function, []
class Person { }

const teater: {
  name: string,
  age: number,
} = {
  name: '张三',
  age: 18
}
// 数组类型
const numbers: number[] = [1, 2, 3]
const dell: Person = new Person()
const getTotal: () => number = () => {
  return 1
}