import db from '../../database';

export const findAll = done => {
    const queryString = `SELECT * FROM customers`;

    db.query(queryString, (err, rows) => {
        if (err) return done(err);
        done(null, rows);
    });
};

export const findOne = (params, done) => {
    const { id } = params;
    const queryString = `SELECT * FROM customers WHERE id = ?`;
    db.query(queryString, id, (err, rows) => {
        if (err) return done(err);
        done(err, rows[0]);
    });
};

export const create = (body, done) => {
    const { name } = body;
    const queryString = `INSERT INTO customers VALUES (DEFAULT, ?)`;
    db.query(queryString, [name], (err, results) => {
        if (err) return done(err);
        body.id = results.insertId;
        done(null, body);
    });
};

export const update = (params, body, done) => {
    const { id } = params;
    const queryString = `UPDATE customers SET ? WHERE id = ?`;
    db.query(queryString, [body, id], (err, results) => {
        if (err) return done(err);
        body.id = id;
        return done(null, body);
    });
};

export const remove = (params, done) => {
    const { id } = params;
    const queryString = `DELETE FROM customers WHERE id = ?`;
    db.query(queryString, id, err => {
        if (err) return done(err);
        done(null);
    });
};
