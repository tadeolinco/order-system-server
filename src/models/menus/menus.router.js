import * as Menu from './menus.controller';
import { Router } from 'express';

const router = new Router();
/**
 * @api {get} /api/menus Find All Menus
 * @apiName findAllMenus
 * @apiGroup Menu
 * 
 * @apiSuccess {Object[]} menus List of Menus.
 * @apiSuccess {Number} menus.id Unique ID of the Menu.
 * @apiSuccess {String} menus.name Name of the Menu.
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      [
 *          {
 *              "id": 1,
 *              "name": "TRESTO"
 *          },
 *          {
 *              "id": 2,
 *              "name": "BONITOS"
 *          }
 *      ]
 */
router.get('/api/menus', (req, res) => {
    Menu.findAll((err, menus) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(menus);
    });
});

/**
 * @api {get} /api/menus/:id Find One Menu
 * @apiName findOneMenu
 * @apiGroup Menu
 * 
 * @apiParam {Number} id Unique ID of the Menu to match.
 * 
 * @apiSuccess {Object} menu Menu
 * @apiSuccess {Number} menu.id Unique ID of the Menu.
 * @apiSuccess {String} menu.name Name of the Menu.
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 1,
 *          "name": "TRESTO"
 *      }
 */
router.get('/api/menus/:id', (req, res) => {
    Menu.findOne(req.params, (err, menu) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(menu);
    });
});

/**
 * @api {post} /api/menus/ Create a Menu
 * @apiName createMenu
 * @apiGroup Menu
 * 
 * @apiParam {String} name Name of the newly created Menu.
 * 
 * @apiSuccess {Object} menu New Menu.
 * @apiSuccess {Number} menu.id Automatically generated unique ID of the Menu.
 * @apiSuccess {String} menu.name Name of the Menu.
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 1,
 *          "name": "TRESTO"
 *      }
 */
router.post('/api/menus', (req, res) => {
    Menu.create(req.body, (err, menu) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(menu);
    });
});

/**
 * @api {put} /api/menus/:id Update an existing Menu
 * @apiName updateMenu
 * @apiGroup Menu
 * 
 * @apiParam {Number} id Unique ID of the Menu to be updated.
 * @apiParam {String} name New name of the menu to be updated.
 * 
 * @apiSuccess {Object} menu List of New Menu.
 * @apiSuccess {Number} menu.id Unique ID of the Menu.
 * @apiSuccess {String} menu.name Name of the Menu.
 * 
 * @apiSuccessExample Success-Response: 
 *      HTTP/1.1 200 OK
 *      {
 *          "id": 1,
 *          "name": "TRESTO"
 *      }
 */
router.put('/api/menus/:id', (req, res) => {
    Menu.update(req.params, req.body, (err, menu) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(menu);
    });
});

/**
 * @api {delete} /api/menus/:id Delete an existing Menu
 * @apiName deleteMenu
 * @apiGroup Menu
 * 
 * @apiParam {Number} id Unique ID of the Menu to be deleted.
 * 
 * @apiSuccess {Object} null null 
 * 
 * @apiSuccessExample Success-Response: 
 *      null
 */
router.delete('/api/menus/:id', (req, res) => {
    Menu.remove(req.params, err => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(null);
    });
});

export default router;
