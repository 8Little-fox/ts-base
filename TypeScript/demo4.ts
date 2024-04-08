// 类和继承
class Person1 {
  name = 'dell';
  getName() {
    return this.name
  }
}
class Teacher1 extends Person1 {
  getTeacherName() {
    return 'dell'
  }
  getName() {
    return super.getName() + 'dell'
  }
}
const person1 = new Teacher1()
console.log(person1.getName());
