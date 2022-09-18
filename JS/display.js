//constructor
class Display{
    constructor(displayValorAnterior,displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();//OBJETO TIPO CALCULADORA LE DA PROPIEDFADES AL CONTRUCTOR SE LLAMA LOS OPERADORES
        this.tipoOperacion = undefined;
        this.valorActual= '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'X',
            dividir: '%',

        }
    }


    borrar() {
        this.ValorActual = this.ValorActual.toString().slice(0, -1); //metodo tosString convierte a cadena caracteres y slice se encarga de borrar la cadena que este en la variable
        this.imprimirValores();
    }

    borrarTodo() {
        this.ValorActual = ''; //ingresa valor vacio
        this.ValorAnterior = ''; 
        this.tipoOperacion = undefined; //limpoia el borrado sin definicion
        this.imprimirValores(); 

    }

    computar(tipo) { //valida qye se realice la operacion
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo; //llega del metodo la palabra computar
        this.valorAnterior = this.valorActual || this.ValorAnterior; 
        valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return //ver metodo includes compara valores dentro del array
        this.valorActual = this.valorActual.toString() + numero.toString(); 
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.ValorAnterior} ${this.signos[this.tipoOrecion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return 
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);

    }
}



//calculos


//agregarNumero


//imprimaValores

//Computar

