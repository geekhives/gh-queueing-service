import { processQueue, app } from './index2';

processQueue((data, done) => {
    console.log('Email',data)
    done();
}, 'email', 20);

processQueue((data, done) => {
    console.log('SMS',data)
    done();
}, 'sms', 20);

console.log(`Running QUEUE on port localhost:${process.env.PORT}`);
app.listen(process.env.PORT);