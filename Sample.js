import { processQueue, app } from './Queue';

const SampleProcess = (data, done) => {
    console.log(data)
    done();
}

processQueue(SampleProcess, 'email', 20);

console.log(`Running QUEUE on port localhost:${process.env.PORT}`);
app.listen(process.env.PORT);