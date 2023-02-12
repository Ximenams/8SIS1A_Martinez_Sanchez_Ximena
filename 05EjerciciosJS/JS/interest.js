//The validation function

function validarn(e){
    var  teclado  =  (document. all)? e. keyCode : e. which;

    if(teclado == 8) return true;

    var pattern = /[0-9\d .] /;

    var code = String. fromCharCode(keyboard);

    return  patron. test(codigo);
}

function interes(){
    var value = document. form. quantity. value;
    var resul = parseInt(valor);
    var interest = result*0.02;
    var total = interest * resul;

    document. formulario. sueldoI. value=  "$"  +  total;
}

function borrardatos(){

    document. form. quantity. value= "";
    document. formulario. sueldoI. value= "";
}