// abstract class Geom {
//   width: number | undefined;
//   getType() {
//     return 'Geom'
//   }
//   abstract getArea(): number;
// }
// class Circle extends Geom {
//   getArea() {
//     return 111
//   }
// }
// class Square extends Geom {
//   getArea() {
//     return 222
//   }
// }

interface person6 {
  name: string;
}
interface teacher extends person6 {
  teaching: number;
}
interface student extends person6 {
  studentIng: number;
}
const teacher = {
  name: 'lee',
  teaching: 1
}
const student = {
  name: 'lee2',
  studentIng: 2
}
const getUserInfo = (user: person6) => {
  console.log(user);
  // console.log(user.name);
}
console.log(getUserInfo(teacher));
console.log(getUserInfo(student));

