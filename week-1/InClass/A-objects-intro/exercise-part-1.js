/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable


For example:
var car = {
    brand: "Seat",
    model: "Arona",
    color: "white",
    horsepower: 115,
    doors: 5
};

*/

var cat = {
    name: "shiro",
    color: "blanco",
    edad:4,
    peso: 4,
    size: 50,
    procedencia: "barcelona",
    ubicacion: {
        lon: 54.182,
        lat: 7.320,
    }
}
console.log(cat)
var camara1 ={
    megapixeles: "16MP",
    apertura: 1.9,
}
var camara2 ={
    megapixeles: "32MP",
    apertura: 10.8,
}
var camara3 ={
    megapixeles: "8MP",
    apertura: 1.8,
}
var telefonoMobil = {
    marca: "Iphone",
    modelo: "10px",
    year: 2020,
    precio: 1000,
    camaras: [
        camara1,
        camara2,
        camara3,

    ]
}
console.log(telefonoMobil.camaras)
var profesion1 ={
    area: "ingeniero informatico",
    duracion:5,
    sueldoBase: 1200,

}
var profesion1 ={
    area: "tecnico informatico",
    duracion:3,
}
var tipoDeContrato1= "indefinido"
var tipoDeContrato2 = "tiempo determinado"
var tipoDeCOntrato3 = "remplazo baja "
var tipoDeContrato4 = "remplazo vacaciones"
var ofertaLaboral1 = {
    area: "informatico",
    experiencia: 2,
    oferta: 1500,
    tipoDeContrato: tipoDeCOntrato4
}

