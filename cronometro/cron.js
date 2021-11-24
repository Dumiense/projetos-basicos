'use strict'

var hr = 0
var min = 0
var sec = 0
var mil = 0

var tempo = 10
var cron

function start() {
  cron = setInterval(timer, tempo)
}
function pause() {
  clearInterval(cron)
}

function stop() {
  clearInterval(cron)
  hr = 0
  min = 0
  sec = 0
  mil = 0
  document.getElementById('counter').innerText = '00:00:00'
  document.querySelector('#marcs').innerHTML = ''
}

function timer() {
  mil++
  if (mil == 100) {
    mil = 0
    sec++
  }

  if (sec == 60) {
    sec = 0
    min++
  }
  if (min == 60) {
    min = 0
    hr++
  }

  var format =
    (hr < 10 ? '0' + hr : hr) +
    ':' +
    (min < 10 ? '0' + min : min) +
    ':' +
    (sec < 10 ? '0' + sec : sec) +
    ':' +
    (mil < 10 ? '0' + mil : mil)
  document.getElementById('counter').innerHTML = format
}
function marcar() {
  var n = document.querySelector('#counter').innerHTML

  var parag = document.createElement('P')
  var t = document.createTextNode(n)
  parag.appendChild(t)
  var m = document.getElementById('marcs').appendChild(parag)

  /*m.innerHTML += n
  console.log(n)*/
}
