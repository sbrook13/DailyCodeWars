// 10.19.2020 algorithm practice, Restructure Array
const example1 = {
  a: [1, 2, 3, 4, 5],
  d: 4
}

function rotLeft(a, d) {
  return [...a.slice(d), ...a.slice(0,d)]
}

rotLeft(example1.a, example1.d)