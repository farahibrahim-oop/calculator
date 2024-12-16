const output = document.querySelector(".output");//display the equation
const result = document.querySelector(".result");//display the result(calculated)
const keys = document.querySelectorAll("button");//selects all calculater buttons
keys.forEach(key=>{
    key.addEventListener("click", calculate);
});

function calculate(){
   let buttonText = this. innerText;
   if(buttonText==="AC"){
       output.innerText = "";//clear the equation
       result.innerText = "0";//make the resiult 0 reset it
       result.style.animation=""//animation for result
       output.style.animation = "";
       return;
    }
   
    if(buttonText === "DEL"){
      output.textContent =
output.textContent.substr(0,output.textContent.length-1);
      return;
    }
    if(buttonText === "="){
      result.innerText = eval(output.innerText);
      result.style.animation = "big 0.5s ease-in-out";
      output.style.animation = "small 0.5s ease-in-out";
      result.style.animationFillMode = "forwards";
      output.style.animationFillMode = "forwards";
    }
    else{
    output.textContent += buttonText;
    return;//display error
    }
}
