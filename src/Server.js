const express = require('express');
const service = require('./service')('items.json');
const PORT = process.env.PORT || 8080;