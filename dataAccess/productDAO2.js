const db = require('../config/db');

class ProductDAO2 {
    constructor() {

    }

    insertProduct(product) {
        return new Promise((resolve, reject) => {
            const insertQuery = `INSERT INTO products (nombre, precio, descripcion) VALUES ('${product.name}', ${product.price}, '${product.description}');`;
        
            db.query(insertQuery, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    editProduct(product) {
        return new Promise((resolve, reject) => {
            const editQuery = `UPDATE products SET nombre = '${product.name}', precio = ${product.price}, descripcion = '${product.description}' WHERE id = ${product.id};`;

            db.query(editQuery, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    deleteProduct(product) {
        return new Promise((resolve, reject) => {
            const deleteQuery = `DELETE FROM products WHERE id = ${product.id};`;

            db.query(deleteQuery, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    selectAll() {
        return new Promise((resolve, reject) => {
            const selectAllQuery = 'SELECT * FROM products';

            db.query(selectAllQuery, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = new ProductDAO2();