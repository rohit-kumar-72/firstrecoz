import { Router } from 'express'
import { createUser, deleteUser, getAllUser, updateUser } from '../controllers/user.controller.js';

const router = Router();

router.route('/create-user').post(createUser);
router.route('/update-user').put(updateUser);
router.route('/get-all-user').get(getAllUser);
router.route('/delete-user').delete(deleteUser);

export default router;