let arr = []
soma = 0
let view = document.getElementById('view')
let oper = 0
let res = 0
let done = Boolean(false)

function clean() {
  arr.length = 0
  view.innerHTML = ''
}
function val1(n) {
  if (done == true) {
    arr.length = 0
    arr.push(n)
    view.innerHTML = ''
    view.innerHTML += n
    done = false
  } else {
    arr.push(n)
    view.innerHTML += n
  }
}

function part1(w) {
  if (done == true) {
    numer1 = res
    num1 = Number(numer1)
    view.innerHTML = ''
    arr.length = 0
    oper = w
    done = false
  } else {
    numer1 = arr.join('')
    view.innerHTML = ''
    arr.length = 0
    oper = w
    num1 = Number(numer1)
  }
}

function part2() {
  numer2 = arr.join('')
  num2 = Number(numer2)
  //done == true
  if (oper == 1) {
    res = num1 + num2
  }
  if (oper == 2) {
    res = num1 - num2
  }
  if (oper == 3) {
    res = num1 * num2
  }
  if (oper == 4) {
    res = num1 / num2
  }
  view.innerHTML = res

  console.log(`v1= ${num1} v2 = ${num2} operador = ${oper}`)
  done = true
}
