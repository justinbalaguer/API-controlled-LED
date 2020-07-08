const { exec } = require('child_process');
const { Router } = require('express');
const router = Router();

router.get('/on', (req, res) => {
	exec('"cmd/on.py"');
});

router.get('/off', (req, res) => {
	exec('"cmd/off.py"');
});

module.exports = router;
