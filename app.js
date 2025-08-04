'use strict'

const botaoTrocarImg = document.getElementById('trocar-imagem')

function trocarImg(){
    const img = document.getElementById('img').value
    
    document.documentElement.style.setProperty('--bg-image', img)

    if(img === 'lily'){
        img = "url('img/lily.jpg')"
    } else if(img === 'saturn'){
        img = "url('img/saturn.jpg')"
    } else if( img === 'london'){
        imagem = "url('img/london.jpg')"
    } else {
        
        imagem = "url('img/ocean.jpg')"
    }
}




botaoTrocarImg.addEventListener('click', trocarImg)