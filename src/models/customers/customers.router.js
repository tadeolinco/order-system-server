import * as Customer from './customers.controller';
import { Router } from 'express';

const router = new Router();
/**
 * @api {get} /api/customers Find All Customers
 * @apiName findAllCustomers
 * @apiGroup Customer
 * 
 * @apiSuccess {Object[]} customers List of Customers.
 * @apiSuccess {Number} customers.id Unique ID of the Customer.
 * @apiSuccess {String} customers.name Name of the Customer.
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      [
 *          {
 *              "id": 1,
 *              "name": "SAM"
 *          },
 *          {
 *              "id": 2,
 *              "name": "ZOE"
 *          }
 *      ]
 */
router.get('/api/customers', (req, res) => {
    Customer.findAll((err, customers) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(customers);
    });
});

/**
 * @api {get} /api/customers/:id Find One Customer
 * @apiName findOneCustomers
 * @apiGroup Customer
 * 
 * @apiParam {Number} id Unique ID of the Customer to match.
 * 
 * @apiSuccess {Object} customer Customer
 * @apiSuccess {Number} customer.id Unique ID of the Customer.
 * @apiSuccess {String} customer.name Name of the Customer.
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 1,
 *          "name": "SAM"
 *      }
 */
router.get('/api/customers/:id', (req, res) => {
    Customer.findOne(req.params, (err, customer) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(customer);
    });
});

/**
 * @api {post} /api/customers/ Create a Customer
 * @apiName createCustomer
 * @apiGroup Customer
 * 
 * @apiParam {String} name Name of the newly created Customer.
 * 
 * @apiSuccess {Object} customer New Customer.
 * @apiSuccess {Number} customer.id Automatically generated unique ID of the Customer.
 * @apiSuccess {String} customer.name Name of the Customer.
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 1,
 *          "name": "SAM"
 *      }
 */
router.post('/api/customers', (req, res) => {
    Customer.create(req.body, (err, customer) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(customer);
    });
});

/**
 * @api {put} /api/customers/:id Update an existing Customers
 * @apiName updateCustomer
 * @apiGroup Customer
 * 
 * @apiParam {Number} id Unique ID of the Customer to be updated.
 * @apiParam {String} name New name of the customer to be updated.
 * 
 * @apiSuccess {Object} customer List of New Customer.
 * @apiSuccess {Number} customer.id Unique ID of the Customer.
 * @apiSuccess {String} customer.name Name of the Customer.
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 1,
 *          "name": "SAM"
 *      }
 */
router.put('/api/customers/:id', (req, res) => {
    Customer.update(req.params, req.body, (err, customer) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(customer);
    });
});

/**
 * @api {delete} /api/customers/:id Delete an existing Customers
 * @apiName deleteCustomer
 * @apiGroup Customer
 * 
 * @apiParam {Number} id Unique ID of the Customer to be deleted.
 * 
 * @apiSuccess {Object} null null 
 * 
 * @apiSuccessExample Success-Response: 
 *      null
 */
router.delete('/api/customers/:id', (req, res) => {
    Customer.remove(req.params, err => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(null);
    });
});

export default router;
