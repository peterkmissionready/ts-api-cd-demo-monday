import express from 'express'
import * as taskController from '../controllers/RiskCalculator'

const router = express.Router()

router.get('/', taskController.getAllTasks)

router.post('/', taskController.createOneTask)

router.get('/:id', taskController.getOneTask)

router.delete('/:id', taskController.deleteTask)

router.put('/:id', taskController.updateTask)

router.patch('/:id', taskController.updateTaskPartial)

export default router
