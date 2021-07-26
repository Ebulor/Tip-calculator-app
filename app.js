const buttons = document.querySelectorAll(".tip-buttons button");
const tipAmount = document.querySelector(".amount input");
const form = document.querySelector("form");
const tipTotal = document.querySelector(".output-total");
const tipPerson = document.querySelector(".output-person");
const numberOfPersons = document.querySelector(".people input");
const errors = document.querySelector(".people");
const reset = document.querySelector(".reset");
const customTipamount = document.querySelector(".tip-buttons input");
const bill = parseFloat(tipAmount.value);
const persons = parseFloat(numberOfPersons.value);

form.addEventListener("submit", (e)=>{
    e.preventDefault();
})


customTipamount.addEventListener("input", ()=>{  
  tipAmount.value = parseFloat(tipAmount.value);
  const bill = parseFloat(tipAmount.value);
  const persons = parseFloat(numberOfPersons.value);  
  const customTip = parseFloat(customTipamount.value) / 100;  
  tipPerson.textContent = `$${((bill * customTip) / persons).toFixed(2)}`;
  tipTotal.textContent = `$${(((bill * customTip) / persons) + bill / persons).toFixed(2)}`;  
})

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
      buttons.forEach((button)=>{
        button.classList.remove("clicked")
      })
      button.classList.add("clicked")
        
        const tipPercentage = parseFloat(button.innerText) / 100;  
        const bill = parseFloat(tipAmount.value);
        
        //to check if a number is inputed
        if (isNaN(bill) || bill < 1) {
          tipPerson.textContent = "$0.00";
          tipTotal.textContent = "$0.00";
          return;
        }
        //check number of persons
        const persons = parseFloat(numberOfPersons.value); 
        if(persons == 0 || persons == "" || isNaN(persons)){
          errors.classList.add("error");
          return;
        }
        else{
          errors.classList.remove("error");
        }
        
        tipPerson.textContent = `$${((bill * tipPercentage) / persons).toFixed(2)}`;
        tipTotal.textContent = `$${(((bill * tipPercentage) / persons) + bill / persons).toFixed(2)}`;
      })
})

reset.addEventListener("click", ()=>{
  tipPerson.textContent = "$0.00";
  tipTotal.textContent = "$0.00";
  tipAmount.value = "";  
  numberOfPersons.value = "";
  customTipamount.value = "";  
  buttons.forEach((button)=>{
    button.classList.remove("clicked");
  })
    
})



