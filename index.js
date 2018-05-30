'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = exports.processQueue = undefined;

var _kue = require('kue');

var _kue2 = _interopRequireDefault(_kue);

var _basicAuthConnect = require('basic-auth-connect');

var _basicAuthConnect2 = _interopRequireDefault(_basicAuthConnect);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var app = (0, _express2.default)();

app.use((0, _basicAuthConnect2.default)(process.env.BASIC_AUTH_USERNAME, process.env.BASIC_AUTH_PASSWORD));
app.use(_kue2.default.app);

var queue = _kue2.default.createQueue();

queue.setMaxListeners(1000);

var processQueue = function processQueue(func, type, n) {
    queue.process(type, n, function (job, done) {
        func(job.data, done);
    });
};

exports.processQueue = processQueue;
exports.app = app;
