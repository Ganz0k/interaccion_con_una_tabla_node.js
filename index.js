const db = require('./config/db');
const productoDAO = require('./dataAccess/productDAO');
const producto = require('./models/productModel');

db.connect((err) => {
    if (err) {
        console.log("Error al conectarse a la base de datos");
        return;
    }

    console.log("Conexión exitosa");

    const newProduct = new producto(null, 'Sprite', 10, 'Bebida saborizada');
    productoDAO.insertProduct(newProduct, (err, result) => {
        if (err) {
            console.log("Error al insertar en la base de datos");
            console.log(err);
        } else {
            console.log("Producto insertado" + result);
        }
    });

    db.end((err) => {
        if (err) {
            console.log("Error al desconectarse de la base de datos");
            return;
        }

        console.log("Desconexión exitosa");
    });
})