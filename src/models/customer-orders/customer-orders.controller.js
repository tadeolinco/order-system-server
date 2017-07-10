import db from '../../database';

export const findByCustomer = (params, done) => {
    const { customerId } = params;
    const queryString = `SELECT customerOrder.id, customerOrder.name, price, hasBeenServed, customerId
                        FROM customerOrders customerOrder JOIN customers customer 
                        WHERE customerOrder.customerId = customer.id AND customer.id = ?`;
    db.query(queryString, customerId, (err, rows) => {
        if (err) return done(err);
        done(null, rows);
    });
};

export const create = (params, body, done) => {
    const { customerId } = params;
    const { name, price } = body;
    const queryString = `INSERT INTO customerOrders
                        VALUES(DEFAULT, ?, ?, DEFAULT, ?)`;
    db.query(queryString, [name, price, customerId], (err, results) => {
        if (err) return done(err);

        body.id = results.insertId;
        body.customerId = customerId;

        done(null, body);
    });
};

export const toggleServed = (params, body, done) => {
    const { id, customerId } = params;
    const { hasBeenServed } = body;
    const queryString = `UPDATE customerOrders SET hasBeenServed = ?
                        WHERE id = ? AND customerId = ?`;
    db.query(queryString, [hasBeenServed, id, customerId], (err, results) => {
        if (err) return done(err);
        done(null, body);
    });
};

export const remove = (params, done) => {
    const { id, customerId } = params;
    const queryString = `DELETE FROM customerOrders
                        WHERE id = ? AND customerId = ?`;
    db.query(queryString, [id, customerId], err => {
        if (err) return done(err);
        done(null);
    });
};
