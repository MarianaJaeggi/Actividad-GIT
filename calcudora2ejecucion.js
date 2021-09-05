//manejador para que arranque el documento y ejecute la funcion
window.addEventListener('load',init);
//manejador de evento para el teclado:
window.addEventListener('keypress',desdeTeclado);


function init() {
    //obtiene referencia a pantalla y todos los botones:
    var pantalla = document.getElementById('pantalla');
    var teclas = document.querySelectorAll ('button');
    //recorremos el arreglo:
    
    for(var i =0; i<teclas.length; i++){
        //para c/u agregamos un manejador de eventos: para el evento click
        
        teclas[i].addEventListener('click',function(){
            //si el boton que clickeo es el igual = ...
            if(this.textContent === '='){
                //..calculo el resultado
               pantalla.textContent = eval(pantalla.textContent);
               //si no, y clicleo C
            }else if (this.textContent === 'C'){
                // limpio la pantalla
                pantalla.textContent = " ";
            
            } // agrega el valor de pantalla el contenido del boton 
            else{pantalla.textContent += this.textContent;}
            
        });
    }

}

//Desde el teclado: 

function desdeTeclado(e){
    //almaceno el codigo numerico
    let codigo = e.charCode;
    //lo convierto en String
    let caracter = String.fromCharCode(codigo);
    //Array con los posibles caracteres:
    let posibles_caracteres = ['1','2','3','4','5','6','7','8','9','0','/','+','*','-'];
    console.log(codigo);
    //caracter que selecccione, esta incluido en el array
    if(posibles_caracteres.includes(caracter)){
        //se concatena el caracter al contenido de pantalla
        pantalla.textContent +=  caracter;
        //si el codigo es el 13 (enter) calcula el resultado
    }else if (codigo == 13){
        pantalla.textContent = eval(pantalla.textContent);
        // si el codigo es 32  (barra espaciadora) limpia la pantalla
    }else if (codigo == 32){
        pantalla.textContent = " ";
    
    }
    
}