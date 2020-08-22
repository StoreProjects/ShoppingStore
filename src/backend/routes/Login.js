const { Router } = require('express');
const router = Router();

const { getUsers, logUser} =require('../controllers/login-controller')

router.route('/')
    .get(getUsers)
    .post(logUser)

    //http://localhost:4000/api/users/1
/*router.route('/:id')
    .delete(deleteUser)
*/
module.exports = router;