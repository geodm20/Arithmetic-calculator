const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// The following block creates a function to identify which button was pressed

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText="";
        }
        // Converts display numbers to strings and erases the last element of the display if "clear" is pressed
        else if(item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
        }
        // If the display has a number and equal button is pressed then evaluate strings as an arithmetic operation
        else if(display.innerText != "" && item.id == "equal"){
            display.innerText = eval(display.innerText);
        }
        // If no number is in display and equal button is pressed, Null is displayed and then erased after 2 secs
        else if(display.innerText == "" && item.id == "equal"){
            display.innerText = "Null";
            setTimeout(()=>display.innerText="", 2000)
        }
        // Add into the display the item id value
        else{
            display.innerText+=item.id;
        }
        }
    }
);

// This code block stablishes classes depending if the click is used on the toggler
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark!=isDark;
}