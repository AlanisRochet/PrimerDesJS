let peso = parseInt(prompt("¿Cuanto pesas?"));
let medida = parseInt(prompt("¿Cuantos medis?"));

function imc(peso, altura) {
        let imc = (peso / (medida**2));
    
    if(imc < 18.5){
        alert ("bajo peso");
    }else if (imc < 25){
        alert ("Normal");
    }else if (imc < 30){
        alert ("Sobrepeso");
    }else{
        alert ("Obesidad");
    }
    console.log(imc)
}

    imc();

let numbers = [1,2,3,4,5]

for(let i=0; i=numbers.lengjt; i++){
console.log(`si quieres bajar &{i} kilos. Por semana tienes que hacer ${numbers} horas de ejercicio semanales.`);
}
