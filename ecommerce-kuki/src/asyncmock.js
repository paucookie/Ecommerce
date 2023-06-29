const misProductos = [
    {id: 'A001', 
    nombre: "Bose QuietComfort", 
    marca: "Bose", precio: 299, 
    img: "/img/bose-quietComfort-35.png",
    categoria: 'audio'},
    
    {id: 'A002', 
    nombre: "Sony WH-1000XM4", 
    marca: "Sony", 
    precio: 349, 
    img: "/img/Sony_WH_1000XM4.png",
    categoria: 'audio'},
    
    {id: "A003", 
    nombre: "Apple Airpods Pro", 
    marca: "Apple", 
    precio: 249, 
    img: '/img/apple_Airpods_Pro.png',
    categoria: 'audio'},
    
    {id: "A004", 
    nombre: "JBL Charge 4", 
    marca: "JBL", 
    precio: 149, 
    img: "/img/jbl_charge4.png",
    categoria: 'audio'},

    {id: 'AC001', 
    nombre: "Funda protectora para Iphone14 Pro", 
    marca: "Spigen", 
    precio: 149, 
    img: "/img/AC001.jpg",
    categoria: 'accesorios'},

    {id: 'AC002', 
    nombre: "PowerCore 10000mAh Power Bank", 
    marca: "Anker", 
    precio: 29.99, 
    img: "/img/AC002.jpg",
    categoria: 'accesorios'},

    {id: 'AC003', 
    nombre: "Cargador inalámbrico Boost Up", 
    marca: "Belkin", 
    precio: 39.99, 
    img: "/img/AC003.jpeg",
    categoria: 'accesorios'},

    {id: 'AC004', 
    nombre: "Soporte para teléfono móvil", 
    marca: "Popsockets", 
    precio: 9.99, 
    img: "/img/AC004.jpg",
    categoria: 'accesorios'},

    {id: 'G001', 
    nombre: "Apple Watch Series 7", 
    marca: "Apple", 
    precio: 399, 
    img: "/img/G001.jpg",
    categoria: 'gadgets'},

    {id: 'G002', 
    nombre: "Lente para celular ojo de pez", 
    marca: "Moment", 
    precio: 119.99, 
    img: "/img/G002.jpg",
    categoria: 'gadgets'},

    {id: 'G003', 
    nombre: "Teclado Bluetooth K380", 
    marca: "Logitech", 
    precio: 39.99, 
    img: "/img/logitech_k380.png",
    categoria: 'gadgets'},

]
//Retorno de Productos
export const getProductos = () => {
    return new Promise ((res) => {
        setTimeout(() =>{
            res(misProductos);
        }, 100);
    })
}

//Me muestre detalles
export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout (() =>{
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100);
    })
}

//Función que devuelve una categoría
export const getCategoria = (categoria) => {
    return new Promise (resolve => {
        setTimeout ( () => {
            const productosCategoria = misProductos.filter(prod => prod.categoria === categoria);
            resolve(productosCategoria);
        },2000)
    })
}