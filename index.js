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

// 11.22.2020 slice and concatenate for longest string
function longestConsec(strarr, k) {
  var longestWord = "";
  for(var i=0;k>0 && i<=strarr.length-k;i++){
    var portionOfArray = strarr.slice(i,i+k);
    var newConcatenatedWord = portionOfArray.join("");
    if(newConcatenatedWord.length > longestWord.length){
      longestWord = newConcatenatedWord;
    }
  }
  return longestWord;
}

// 11.29.2020 format phone number string
function createPhoneNumber(numbers){
  return '(' + numbers.slice(0,3).join('') + ') ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
}

// 12.02.2020 number to string
function numberToString(num) {
  return num.toString();
}

// 12.10.2020 friday 13th
function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}

// 12.16.2020 count days using Sets
function daysRepresented(trips) {
  const set = new Set();
  trips.map(([a, b]) => {
    for (let i = a; i <= b; ++i) {
      set.add(i);
    }
  });
  return set.size;
}

// 12.17.2020 triangular number
function isTriangular(t) {
  i=1
  while (i <= t) {
    if (t*2 === i * (i+1)) {
      return true
    } else {
      if (i === t){
        return false
      }
      i++
    }
  }
}

// triangular number best answer
function isTriangular(t) {
  return Math.sqrt(8*t + 1) % 1 == 0;
}

// 12.18.2020 approx deriv

function deriv(f){
  return function(x) {
    var d = 0.001 * x || Number.MIN_VALUE
    return (f(x + d) - f(x - d)) / (2 * d)
  }
}