# queueing-service
Generic Queuing Service With Listener


## Available Scripts

In the project directory, you can run:

### `npm start`

## How to it works
```
const SampleProcess = (data, done) => {
    console.log(data)
    done();
}

processQueue(SampleProcess, 'email', 20);

console.log(`Running QUEUE on port localhost:${process.env.PORT}`);
app.listen(process.env.PORT);
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.