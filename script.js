function load() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('image')

  var date = new Date()
  //var hour = date.getHours()
  var hour = 23

  msg.innerHTML = `Now it's ${hour} o'clock.`

  if (hour >= 2 && hour < 12) {
    img.src = './img/morning.png'
  } else if (hour >= 12 && hour < 17) {
    img.src = './img/noon.png'
    document.body.style.background = '#7093DB'
  } else if (hour >= 17 && hour < 23) {
    img.src = './img/evening.png'
    document.body.style.background = '#CD7F32'
  } else {
    img.src = './img/night.png'
    document.body.style.background = '#2F2F4F'
  }
}
