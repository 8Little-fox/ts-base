
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any
type MyPromiseType<T> = T extends Promise<infer R> ? R : any


type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
type MyMutable<T> = {
  -readonly [P in keyof T]: T[P]
}
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type MyExclude<T, U> = T extends U ? never : T
type MyOmit<T, K> = MyPick<T, MyExclude<keyof T, K>>
type RequiredKeys<T> = {
  [P in keyof T]-?: T extends Record<P, T[P]> ? P : never
}[keyof T]
type OptionalKeys<T> = {
  [P in keyof T]-?: {} extends Pick<T, P> ? P : never
}[keyof T]



type First<T extends any[]> = T extends [infer L, ...infer R] ? L : never
type Last<T extends any[]> = T extends [...infer L, infer R] ? R : never
type ArrayLength<T> = T extends { length: number; } ? T['length'] : never
type Concat<T extends any[], U extends any[]> = [...T, ...U]
type Push<T extends any[], U> = [...T, U]
type Pop<T extends any[]> = T extends [...infer L, infer R] ? L : never  

