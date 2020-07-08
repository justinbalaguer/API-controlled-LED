const express = require('express');
const cors = require('cors');
const toggleSwitch = require('./routes/cmd');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', toggleSwitch);

app.listen(3000, () => {
	console.log('Server is running...');
});
