//  泛型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join<number, string>(1, '2')

interface Item{
  name: string
}
class DataManager<T extends Item> {
  constructor( private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name
  }
}