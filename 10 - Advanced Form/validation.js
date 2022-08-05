
/*EVENT PARA INPUTS*/
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})


function valida(input){
    const tipoDeInput = input.dataset.tipo;
    
    const nextBtn = document.querySelector('#btnNext');

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.classList.remove('input-invalid')
        
        nextBtn.removeAttribute('disabled')
    } else {
        input.classList.add('input-invalid')
        nextBtn.setAttribute('disabled', 'disabled')
    }
}


/*DETERMINA CADA VALIDADOR PARA CADA DATA-SET DE INPUT*/
const validadores = {
    age:input => validaDataNascimento(input),    
    cep:input => recuperarCEP(input)
}




/*VALIDAÇÃO DATA NASCIMENTO*/

function validaDataNascimento(input){
    const dataRecebida = new Date (input.value)
    let mensagem = '';

    if(!maiorQue18(dataRecebida)){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar. '
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data){
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}




function recuperarCEP(input) {
    const cep = input.value.replace(/\D/g, '')
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    }

    if(!input.validity.patternMismatch && !input.validity.valueMissing) {
        fetch(url,options).then(
            response => response.json()
        ).then(
            data => {
                if(data.erro) {
                    input.classList.add('input-invalid')
                    return
                }
                input.classList.remove('input-invalid')
                preencheCamposComCEP(data)
                return
            }
        )
    }
}

function preencheCamposComCEP(data) {
    const address= document.querySelector('[data-tipo="address"]');
    const city = document.querySelector('[data-tipo="city"]');
    const state = document.querySelector('[data-tipo="state"]');

    address.value = data.logradouro
    city.value = data.localidade
    state.value = data.uf
}


var x = document.getElementsByClassName("tab");
var actualInputs = x[currentTab].querySelectorAll('.form-control');
console.log(actualInputs)
