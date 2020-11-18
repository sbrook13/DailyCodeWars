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