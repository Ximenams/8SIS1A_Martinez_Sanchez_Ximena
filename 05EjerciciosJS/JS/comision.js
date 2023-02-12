function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
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
