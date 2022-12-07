const plus = document.getElementById('plus');
const less = document.getElementById('less');
const etiqueta = document.getElementById('etiqueta');
const orden = document.getElementById('orden');

plus.addEventListener('click',(e)=>{
let contadorActual =parseInt(etiqueta.textContent,10);
 let contador = contadorActual+1;
 etiqueta.textContent=contador;

 actualizarLista(contadorActual,contador);
});

less.addEventListener('click',(e)=>{
    let contadorActual =parseInt(etiqueta.textContent,10);
    let contador = (contadorActual-1)<0?0:(contadorActual-1);
    etiqueta.textContent=contador;
    actualizarLista(contadorActual,contador);
   });


   function actualizarLista(contadorActual,contador){

    const html = ` <li>
    <p>camiseta Negra</p>
    <p>L<span>1000.00</span></p>
    </li>`;

    if(contadorActual<contador){
        orden.insertAdjacentHTML('beforeend',html);
    }else if(contadorActual>contador){
        orden.querySelector('li').remove();
    }

    
   }








// contructor de objeto persona
function producto(id,nombre,precio,img,descripcion){
 this.id= id;
 this.nombre= nombre;
 this.precio = precio;
 this.img = img;
 this.descripcion = descripcion;
}