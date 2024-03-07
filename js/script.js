function carregar () {
    var msgD = window.document.getElementById('div-msg')
    var msgH = window.document.getElementById('h1-msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var horaFormatada = hora < 10 ? `0${hora}` : hora
    var minFormatado = min < 10 ? `0${min}` : min

    msgD.innerHTML = `Agora são ${horaFormatada}:${minFormatado}`

    if (hora >= 5 && hora <= 11) {
        //bom dia
        msgH.innerHTML = `Bom Dia`
        img.src = '../images/manha-p.png'
        document.body.style.background = '#39A3E1'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        msgH.innerHTML = `Boa Tarde`
        img.src = '../images/tarde-p.png'
        document.body.style.background = '#EB7833'
    } else {
        //boa noite
        msgH.innerHTML = `Boa Noite`
        img.src = '../images/noite-p.png'
        document.body.style.background = '#03131f'
    }
}