

/*
    Aqui eu liguei algumas variaveis a algumas divs do html

    o display e o botão de resposta estão separados dos outros botões por motivo de html

    foram necessários criar 2 variaveis nulas para segurar o valor da conta e do resultado
    da conta para que eu pudesse acessar eles mais tarde
*/
let _buttons = document.querySelectorAll(".button");
let _displayEl = document.querySelector("#display");
let _answer = document.querySelector("#equals");
let newDisplay = null;
let currentDisplay = [];
let emptyArr = [];
let result = null;
/*
    aqui acontece toda a regra da calculadora, a lógica da calculadora esta toda dentro
    da função que é chamada quando o eventlistener registra o click em um botão
*/

_buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        
        if(button.innerHTML === 'CA'){
            newDisplay = null;
            _displayEl.innerHTML = "";
            currentDisplay = [];
        } else {

            currentDisplay.push(button.innerHTML);
            newDisplay = currentDisplay.join("");
        }

        _displayEl.innerHTML = newDisplay;
    });
});

/**
 * aqui eu tenho o eventlistener do sinal de igual separado, 
 */

_answer.addEventListener("click", ()=>{
    result = eval(newDisplay);
    _displayEl.innerHTML = result;
    currentDisplay = [];
    currentDisplay.push(result);

});


/*
    Preciso de uma forma de acessar o array _operation para 
    comparar os elementos com o valor adicionado.
*/


/*
    preciso de um if melhor para decidir o que e quando fazer
    quando os numeros forem clicados

    tbm preciso conseguir adicionar mais de 1 ação por variavel
*/