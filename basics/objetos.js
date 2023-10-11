// Objeto es una coleccion de datos 
// a travez de key/value

/*
Objeto = {
    key: valor
    'key': 'valor'
}
objeto.key
objeto['key']
*/

const alumno = {
    name: 'Steve',
    age: 21,
    city: 'Manchester',
    califications: [10,10,10],
    carrer: 'TIADSM',
    'last name': 'Jobs',
    'gender': 'Male'
}

console.log(alumno);
console.log(alumno.name);
console.log(alumno.city);
console.log(alumno['califications']);
console.log(alumno['Last Name']);

alumno.height = 1.75;
console.log(alumno);

const group = {
    name: '4A DSM',
    carrer: 'TIADSM',
    classroom: 'Lab 1',
    subjects: ['Aplicaciones', 'Modelado', 'Data Bases']
}