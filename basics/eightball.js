const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random() * 8);
    let resp;
    switch (opcion){
        case 1:
        resp = 'Todo saldrá bien!'   
        break;
        case 2:
        resp = 'Vuelve a preguntar'   
        break;
        case 3:
        resp = 'Eso no es para ti.'   
        break;
        case 4:
        resp = 'No lo sé, no soy adivina'   
        break;
        case 5:
        resp = 'Deberias meditar bien lo que piensas '   
        break;
        case 6:
        resp = 'Vuelve a preguntar'   
        break;
        default:
            resp = 'No lo sé' 
        }
        respuesta.innerHTML = resp;
}