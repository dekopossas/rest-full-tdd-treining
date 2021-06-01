const routes = require('express').Router();
const { User } = require('./app/models');

User.create({ name: 'Deko', email: 'dekopossaster@gmail.com', password_has: '32132132654' });

module.exports = routes;
