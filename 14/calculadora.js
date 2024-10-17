const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)


// Calculadora - Nivel I (Funciones)

function sumar(a,b) {
    return a+b
}
function restar(a,b) {
    return a-b
}
function multiplicar(a,b) {
    return a*b
}
function dividir(a,b) {
    return a/b
}


// Calculadora - Nivel II (Testeo)
function ejecutarOperacion(nombreOperacion) {
    const operaciones = {
        sumar,
        restar,
        multiplicar,
        dividir
    }

    const operacion = operaciones[nombreOperacion]


    const a = parseFloat($('#input_1').value)
    const b = parseFloat($('#input_2').value)
    const resultado = operacion(a, b)
    $('#operaciones h4 span').textContent = resultado
}

// Calculadora - Nivel III - Funciones extras
function cuadradoDeUnNumero(n){
    return multiplicar(n,n)
}

function promedioDeTresNumeros(a,b,c){
    return dividir(sumar(sumar(a,b),c), 3)
}

function calcularPorcentaje(n, porcentaje){
    return multiplicar(n, dividir(porcentaje, 100))
}

function generadorDePorcentaje(a, b){
    return multiplicar(dividir(a, b), 100)
}

// Test de funciones extras

function calcularCuadradoDeUnNumero(){
    const n = parseFloat($('#input_3').value)
    const resultado = cuadradoDeUnNumero(n)
    $('#cuadradoDeUnNumero h4 span').textContent = resultado
}

function calcularPromedioDeTresNumeros(){
    const a = parseFloat($('#input_4').value)
    const b = parseFloat($('#input_5').value)
    const c = parseFloat($('#input_6').value)
    const resultado = promedioDeTresNumeros(a,b,c)
    $('#promedioDeTresNumeros h4 span').textContent = resultado
}

function calcularPorcentajeDeUnNumero(){
    const n = parseFloat($('#input_7').value)
    const porcentaje = parseFloat($('#input_8').value)
    const resultado = calcularPorcentaje(n, porcentaje)
    $('#porcentajeDeUnNumero h4 span').textContent = resultado
}

function calcularGeneradorDePorcentaje(){
    const a = parseFloat($('#input_9').value)
    const b = parseFloat($('#input_10').value)
    const resultado = generadorDePorcentaje(a, b)
    $('#generadorDePorcentaje h4 span').textContent = resultado
}

// Calculadora - Nivel IV - Condicionales y Bucles

function verificarParidad(n){
    if(n%2 === 0) return 'El número es par'
    return 'El número es impar'
}

function calcularParidad(){
    const n = parseFloat($('#input_11').value)
    let resultado = ''
    if(isNaN(n)){
        resultado = 'Ingrese un número válido'
    } else {
        resultado = verificarParidad(n)
    }
    $('#paridad h4 span').textContent = resultado
}