const db = require('./config/db');
const productoDAO = require('./dataAccess/productDAO2');
const producto = require('./models/productModel');

db.connect(async (err) => {
    if (err) {
        console.log("Error al conectarse a la base de datos");
        return;
    }

    console.log("Conexión exitosa");

    let gansito = new producto(null, 'Gansito', 14, 'Pastelito');
    await productoDAO.insertProduct(gansito).then(resolve => {
        console.log(resolve);
    }).catch(reject => {
        console.log(reject);
    });

    await productoDAO.selectAll().then(resolve => {
        console.log(resolve);
    }).catch(reject => {
        console.log(reject);
    });

    gansito = new producto(8, 'Gansito', 15, 'Pastelito');
    await productoDAO.editProduct(gansito).then(resolve => {
        console.log(resolve);
    }).catch(reject => {
        console.log(reject);
    });

    await productoDAO.selectAll().then(resolve => {
        console.log(resolve);
    }).catch(reject => {
        console.log(reject);
    });

    await productoDAO.deleteProduct(gansito).then(resolve => {
        console.log(resolve);
    }).catch(reject => {
        console.log(reject);
    });

    await productoDAO.selectAll().then(resolve => {
        console.log(resolve);
    }).catch(reject => {
        console.log(reject);
    });

    db.end((err) => {
        if (err) {
            console.log("Error al desconectarse de la base de datos");
            return;
        }

        console.log("Desconexión exitosa");
    });
});