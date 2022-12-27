const mongoose = require('mongoose');

function DbConnect(){
    mongoose
    .connect(process.env.DB_URL)
    .then(()=>console.log(`Connected to Database `))
    .catch(()=>console.log(`Database is not connected `));
}

module.exports = DbConnect;