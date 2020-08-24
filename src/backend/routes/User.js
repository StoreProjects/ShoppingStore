const { Router } = require('express');
const router = Router();

const { logUser, getUser, deleteUser, updateUser, getUsers } =require('../controllers/user-controller')

router.route('/')
    .get(getUsers)

    //http://localhost:4000/api/users/1
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;