// Condicionales

// if {exp} {body}
const age = 18;
if (age >= 18){
    console.log('Es mayor')
}
// if {exp} {body} else {body}
if (age >= 18){
    console.log('Es mayor')
} else {
    console.log('Es menor')
}
// if ternario (exp) ? true: false;
(age >= 18)? console.log('Es mayor'): console.log('Es menor');
(age >= 18)? 
    console.log('Es mayor'): 
    console.log('Es menor');
// if {exp} else if {body} else {body}
const ppt = Math.ceil(Math.random() * 3);
if (ppt ===1){
    console.log('Cayó piedra')
    } else if (ppt ===12){
        console.log('Cayó papel')
        } else {
            console.log('Cayó tijera')
        }

//swich /case
const day = Math.ceil(Math.random() * 7);
switch(day){
    case 1:
        console.log('Es domingo');
    break;
    case 2:
        console.log('Es lunes');
    break;
    case 3:
        console.log('Es martes');
    break;
    case 4:
        console.log('Es miercoles');
    break;
    case 5:
        console.log('Es jueves');
    break;
    case 6:
        console.log('Es viernes');
    break;
    default:
        console.log('Es sabado');
}

//truthy and falsy
//Distintos tipos de datos como boolean
// 0 -> false
//not 0 -> true
//'' -> false
//'algo' -> true

let apples = 0;
if (apples > 0 ){
    console.log(`tenemos ${apples} manzana`);
} else{
    console.log('No hay manzanas')
}

apples = 10;
if (apples ){
    console.log(`tenemos ${apples} manzana`);
} else{
    console.log('No hay manzanas')
}

let userLogger = '';
let userNow;
userLogger?
    userNow = userLogger:
    userNow = 'Invitado';

userNow = userLogger || 'Invitado';
console.log(userNow);