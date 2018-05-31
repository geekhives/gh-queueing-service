import kue from 'kue';
import basicAuth from 'basic-auth-connect';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(basicAuth(process.env.BASIC_AUTH_USERNAME,process.env.BASIC_AUTH_PASSWORD));
app.use(kue.app);

const queue = kue.createQueue();

queue.setMaxListeners(1000);

const processQueue = (func, type, n) => {
    queue.process(type, n, (job, done) => {
        func(job, done)
    })
}

export {
    processQueue,
    app
}