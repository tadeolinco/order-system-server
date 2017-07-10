/**
 * git remote add origin https://github.com/tadeolinco/order-system-server.git
git push -u origin master
 * 
 */

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './router';

const ENV = process.env.NODE_ENV;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (ENV === 'development') {
    app.use(logger('dev'));
    app.use(express.static(__dirname + '../apidoc'));
}

app.use(router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});

export default app;
