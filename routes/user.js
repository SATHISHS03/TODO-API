import express from 'express';

const router = express.Router();
import {displayusers,createuser,user_update,deleteuser,displayid} from "../controllers/users.js";    
// all routes in here are users


router.get('/',displayusers);
router.post('/',createuser);
router.get('/:id',displayid);
router.delete('/:id',deleteuser);
router.patch('/:id',user_update); 

export default router;