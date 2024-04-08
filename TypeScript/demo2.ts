// 数组
const arr: (number | string)[] = ['A', 1, 2]

type User = {
  name: string,
  age: number
}
const objectArr: User[] = [{ name: '张三', age: 1 }, { name: '李四', age: 1 }]

class Teacher {
  name: string;
  age: number
}
const objectArr1: Teacher[] = [new Teacher(), { name: '张三', age: 1 }]

//  元组 tuple
const tuple: [number, string, string] = [1, '2', '3']