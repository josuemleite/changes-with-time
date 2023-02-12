function load() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('image')

  var date = new Date()
  var hour = date.getHours()

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

function verify() {
  var date = new Date()
  var year = date.getFullYear()
  var formYear = document.getElementById('txtyear')
  var res = document.querySelector('div#res')

  if (formYear.value.length == 0) {
    res.innerHTML = 'Check the data and try again.'
    res.style.color = 'rgb(128, 0, 32)'
  } else if (Number(formYear.value) < 1900) {
    res.innerHTML = 'Are you a vampire? Try again.'
    res.style.color = 'rgb(128, 0, 32)'
  } else if (Number(formYear.value) > year) {
    res.innerHTML = 'Are you from the future? Try again.'
    res.style.color = 'rgb(128, 0, 32)'
  } else {
    var formSex = document.getElementsByName('radsex')
    var age = year - Number(formYear.value)
    var sex = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'person-photo')
    if (formSex[0].checked) {
      sex = 'male'
      if (age >= 0 && age < 5) {
        img.setAttribute('src', './img/male-baby.jpg')
      } else if (age < 12) {
        img.setAttribute('src', './img/male-child.jpg')
      } else if (age < 21) {
        img.setAttribute('src', './img/male-teenager.jpg')
      } else if (age < 50) {
        img.setAttribute('src', './img/man.jpg')
      } else {
        img.setAttribute('src', './img/old-man.jpg')
      }
    } else if (formSex[1].checked) {
      sex = 'female'
      if (age >= 0 && age < 5) {
        img.setAttribute('src', './img/female-baby.jpg')
      } else if (age < 12) {
        img.setAttribute('src', './img/female-child.jpg')
      } else if (age < 21) {
        img.setAttribute('src', './img/female-teenager.jpg')
      } else if (age < 50) {
        img.setAttribute('src', './img/woman.jpg')
      } else {
        img.setAttribute('src', './img/old-woman.jpg')
      }
    }
    res.style.color = 'black'
    res.innerHTML = `We detected a ${sex} in their ${age}s.`
    res.appendChild(img)
    img.style.marginTop = '20px'
  }
}
