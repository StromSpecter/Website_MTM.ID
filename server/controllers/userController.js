const { User } = require('../models');
const bcrypt = require('bcrypt');

const userController = {
  // Register User
  registerUser: async (req, res) => {
    try {
      const { username, email, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username, email, password: hashedPassword, role });
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Login User
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) return res.status(404).json({ error: 'User not found' });

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

      res.status(200).json({ message: 'Login successful', user: { id: user.id, username: user.username, email: user.email, role: user.role } });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = userController;
