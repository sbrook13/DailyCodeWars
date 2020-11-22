// 10.19.2020 algorithm practice, Restructure Array
const example1 = {
  a: [1, 2, 3, 4, 5],
  d: 4
}

function rotLeft(a, d) {
  return [...a.slice(d), ...a.slice(0,d)]
}

rotLeft(example1.a, example1.d)

// 10.26.2020 filter letters out of list
function filter_list(l) {
  return l.filter(element => Number.isInteger(element))
}

// comparing two arrays
function comp(array1, array2){
  if (array1 && array2) {
     const newArray1 = array1.sort(function(a, b) {return a - b})
     const newArray2 = array2.sort(function(a, b) {return a - b}).map(Math.sqrt)
     return JSON.stringify(newArray1) === JSON.stringify(newArray2)
  } else {
   return false
  }
}

function compOther(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
comp(a1, a2)

// 11.15.2020 finding pairs 

function validBraces(braces){
  while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  return braces.length == 0;
}


// 11.17.2020 unique in order 
var uniqueInOrder=function(iterable){
  let i = 0
  let uniqueArray = []
  var last
  while (i < iterable.length) {
    if (iterable[i] !== last) {
      uniqueArray.push(last = iterable[i])
    }
    i++
    }
  return uniqueArray
}

// 11.19.2020 multiples of 3 or 5

function solution(number){
  let i = 0
  var multiples = []
  if (number<3){
    return 0
  } else {
    while (i < number){
      if (Number.isInteger(i/3)){
        multiples.push(i)
      } else if (Number.isInteger(i/5)){
        multiples.push(i)
      }
      i++
    }
    return multiples.reduce((a, b) => a + b)
  }
}

// 11.20.2020 Squareroot 
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n))
}

// 11.21.2020 sum numbers between two integers

//my long answer:
function getSum( a,b ){
  var allNumbersArray = []
  if (a === b){
     return a
  }
  var lowNum = a < b ? a : b
  var topNum = a < b ? b : a
  var nextNum = lowNum
  while (nextNum <= topNum) {
    allNumbersArray.push(nextNum)
    nextNum = nextNum + 1
   }
  return allNumbersArray.reduce((a,b) => a+b )
}

// better answer:
const GetSum2 = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}