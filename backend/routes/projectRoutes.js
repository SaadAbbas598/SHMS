import express from 'express';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectName
} from '../controllers/projectController.js';

const router = express.Router();

router.get('/getAll', getProjects);
router.get('/getName', getProjectName);
router.post('/create', createProject);
router.put('/update/:id', updateProject);
router.delete('/delete/:id', deleteProject);

export default router;
