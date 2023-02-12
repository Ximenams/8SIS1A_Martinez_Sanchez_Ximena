function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function calificacion(){
    var calificacion;
    var promedio = parseFloat (promedio)* 0.55;
    var examenFinal = parseFloat (examenFinal)* 0.30;
    var trabajoFinal = parseFloat (trabajoFinal)* 0.15;
    calificacion = parseFloat (promedio)+parseFloat (examenFinal)+parseFloat (trabajoFinal);
    document.formlario.calificacion.value=""+calificacion;
}