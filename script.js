operacao = prompt('Digite um operador')
let num1 = parseInt(prompt('Digite um número '))
let num2 = parseInt(prompt('Digite outro número '))
let resultado = 0;
// && ||
function calculadora() {
    if (operacao == '+'){
        resultado = num1 + num2;
    }else if (operacao == '-'){
        resultado = num1 - num2; 
    }else if (operacao == '*'){
        resultado = num1 * num2;
    }else if (operacao == '/'){
        resultado = num1 / num2; 
    }else if (operacao == 'e'){
        resultado = 1;
        for(let i = 0; i < num2; i++){
           resultado *= num1;
        }
            console.log(resultado);
            return;
        }    
    else{
        console.log('Operador inválido');
        return;
    }

    if (resultado === undefined || resultado > 1000000){
        console.error('Erro!!');
    }
    else {
        console.log(resultado);
    }
}
calculadora()


