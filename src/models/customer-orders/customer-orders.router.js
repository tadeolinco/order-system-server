import * as CustomerOrder from './customer-orders.controller';
import { Router } from 'express';

const router = new Router();

/**
 * @api {get} /api/customers/:customerId/orders Find Orders of Customer
 * @apiName findCustomerOrders
 * @apiGroup Customer Order
 * 
 * @apiParam {Number} customerId Unique ID of the Customer owning the orders.
 * 
 * @apiSuccess {Object[]} orders List of Orders of a Customer
 * @apiSuccess {Number} orders.id Unique ID of the Order
 * @apiSuccess {String} orders.name Name of the Order.
 * @apiSuccess {Number} orders.price Price of the Order.
 * @apiSuccess {Boolean} orders.hasBeenServed Flag if the Order has been served.
 * @apiSuccess {Number} orders.customerId Unique ID of the Customer owning the Order.
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      [
 *          {
 *              "id": 1,
 *              "name": "iced tea",
 *              "price": 15,
 *              "hasBeenServed": false,
 *              "customerId": 1
 *          },
 *          {
 *              "id": 2,
 *              "name": "sisig silog",
 *              "price": 70,
 *              "hasBeenServed": true,
 *              "customerId": 1
 *          },
 *      ]
 */
router.get('/api/customers/:customerId/orders', (req, res) => {
    CustomerOrder.findByCustomer(req.params, (err, orders) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(orders);
    });
});

/**
 * @api {post} /api/customers/:customerId/orders Create Customer Order
 * @apiName createCustomerOrder
 * @apiGroup Customer Order
 * 
 * @apiParam {Number} customerId Unique ID of the Customer owning the orders.
 * @apiParam {String} name Name of the Customer Order.
 * @apiParam {Number} price Price of the Customer Order.
 * 
 * @apiSuccess {Number} id Unique ID of the Order
 * @apiSuccess {String} name Name of the Order.
 * @apiSuccess {Number} price Price of the Order.
 * @apiSuccess {Boolean} hasBeenServed Flag if the Order has been served.
 * @apiSuccess {Number} customerId Unique ID of the Customer owning the orders.
 *  
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 1,
 *          "name": "iced tea",
 *          "price": 15
 *          "hasBeenServed": false,
 *          "customerId": 1
 *      }
 */
router.post('/api/customers/:customerId/orders', (req, res) => {
    CustomerOrder.create(req.params, req.body, (err, order) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(order);
    });
});

/**
 * @api {patch} /api/customers/:customerId/orders/:id Toggle Served in Customer Order
 * @apiName toggleServed
 * @apiGroup Customer Order
 * 
 * @apiParam {Number} customerId Unique ID of the Customer owning the orders.
 * @apiParam {Number} id Unique ID of the Customer Order.
 * @apiParam {Boolean} hasBeenServed Sets the Customer Order served flag.
 * 
 * @apiSuccess {Boolean} hasBeenServed New served flag for the Customer Order.
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      {
 *          "hasBeenServed": true
 *      }
 */
router.patch('/api/customers/:customerId/orders/:id', (req, res) => {
    CustomerOrder.toggleServed(req.params, req.body, (err, hasBeenServed) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(hasBeenServed);
    });
});

/**
 * @api {delete} /api/customers/:customerId/orders/:id Deletes Customer Order
 * @apiName removeCustomerOrder
 * @apiGroup Customer Order
 * 
 * @apiParam {Number} customerId Unique ID of the Customer owning the orders.
 * @apiParam {Number} id Unique ID of the Customer Order.
 * 
 * @apiSuccess {Object} null null
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      null
 */
router.delete('/api/customers/:customerId/orders/:id', (req, res) => {
    CustomerOrder.remove(req.params, err => {
        if (err) return res.status(500).json(err);
        res.status(200).json(null);
    });
});

export default router;
