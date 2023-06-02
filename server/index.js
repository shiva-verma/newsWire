const express = require('express'),
	mongoose = require('mongoose');
const app = express();

mongoose
	.connect('mongodb+srv://shiv:shiv@cluster0.p3ruacl.mongodb.net/?retryWrites=true&w=majority')
	.then(() => console.log('DB Connected!'))
	.catch((error) => console.log(error));

app.use(express.json());

const newsRoutes = require('./routes/news');
app.use(newsRoutes);

app.listen(3001, () => {
	console.log('server started at port 3001');
});
