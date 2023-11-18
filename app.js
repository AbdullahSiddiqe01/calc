let input = "";
const buttons = document.querySelectorAll("button");
const display = document.getElementById("result");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      input = eval(input);
      document.querySelector("input").value = input;
    }
    else if(e.target.innerHTML == "AC"){
        input = "";
        document.querySelector("input").value = input;
    }
    else {
      input = input + e.target.innerHTML;
      document.querySelector("input").value = input;
    }
  });
});

