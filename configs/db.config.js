const mongoose = require('mongoose');
const dbName = 'cube-api';
const dbUri = `mongodb://admin:admin@ds125365.mlab.com:25365/heroku_1wz3k9gt`;

mongoose.connect(dbUri, { useMongoClient: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(`Connected to the ${dbName} database`);
});
