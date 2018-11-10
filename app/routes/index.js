var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', async function(req, res, next) {
  try {
    const users = await ctrl.getAll()
    res.json(users)
  } catch (error) {
    res.sendStatus(500);
  }  
});

router.post('/user', async function(req, res, next) {
  try {
    await ctrl.insert(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  } 
});
module.exports = router;
