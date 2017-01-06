'use strict';
/* eslint-disable global-require */


require('babel/register');

var chalk = require('chalk');

// Requires in ./db/index.js -- which returns a promise that represents
// sequelize syncing its models to the postgreSQL database.
// Create a node server instance! cOoL!
var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app');
    server.on('request', app); // Attach the Express application.
};

var PORT = process.env.PORT || 1337;

server.listen(PORT, function () {
    console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
});

// startDb
// .then(createApplication)
// .then(startServer)
// .catch(function (err) {
//     console.error(chalk.red(err.stack));
//     process.exit(1);
// });
