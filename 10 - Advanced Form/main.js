

//CHANGE FORM TABS//
var currentTab = 0; 
showTab(currentTab); 

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
    document.getElementById("btnNext").innerHTML = "Submit";
    
    } else {
    document.getElementById("btnNext").innerHTML = "Next";
    }
  // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
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
}