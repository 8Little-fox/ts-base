interface Point{
  x: number
}
function tsDemo(data: Point): void {
  console.log(data.x)
}
tsDemo({x: 123})