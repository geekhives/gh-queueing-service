import { processQueue, app } from './index2';

processQueue((job, done) => {
    const { data } = job;
    console.log('Email',data)
    done();
}, 'email', 20);

processQueue((job, done) => {
    const { data } = job;
    console.log('SMS',data)
    done();
}, 'sms', 20);


processQueue((job, done) => {
    setTimeout(() => {
        done();
    }, 5000)
    done();
}, 'test', 20);

console.log(`Running QUEUE on port localhost:${process.env.PORT}`);
app.listen(process.env.PORT);