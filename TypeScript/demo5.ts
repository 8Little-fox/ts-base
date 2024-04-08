// getter setter
// class Person5 {
//   constructor(private _name: string) { }
//   get name() {
//     return this._name + ',' + '小米';
//   }
//   set name(name: string) {
//     const realName = name.split(',')[0];
//     this._name = realName;
//   }
// }
// const person5 = new Person5('lee');
// console.log(person5.name);
// person5.name = '小米,lee';
// console.log(person5.name);

class Demo {
  private static instance: Demo;
  private constructor(public name: string) { }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('lee');
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);


