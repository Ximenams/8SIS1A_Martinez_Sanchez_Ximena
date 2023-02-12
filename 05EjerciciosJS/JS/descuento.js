function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}
function descuento(){
    
    var valorCompra;
    var valorPagar;
    valorPagar=valorCompra-(valorCompra*0.15);
    document.formulario.descuen.value="$"+valorPagar;
}
