const { Router } = require('express');
const router = Router();

const { createUser} =require('../controllers/register-controller')

router.route('/')

    .post(createUser)

    //http://localhost:4000/api/users/1
/*router.route('/:id')
    .delete(deleteUser)
*/
module.exports = router;