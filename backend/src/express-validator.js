const { body, validationResult } = require('express-validator');

app.post('/contact', [
  body('email').isEmail(),
  body('message').isLength({ min: 10 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Suite du traitement...
});
