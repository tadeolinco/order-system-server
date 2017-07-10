import * as MenuItem from './menu-items.controller';
import { Router } from 'express';

const router = new Router();
/**
 * @api {get} /api/menus/:menuId/items Find All Items in Menu
 * @apiName findAllMenuItemsByMenu
 * @apiGroup Menu Item
 * 
 * @apiParam {Number} menuId Unique ID of the Menu.
 * 
 * @apiSuccess {Object[]} items List of items in the menu.
 * @apiSuccess {Number} items.id Unique ID of the item.
 * @apiSuccess {String} items.name Name of the item.
 * @apiSuccess {Number} items.price Price of the item.
 * @apiSuccess {Boolean} items.isAvailable Flag if the item is available.
 * @apiSuccess {Number} items.menuId Unique ID of the menu this item belongs to.
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      [
 *          {
 *              "id": 1,
 *              "name": "iced tea",
 *              "price": 15,
 *              "isAvailable": true,
 *              "menuId": 1
 *          },
 *          {
 *              "id": 2,
 *              "name": "sisig silog",
 *              "price": 15,
 *              "isAvailable": true,
 *              "menuId": 1
 *          }
*       ]
 */
router.get('/api/menus/:menuId/items', (req, res) => {
    MenuItem.findByMenu(req.params, (err, items) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(items);
    });
});

/**
 * @api {post} /api/menus/:menuId/items Create a Menu Item
 * @apiName CreateMenuItem
 * @apiGroup Menu Item
 * 
 * @apiParam {Number} menuId Unique ID of the menu to be assigned
 * @apiParam {String} name Name of the menu item.
 * @apiParam {Number} price Price of the menu item.
 * 
 * @apiSuccess {Number} id Unique ID of the menu item.
 * @apiSuccess {String} name Name of the menu item.
 * @apiSuccess {Number} price Price of the menu item.
 * @apiSuccess {Boolean} isAvailable Flag for availability of the menu item.
 * @apiSuccess {Number} menuId Unique ID of the menu this items belongs to.
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 1,
 *          "name": "iced tea",
 *          "price": 15,
 *          "isAvailable": true,
 *          "menuId": 1   
 *      }
 */
router.post('/api/menus/:menuId/items', (req, res) => {
    MenuItem.create(req.params, req.body, (err, item) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(item);
    });
});

/**
 * @api {put} /api/menus/:menuId/items/:id Update Menu Item
 * @apiName updateMenuItem
 * @apiGroup Menu Item
 * 
 * @apiParam {Number} menuId Unique ID of the menu the item belongs to.
 * @apiParam {Number} id Unique ID of the of the item.
 * @apiParam {String} name New name of the item.
 * @apiParam {Number} price New price of the item.
 * @apiParam {Boolean} isAvailable New availability for the item.
 * 
 * @apiSuccess {Number} id Unique ID of the of the item.
 * @apiSuccess {String} name New name of the item.
 * @apiSuccess {Number} price New price of the item.
 * @apiSuccess {Boolean} isAvailable New availability for the item.
 * @apiSuccess {Number} menuId Unique ID of the menu the item belongs to.
 * 
 * @apiSuccessExample Success-response: 
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 1,
 *          "name": "iced tea",
 *          "price": 35,
 *          "isAvailable": true,
 *          "menuId": 1
 *      }
 */
router.put('/api/menus/:menuId/items/:id', (req, res) => {
    MenuItem.update(req.params, req.body, (err, item) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(item);
    });
});

/**
 * @api {delete} /api/menus/:menuId/items/:id Delete a Menu Item
 * @apiName removeMenuItem
 * @apiGroup Menu Item
 * 
 * @apiParam {Number} menuId Unique ID of the menu the item belongs to.
 * @apiParam {Number} id Unique ID of the of the item.
 * 
 * @apiSuccess {Object} null null
 * 
 * @apiSuccessExample Success-response: 
 *      HTTP/1.1 200 OK
 *      null
 */
router.delete('/api/menus/:menuId/items/:id', (req, res) => {
    MenuItem.remove(req.params, err => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(null);
    });
});

export default router;
