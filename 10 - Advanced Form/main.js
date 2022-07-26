
//Form Steps//

function next_step() {
    document.getElementById("first").classList.add('hidden')
    document.getElementById("first").classList.remove('active');
    document.getElementById("second").classList.add('active');
}

function prev_step1() {
    document.getElementById("second").classList.remove('active');
    document.getElementById("second").classList.add('hidden');
    document.getElementById("first").classList.add('active');
}

function next_step1() {
    document.getElementById("second").classList.add('hidden')
    document.getElementById("second").classList.remove('active');
    document.getElementById("third").classList.add('active');
}

function prev_step2() {
    document.getElementById("third").classList.remove('active');
    document.getElementById("third").classList.add('hidden');
    document.getElementById("second").classList.add('active');
}

function next_step2() {
    document.getElementById("third").classList.add('hidden')
    document.getElementById("third").classList.remove('active');
    document.getElementById("fourth").classList.add('active');
}

function prev_step3() {
    document.getElementById("fourth").classList.remove('active');
    document.getElementById("fourth").classList.add('hidden');
    document.getElementById("third").classList.add('active');
}



