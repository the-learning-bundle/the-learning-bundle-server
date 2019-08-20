var express = require('express');
var router = express.Router();
const db = require('../queries');

// router.get('/', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
// });

router.get('/users', db.getUsers);
router.get('/users/:id', db.getUserById);
router.post('/users', db.createUser);
router.put('/users/:id', db.updateUser);
router.delete('/users/:id', db.deleteUser);

module.exports = router;
