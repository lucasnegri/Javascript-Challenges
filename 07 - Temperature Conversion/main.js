
    const celsius = document.getElementById('celsiusInput');
    const fahr = document.getElementById('fahrInput');
    const kelvin = document.getElementById('kelvinInput');
    const inputs = document.getElementsByClassName('input-group-text');
    const icon = document.getElementById('icon');

    function convertCelsius(num) {
        num = parseFloat(num);
        fahr.value = (num*1.8) + 32;
        kelvin.value = num + 273.15;  
        borderColor()
        iconColor(num)
    };

    function convertFahr(num) {
        num = parseFloat(num);
        celsius.value = (num-32) / 1.8;
        kelvin.value = ((num-32)/1.8)+273.15;
        borderColor()
        iconColor(num)
    }

    function convertKelvin(num){
        num = parseFloat(num);
        celsius.value = num-273.15;
        fahr.value = ((num-273.15)*1.8)+32;
        borderColor()
        iconColor(num)
    }

    
    
    function borderColor(num){
        
        for(i=0; i<inputs.length; i++){
            num = celsius.value
                    
            if(num > 220) { inputs[i].style.backgroundColor ='rgb(255,0,0, 0.9)', inputs[i].style.color ='white'}
            else if (num >180 ) { inputs[i].style.backgroundColor ='rgb(246, 39, 52, 0.9)' }
            else if (num >100 ) { inputs[i].style.backgroundColor ='rgb(228, 67, 77, 0.9)' }
            else if (num >40 ) { inputs[i].style.backgroundColor ='rgb(207, 98, 105, 0.9)' }
            else if (num >37 ) { inputs[i].style.backgroundColor ='rgb(189, 126, 130,0.9)' }
            else if (num >30 ) { inputs[i].style.backgroundColor ='rgb(168, 157, 157)' }
            else if (num >21 ) { inputs[i].style.backgroundColor ='rgb(164, 163, 176)' }
            else if (num >10 ) { inputs[i].style.backgroundColor ='rgb(163, 184, 195)' }
            else if (num >=0) { inputs[i].style.backgroundColor ='rgb(163, 190, 190)' }
            else if (num <0) { inputs[i].style.backgroundColor ='#6699CC', inputs[i].style.color ='white'};
                        
        }
    }

    function iconColor(num){
        num = celsius.value

        if(num > 220) { icon.style.color ='rgb(255,0,0, 0.9)'; icon.setAttribute('class', "bi bi-sun-fill")}       
            else if (num >180 ) { icon.style.color ='rgb(246, 39, 52, 0.9)'; icon.setAttribute('class', "bi bi bi-sun") }       
            else if (num >100 ) { icon.style.color ='rgb(228, 67, 77, 0.9)'; icon.setAttribute('class', "bi bi-egg-fried") }       //fogo
            else if (num >40 ) { icon.style.color ='rgb(207, 98, 105, 0.9)'; icon.setAttribute('class', "bi bi-thermometer-sun") }       //termometro alto
            else if (num >37 ) { icon.style.color ='rgb(189, 126, 130,0.9)' }       
            else if (num >30 ) { icon.style.color ='rgb(168, 157, 157)'; icon.setAttribute('class', "bi bi-thermometer-high") } 
            else if (num >21 ) { icon.style.color ='rgb(164, 163, 176)'  }
            else if (num >10 ) { icon.style.color ='rgb(163, 184, 195)'; icon.setAttribute('class', "bi bi-thermometer-half") }          
            else if (num >0) { icon.style.color ='rgb(163, 190, 190)'; icon.setAttribute('class', "bi bi-thermometer") }             //termometroinicio 
            else if (num <=0) { icon.style.color ='rgb(102, 153, 204)'; icon.setAttribute('class', "bi bi-thermometer-snow")};                       //termometro frio
    }

