const producto1 = new producto(1,"Camisa",120.00,"camisa.jpg","Camisa sport");
const producto2 = new producto(2,"Pantalon",500.00,"pantalon.jpg","pantalon jean");
const producto3 = new producto(3,"chaqueta",900.00,"chaqueta.jpg","Chaqueta de cuero");
const producto4 = new producto(4,"calsetines",50.00,"calsetines.jpg","Calsetines para el inierno");
const listaProductos = [producto1,producto2,producto3,producto4];
let listaCompras = [];


console.log(listaProductos);






function producto(id,nombre,precio,img,descripcion){
 this.id= id;
 this.nombre= nombre;
 this.precio = precio;
 this.img = img;
 this.descripcion = descripcion;
}