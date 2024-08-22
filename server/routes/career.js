const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

// Create a new career
router.post('/', careerController.createCareer);

// Get all careers
router.get('/', careerController.getAllCareers);

// Get a single career by ID
router.get('/:id', careerController.getCareerById);

// Update a career by ID
router.put('/:id', careerController.updateCareer);

// Delete a career by ID
router.delete('/:id', careerController.deleteCareer);

module.exports = router;
