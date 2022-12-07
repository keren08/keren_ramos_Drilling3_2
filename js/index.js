// constantes 
const plus = document.getElementById('plus');
const less = document.getElementById('less');
const etiqueta = document.getElementById('etiqueta');
const orden = document.getElementById('orden');
const precio = document.getElementById("precio");
const envio = document.getElementById("envio");
const total = document.getElementById("total");

// escucha cuando hace click al mas
plus.addEventListener('click',(e)=>{
let contadorActual =parseInt(etiqueta.textContent,10);
 let contador = contadorActual+1;
 etiqueta.textContent=contador;

 actualizarLista(contadorActual,contador);
});
// escucha cuando hace click al mas
less.addEventListener('click',(e)=>{
    let contadorActual =parseInt(etiqueta.textContent,10);
    let contador = (contadorActual-1)<0?0:(contadorActual-1);
    etiqueta.textContent=contador;
    actualizarLista(contadorActual,contador);
   });

// agrega o quita producto de la lista
   function actualizarLista(contadorActual,contador){
    const html = ` <li class="orden__informacion">
    <p>camiseta Negra</p>
    <p>L<span>1000.00</span></p>
    </li>`;

    if(contadorActual<contador){
        orden.insertAdjacentHTML('beforeend',html);
    }else if(contadorActual>contador){
        orden.querySelector('li').remove();
    }
    actualizarTotal(contador);
   }

// actualiza el total al agregar y quitar un producto
   function actualizarTotal(contador){

    let subtotal = contador * parseInt(precio.textContent) + parseInt(envio.textContent); 

    if(contador==0){
        subtotal =0.00;
    }
    total.textContent = subtotal.toFixed(2);
   }


// contructor de objeto persona
function producto(id,nombre,precio,img,descripcion){
 this.id= id;
 this.nombre= nombre;
 this.precio = precio;
 this.img = img;
 this.descripcion = descripcion;
}