const displayresult = document.getElementById('result');
const numberButtons = document.querySelectorAll('[data-number]') ;
numberButtons.forEach(button  => {
    button.addEventListener('click', () => {
     displayresult.append(button.innerHTML)
    })
})

function add(a, b){
 return a + b;
}

function substract(a, b){
    return a - b;
   }

function multiply(a, b){
    return a * b;
   }

function divide(a, b){
    return a / b;
   }

   function operate (a,b,operator) {
      
    let plus = '+';
    let minus = '-';
    let multiplication = '*';
    let division = '/';
    if (operator === plus){
          return a + b;
      }
      if (operator === minus){
        return a - b;
    }
    
    if (operator === multiplication){
        return a * b;
    }
    
    if (operator === division){
        return a / b;
    }
    }
