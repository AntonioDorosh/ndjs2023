const { Router } = require('express');
const UserComponent = require('./index');

const router = Router();

router.get('/', UserComponent.findAll);

router.get('/:id', UserComponent.findUser);

router.post('/', UserComponent.create);

router.put('/:id', UserComponent.updateUsers);

router.delete('/', UserComponent.deleteUser);

module.exports = router;