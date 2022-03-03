var memorizeOperation = "unselected";

var pressedButton = "unselected";


function getNumber(id){
    return $("#"+id).val();
}

function printValue(id, val){
    $("#"+id).html(val);
}

function changeButtonColor(memorizeOperation){
    if(pressedButton!="unselected"){
        $(pressedButton).css('background-color', "#5b9aff");
        pressedButton = "unselected";
    }

    if(memorizeOperation != "unselected"){
        pressedButton = "#"+memorizeOperation+"Button";
    }
    if (pressedButton != "unselected"){
        $(pressedButton).css('background-color', '#ccc');
    }
}


function calculate(firstNumber,secondNumber,operation){
    if(!((typeof firstNumber == "number") && (typeof secondNumber == "number"))) {
        return "Please put numbers in the fields";
    }

    switch(operation){
        case 'add': 
                    var sum = firstNumber+secondNumber;
                    return "The result of add numbers is: " +sum;
                    break;
        case 'substract': 
                    var sub = firstNumber-secondNumber;
                    return "The result of substract numbers is: " +sub;
                    break;
        case 'divide': 
                    var divide = firstNumber/secondNumber;
                    return "The result of divide numbers is: " +divide;
                    break;
        case 'multiply': 
                    var multiply = firstNumber*secondNumber;
                    return "The result of multiply numbers is: " +multiply;
                    break;

        default: return "No operation selected!";
    }
}

printValue("message","Here will appear the result");

// Button events

$("#addButton").on('click', ()=>{
    if(memorizeOperation == "add"){
        memorizeOperation = "unselected";
    } else{ memorizeOperation = "add";}
    changeButtonColor(memorizeOperation);
 })
 
 $("#substractButton").on('click', ()=>{
     if(memorizeOperation == "substract"){
         memorizeOperation = "unselected";
     } else{ memorizeOperation = "substract";}
     changeButtonColor(memorizeOperation);
  })
 
  $("#divideButton").on('click', ()=>{
     if(memorizeOperation == "divide"){
         memorizeOperation = "unselected";
     } else{ memorizeOperation = "divide";}
     changeButtonColor(memorizeOperation);
  })
 
  $("#multiplyButton").on('click', ()=>{
     if(memorizeOperation == "multiply"){
         memorizeOperation = "unselected";
     } else{ memorizeOperation = "multiply";}
     changeButtonColor(memorizeOperation);
  })

  $("#calculateButton").on('click', ()=>{
        var firstNumber = parseInt(getNumber("firstNumber"));
        var secondNumber = parseInt(getNumber("secondNumber"));
        var result = calculate(firstNumber,secondNumber,memorizeOperation);

        printValue("message",result)
  })