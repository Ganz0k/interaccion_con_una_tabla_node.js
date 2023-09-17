const db = require('../config/db');

class ProductDAO {
    constructor() {

    }

    insertProduct(product, callback) {
        const insertQuery = `INSERT INTO products (nombre, precio, descripcion) VALUES ('${product.name}', ${product.price}, '${product.description}');`;
        
        db.query(insertQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        });
    }

    editProduct(product, callback) {
        const editQuery = `UPDATE products SET nombre = ${product.name}, precio = ${product.price}, descripcion ${product.description} WHERE id = ${product.id};`;

        db.query(editQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        });
    }

    deleteProduct(product, callback) {
        const deleteQuery = `DELETE FROM products WHERE id = ${product.id};`;

        db.query(deleteQuery, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        });
    }
}

module.exports = new ProductDAO();