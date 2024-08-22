const { Career } = require('../models');

const careerController = {
  // Create
  createCareer: async (req, res) => {
    try {
      const { location, title, description } = req.body;
      const newCareer = await Career.create({ location, title, description });
      res.status(201).json(newCareer);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create career' });
    }
  },

  // Read all
  getAllCareers: async (req, res) => {
    try {
      const careers = await Career.findAll();
      res.status(200).json(careers);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch careers' });
    }
  },

  // Read one
  getCareerById: async (req, res) => {
    try {
      const { id } = req.params;
      const career = await Career.findByPk(id);
      if (career) {
        res.status(200).json(career);
      } else {
        res.status(404).json({ error: 'Career not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch career' });
    }
  },

  // Update
  updateCareer: async (req, res) => {
    try {
      const { id } = req.params;
      const { location, title, description } = req.body;
      const career = await Career.findByPk(id);
      if (career) {
        career.location = location;
        career.title = title;
        career.description = description;
        await career.save();
        res.status(200).json(career);
      } else {
        res.status(404).json({ error: 'Career not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update career' });
    }
  },

  // Delete
  deleteCareer: async (req, res) => {
    try {
      const { id } = req.params;
      const career = await Career.findByPk(id);
      if (career) {
        await career.destroy();
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Career not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete career' });
    }
  },
};

module.exports = careerController;
