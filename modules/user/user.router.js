const { addUser, updateUser, deleteUser, authorization } = require('./controller/user');


const router = require('express').Router();
const validationResult = require('../../common/validateRequest');
const { addUserSchema, updateUserSchema, signInSchema } = require('./controller/joi/userValidation');


// router.get("/user/:id", getAllUsers)
// router.get("/user/:id", getUser)

router.post("/User", validationResult(addUserSchema), addUser)
router.post("/auth", validationResult(signInSchema), authorization)

router.put('/User/:id', validationResult(updateUserSchema), updateUser)

router.delete("/User/:id", deleteUser)

module.exports = router;