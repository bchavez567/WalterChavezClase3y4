//EJEMPLO DE UN SIMULADOR DE COMPRAS DE UN PRODUCTOS + IVA

//ENTRADA
let entrada = prompt("Hola que producto necesitas" ,"templado, funda, cargador")

//PRODUCTOS
let templado = 800;
let funda = 700;
let cargador = 1000;

//CONSTANTES
const iva = 1.21;
const cuotas = 3;

//SWITCH 
switch (entrada) {
    case "templado":
        alert("Tu producto cuesta" + " " + "$" + (templado * iva) + " " + " + IVA icluido")
        alert("O en 3 cuotas" + " " + "$" + parseInt((templado * iva)/ cuotas))
        break;
    case "funda":
        alert("Tu producto cuesta" + " " + "$" + (funda * iva) + " " + " + IVA incluido")
        alert("O en 3 cuotas" + " " + "$" + parseInt((funda * iva)/ cuotas))
        break;
    case "cargador":
        alert("Tu producto cuesta" + " " + "$" + (cargador * iva) + " " + " + IVA incluido")
        alert("O en 3 cuotas" + " " + "$" + parseInt((cargador * iva)/ cuotas))
        break;
    default:
        alert(`No conozco este producto`);
        break;
}

//CONFIRMAR COMPRA
let querescomprar = confirm ('Comprar')