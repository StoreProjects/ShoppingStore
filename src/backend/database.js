const mongoose = require('mongoose');
const { mongo } = require('mongoose');

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasetest';

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const connection = mongoose.connection;

//Una vez que se conecte a nuestra BD, que nos mande un mensaje en consola

connection.once('open', () => {
    console.log('Database is connected');
});
