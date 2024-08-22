const express = require('express');
const router = express.Router();
const direksiController = require('../controllers/direksiController');

// Get all direksi
router.get('/', direksiController.getAllDireksi);

// Get direksi by id
router.get('/:id', direksiController.getDireksiById);

// Create new direksi
router.post('/', direksiController.createDireksi);

// Update direksi by id
router.put('/:id', direksiController.updateDireksi);

// Delete direksi by id
router.delete('/:id', direksiController.deleteDireksi);

module.exports = router;
