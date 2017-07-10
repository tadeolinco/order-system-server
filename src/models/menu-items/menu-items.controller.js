import db from '../../database';

export const findByMenu = (params, done) => {
    const { menuId } = params;
    const queryString = `SELECT menuItem.id, menuItem.name, price, isAvailable, menuId 
                        FROM menuItems menuItem JOIN menus menu
                        WHERE menu.id = ? AND menuItem.menuId = menu.id`;
    db.query(queryString, menuId, (err, rows) => {
        if (err) return done(err);
        done(err, rows);
    });
};

export const create = (params, body, done) => {
    const { menuId } = params;
    const { name, price } = body;
    const queryString = `INSERT INTO menuItems
                        VALUES(DEFAULT, ?, ?, DEFAULT, ?)`;

    db.query(queryString, [name, price, menuId], (err, results) => {
        if (err) return done(err);
        body.id = results.insertId;
        body.menuId = menuId;
        done(null, body);
    });
};

export const update = (params, body, done) => {
    const { id, menuId } = params;
    const queryString = `UPDATE menuItems
                        SET ?
                        WHERE id = ? AND menuId = ?`;
    db.query(queryString, [id, menuId], (err, results) => {
        if (err) return done(err);
        body.id = id;
        body.menuId = menuId;
        done(null, body);
    });
};

export const remove = (params, done) => {
    const { id, menuId } = params;
    const queryString = `DELETE FROM menuItems
                        WHERE id = ? AND menuId = ?`;
    db.query(queryString, [id, menuId], err => {
        if (err) return done(err);
        done(null);
    });
};
