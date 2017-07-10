import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'orderSystem',
    password: 'admin',
    db: 'orderSystem'
});

db.connect(err => {
    if (process.env.NODE_ENV === 'development') {
        if (err) {
            console.log('Error connecting to database');
        } else {
            console.log('Success in connecting to database');
        }
    }
});

db.query('use orderSystem');

export default db;
