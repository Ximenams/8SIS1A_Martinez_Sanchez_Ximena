//vamos a obtener todos los valores por parte de los input
function problema1() {
    var p1_frase = document.querySelector('#p1_frase').value;
    var palabras = p1_frase.split(" "); // Separar la cadena en palabras
    palabras = palabras.reverse(); // Invertir el orden de las palabras
    var resultado = palabras.join(" "); // Unir las palabras en una nueva cadena
    document.querySelector('#p1-output').textContent = resultado;
}
function problema2(){

    var p2_x1 = document.querySelector('#p2-x1').value;
    
    var p2_x2 = document.querySelector('#p2-x2').value;
    
    var p2_x3 = document.querySelector('#p2-x3').value;
    
    var p2_x4 = document.querySelector('#p2-x4').value;
    
    var p2_x5 = document.querySelector('#p2-x5').value;
    
    var p2_y1 = document.querySelector('#p2-y1').value;
    
    var p2_y2 = document.querySelector('#p2-y2').value;
    
    var p2_y3 = document.querySelector('#p2-y3').value;
    
    var p2_y4 = document.querySelector('#p2-y4').value;
    
    var p2_y5 = document.querySelector('#p2-y5').value;
    
    //construir el vector
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];
    
    //ordeno los vectores
    
    v1 = v1.sort(function (a, b){
        return b-a;
    });
    
    v2 = v2.sort(function (a, b){
        return b-a;
    });
    
    v2 = v2.reverse();
    
    //el producto escalar
    
    var p2_producto = 0;
    
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }
    
    document.querySelector('#p2-output').textContent = 'Producto Escalar Minimo: ' + p2_producto;
    
}

function problema3() {
    var p3_frase = document.querySelector('#p3_frase').value;
    var p3_palabras = p3_frase.split(',');
    var p3_palabraConMasCaracteresUnicos = '';
    var p3_maxCaracteresUnicos = 0;
  
    p3_palabras.forEach(function(palabra) {
      var p3_caracteresUnicos = {};
      for (var i = 0; i < palabra.length; i++) {
        var p3_char = palabra[i];
        if (!p3_caracteresUnicos[p3_char]) {
          p3_caracteresUnicos[p3_char] = true;
        }
      }
      var p3_numCaracteresUnicos = Object.keys(p3_caracteresUnicos).length;
      if (p3_numCaracteresUnicos > p3_maxCaracteresUnicos) {
        p3_maxCaracteresUnicos = p3_numCaracteresUnicos;
        p3_palabraConMasCaracteresUnicos = palabra;
      }
    });
  
    document.querySelector('#p3-output').textContent = 'La palabra con más caracteres únicos es: ' + p3_palabraConMasCaracteresUnicos;
}
  