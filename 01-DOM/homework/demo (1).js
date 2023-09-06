// let nums = [2, 5, 1, 4, 5, 77, 66, 7, 8, 9, 5,]
// let cincos = []


// nums.forEach(function(elemento){
    // if(elemento === 5){
        // cincos.push(elemento)
    // }
// });

// //----- Arrow Function ---------------

// nums.forEach((elemento) => {
    // if(elemento === 5){
        // cincos.push(elemento)
    // }
// });

// //-----Ternario--------------------
// nums.forEach((elemento) => elemento === 5 ? cincos.push(elemento) : null);

// //---------Filter---------------------
// let numsFiltered = nums.filter((num) => num === 5)
// console.log(numsFiltered);


//-------Funcion Constructora-----------
// function Persona(name){
    // this.person = name
// };

// Persona.prototype.add = (name) => this.person = name

//-----------Class---------------

// class Persona{
    // constructor(name){
        // this.person = name
    // }
    // add(name)(name) => this.person = name
// };

//---------Objetos Literales--------------------


// const objeto = (name, age) => {
    // let cohorte = 'FT 38a'
    // let obj ={
        //  name,
        //  age,
        //  cohorte: cohorte
    // }
    // obj.lastName = 'Antunez'
    // console.log(obj);
// };


// objeto('maty', 31)




// function saludar(saludo){
    // let name = 'Maty'
    // console.log(saludo + ' ' + name);
    // console.log(`${saludo} ${name} te re amamos!`);
// };

// saludar('Holis')




// let [a, b, c] = [5,6,7]
// console.log(a);
// console.log(b)
// console.log(c);
// ;


// let obj = {
    // nombre : 'FT 38a',
    // age : '3 Semanas'
// }

// let {age, nombre} = obj
// console.log(age);
// console.log(nombre);
// console.log(obj);





// function saludo(saludo = 'hola'){
    // console.log(saludo);
// };

// saludo()



// function arrays(x, ...y){
    // console.log(x);
    // console.log(x + y.length);
// }
// arrays(1,2,7,9,3)


let arr1 = [1,2,3]
let arr2 = [4,5,6]

console.log([...arr1, ...arr2]);
