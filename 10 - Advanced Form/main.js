
/*---------------------------------------------------------*/
// Function that executes on click of first next button.
function next_step() {
  document.getElementById("first").classList.add('hidden')
  document.getElementById("first").classList.remove('active');
  document.getElementById("second").classList.add('active');
  }


// Function that executes on click of first previous button.
function prev_step1() {
  document.getElementById("second").classList.remove('active');
  document.getElementById("second").classList.add('hidden');
  document.getElementById("first").classList.add('active');
}

// Function that executes on click of second next button.
function next_step1() {
  document.getElementById("second").classList.add('hidden')
  document.getElementById("second").classList.remove('active');
  document.getElementById("third").classList.add('active');
}



// Function that executes on click of second previous button.
function prev_step2() {
  document.getElementById("third").classList.remove('active');
  document.getElementById("third").classList.add('hidden');
  document.getElementById("second").classList.add('active');
}
// Function that executes on click of second next button.
function next_step2() {
  document.getElementById("third").classList.add('hidden')
  document.getElementById("third").classList.remove('active');
  document.getElementById("fourth").classList.add('active');
}




// Function that executes on click of second previous button.
function prev_step3() {
  document.getElementById("fourth").classList.remove('active');
  document.getElementById("fourth").classList.add('hidden');
  document.getElementById("third").classList.add('active');
}