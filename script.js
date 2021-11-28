function AskingCalculator(){

    var operationType = prompt("Qual tipo de cálculo você deseja fazer? \n +  -  *  /");
    while(operationType=="")
            {
                operationType = prompt("Por gentileza, informe o tipo de cálculo.");
            }
    
    var value1 = prompt('Qual o primeiro valor? ');
    if(!value1||isNaN(value1)){
      alert('Por favor, digite um valor numérico.');
    }

    var value2 = prompt('Qual o segundo valor? ');
    if(!value2||isNaN(value2)){
      alert('Por favor, digite um valor numérico.');
    }

    var result = eval(`${value1} ${operationType} ${value2}`);

    var mensagem = `Olá, o tipo de cálculo escolhido foi ${operationType}.\n 
    O valor 1 inserido foi ${value1} e o valor 2 inserido foi ${value2} .\n 
    O resultado da operação é ${result}.` 

    alert(mensagem);    
 
    }
   