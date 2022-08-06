

                              //CHANGE FORM TABS//
var currentTab = 0; 
showTab(currentTab);
validateTab(currentTab); 

function showTab(n) {
  // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
    if (n == 0) {
    document.getElementById("btnPrev").style.display = "none";
    } else {
    document.getElementById("btnPrev").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("btnNext").type ="submit"
    document.getElementById("btnNext").innerHTML = "Submit";
    } else {
    document.getElementById("btnNext").innerHTML = "Next";
    document.getElementById("btnNext").type ="submit"
    }
  // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
    validateTab(currentTab);
}

function nextPrev(n) {
  // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
      //...the form gets submitted:
    document.getElementById("myForm").submit();
    return false;
    } 
    // Otherwise, display the correct tab:
    
    showTab(currentTab);
}


function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[n].className = x[n].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
        x[n].className += " active";
};

function validateTab(currentTab) {
    let allTabs = document.getElementsByClassName("tab");
    let actualInputs = allTabs[currentTab].querySelectorAll('.form-control, .form-select, .confirmInfo');
    const nextBtn = document.querySelector('#btnNext');
    console.log(actualInputs)

    for(i=0; i<actualInputs.length; i++){
        if(actualInputs[i].checkValidity() === true){
            nextBtn.removeAttribute('disabled')
        } else {
            nextBtn.setAttribute('disabled', 'disabled')
        }
    }
}







                //VALIDATION PART//

/*EVENT PARA INPUTS*/
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target);
        validateTab(currentTab)
    })
})


function valida(input){
    const tipoDeInput = input.dataset.tipo;
    
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.classList.remove('input-invalid')
    } else {
        input.classList.add('input-invalid')
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

