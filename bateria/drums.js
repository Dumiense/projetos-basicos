function som(n) {
  var crsh = document.querySelector('#crsh')
  var ride = document.querySelector('#ride')
  var fltom = document.querySelector('#fltom')
  var mdtom = document.querySelector('#mdtom')
  var hgtom = document.querySelector('#hgtom')
  var kick = document.querySelector('#kick')
  var snre = document.querySelector('#snre')
  var hihtopn = document.querySelector('#hihtopn')
  var hihtcls = document.querySelector('#hihtcls')
  //var n = ind

  switch (n) {
    case (n = 1):
      crsh.play()
      break
    case (n = 2):
      ride.play()
      break
    case (n = 3):
      fltom.play()
      break
    case (n = 4):
      mdtom.play()
      break
    case (n = 5):
      hgtom.play()
      break
    case (n = 6):
      kick.play()
      break
    case (n = 7):
      kick.play()
      break
    case (n = 8):
      snre.play()
      break
    case (n = 9):
      hihtopn.play()
      break
    case (n = 0):
      hihtcls.play()
      break
    default:
      console.log('impossível')
  }
}
