function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Miguel Furghestti sério, fundo laranja e óculos de sol.')
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Miguel Furghestti sério, fundo azul e óculos de grau.')
    }

   

    //se tiver light mode adicionar a imagem light
}