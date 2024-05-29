const prompt = require('prompt-sync')();

let hora;
let minuto;
let segundo;
let arrayHorario = [];

for (let i = 1; i <= 5; i++) {
    console.log(`Informe o ${i}º horário: `);
    hora = parseInt(prompt("Digite a hora: "));
    minuto = parseInt(prompt("Digite o minuto: "));
    segundo = parseInt(prompt("Digite o segundo: "));

    if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 59 && segundo >=0 && segundo <= 59) {
        
        if (hora >= 0 && hora <= 23) {
            arrayHorario[i] = "0" + hora + ":" + minuto + ":" + segundo; 
        }
         if (minuto >= 0 && minuto <= 9) {
            arrayHorario[i] = hora + ":0" + minuto + ":" + segundo; 
        }
         if (segundo >= 0 && segundo <= 9) {
            arrayHorario[i] = hora + ":" + minuto + ":0" + segundo; 
        }
        
        if (hora >= 0 && hora <= 9 && 
                 minuto >= 0 && minuto <= 9) {
                 arrayHorario[i] = "0" + hora + ":0" + minuto + ":" + segundo; 
        }
        if (hora >= 0 && hora <= 9 &&
                minuto >= 0 && minuto <= 9 &&
                segundo >= 0 && segundo <= 9) {
                arrayHorario[i] = "0" + hora + ":0" + minuto + ":0" + segundo; 
        }
        else if (minuto >= 0 && minuto <= 9 &&
                segundo >= 0 && segundo <= 9) {
                arrayHorario[i] = hora + ":0" + minuto + ":0" + segundo; 
        }
        else if (hora >= 0 && hora <= 9 &&
                segundo >= 0 && segundo <= 9) {
                arrayHorario[i] = "0" + hora + ":" + minuto + ":0" + segundo; 
        }
        else if (hora > 9 && minuto > 9 && segundo > 9) {
            arrayHorario[i] = hora + ":" + minuto + ":" + segundo; 
        }
    }
    else {
        console.log("Você informou um horário inválido!")
        i--;
    }
}

for (let i = 1; i <= 5; i++) {
    console.log(arrayHorario[i]);
}


/* Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS. */