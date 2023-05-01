function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute
    
    

    if (chuteForInvalido(numero)) {
        document.body.innerHTML =
                `
                <h1>Game Over!!!</h1>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundImage = "none";
                document.body.style.backgroundColor = "black";
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    

    if (numeroForMaoirOuMenorQueOValorPermitido(numero)) {
       elementoChute.innerHTML += `<div>valor inválido: o número secreto precisa estar entre ${menorValor}
        e ${maiorValor}</div
        `
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}
            <div class="divisao">      
                <button id='jogar-novamente'>Jogar Novamente</button>
            </div>    
        `

    } if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div"


        `
    }if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div"

        `
    }


}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaoirOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', function (e){
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})