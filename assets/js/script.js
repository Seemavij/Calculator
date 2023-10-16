let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    debugger;
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            if(string.includes('%')) {
                let firstNum = string.split('%')[0];
                let secondNum = string.split('%')[1];
                string = (firstNum / 100) * secondNum;
                document.querySelector('input').value = string;
            } else {
                string =eval(string);
            } 
           document.querySelector('input') .value = string;
        }
      
        else if (e.target.innerHTML == 'AC') {
            string ='';
            document.querySelector('input').value = string;
        }
        
         
       
        
    else{
        console.log(e.target)
       string = string + e.target.innerHTML;
       document.querySelector('input').value = string;
    }

  
})});
