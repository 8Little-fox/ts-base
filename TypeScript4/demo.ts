type myRequired<T> = {
  [P in keyof T]-?: T[P];
}
type Person = {
  name: string;
  age: number;
}
type result = myRequired<Person>
