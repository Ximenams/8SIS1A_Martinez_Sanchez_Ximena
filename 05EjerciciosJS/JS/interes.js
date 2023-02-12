//lafuncion de validacion

function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function interes(){
    var valor = document.formulario.cantidad.value;
    var resul = parseInt(valor);
    var interes = resul*0.02;
    var total = interes * resul;

    document.formulario.sueldoI.value= "$" + total;
}

function borrardatos(){

    document.formulario.cantidad.value= "";
    document.formulario.sueldoI.value= "";
}

function comision(){
    
    document.formulario.Sueldo.value;
    var sueldoBase;
    var venta1;
    var venta2;
    var venta3;
    var totalComision;
    var totalPagar;

    totalComision=(parseInt(venta1)+parseInt(venta2)+parseInt(venta3))*0.1;
    totalPagar=parseInt(sueldoBase)+parseInt(totalComision);
    document.formulario.totalComision.value="$"+totalComision;
    document.formulario.totalPagar.value="$"+totalPagar;

}

function descuento(){
    
    var valorCompra;
    var valorPagar;
    valorPagar=valorCompra-(valorCompra*0.15);
    document.formulario.descuen.value="$"+valorPagar;
}

function calificacion(){
    var calificacion;
    var promedio = parseFloat (promedio)* 0.55;
    var examenFinal = parseFloat (examenFinal)* 0.30;
    var trabajoFinal = parseFloat (trabajoFinal)* 0.15;
    calificacion = parseFloat (promedio)+parseFloat (examenFinal)+parseFloat (trabajoFinal);
    document.formlario.calificacion.value=""+calificacion;
}