//funciones de orden superior
//high order fuctions

/*
Funcions que reciben funciones como parametros
*/

const myFuction = ()=>{
    console.log('Ejecuta mi funcion');
}

myFuction ();
const sameFuction= myFuction;
sameFuction();

const otherSameFuction = myFuction;
otherSameFuction;

const funOne = () => {
    console.log('Ejecuta la funcione One');
}

const funTwo = (username) => {
    console.log('Ejecuta la funcione Two');
    console.log('Holaa' +username);
}

const funThree = (otherFunction) => {
    console.log('Inicia funcion 3');
    otherFunction();
    console.log('Termina funcion 3');
}

funOne();
funTwo('Frank');
funTwo('Cochiloco');
funThree(funOne);
funThree(() => console.log('Soy una arrow'));

