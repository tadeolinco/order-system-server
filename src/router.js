import { Router } from 'express';
import CustomerRouter from './models/customers/customers.router';
import CustomerOrderRouter from './models/customer-orders/customer-orders.router';
import MenuRouter from './models/menus/menus.router';
import MenuItemRouter from './models/menu-items/menu-items.router';

const router = new Router();

router.use('/', CustomerRouter);
router.use('/', CustomerOrderRouter);
router.use('/', MenuRouter);
router.use('/', MenuItemRouter);

export default router;
