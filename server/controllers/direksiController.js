const { Direksi } = require('../models');
const upload = require('../config/multer');

// Get all direksi
exports.getAllDireksi = async (req, res) => {
  try {
    const direksis = await Direksi.findAll();
    res.json(direksis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get direksi by id
exports.getDireksiById = async (req, res) => {
  try {
    const direksi = await Direksi.findByPk(req.params.id);
    if (direksi) {
      res.json(direksi);
    } else {
      res.status(404).json({ error: 'Direksi not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new direksi
exports.createDireksi = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    try {
      const { name, position, description } = req.body;
      const image = req.file ? `${req.protocol}://${req.get('host')}/uploads/images/${req.file.filename}` : null;
      const newDireksi = await Direksi.create({ name, position, description, image });
      res.status(201).json(newDireksi);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

// Update direksi by id
exports.updateDireksi = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    try {
      const { name, position, description } = req.body;
      const direksi = await Direksi.findByPk(req.params.id);
      if (direksi) {
        const image = req.file ? `${req.protocol}://${req.get('host')}/uploads/images/${req.file.filename}` : direksi.image;
        await direksi.update({ name, position, description, image });
        res.json(direksi);
      } else {
        res.status(404).json({ error: 'Direksi not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

// Delete direksi by id
exports.deleteDireksi = async (req, res) => {
  try {
    const direksi = await Direksi.findByPk(req.params.id);
    if (direksi) {
      await direksi.destroy();
      res.json({ message: 'Direksi deleted' });
    } else {
      res.status(404).json({ error: 'Direksi not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
