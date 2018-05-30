# queueing-service
Generic Queuing Service With Listener


## Available Scripts

In the project directory, you can run:

### `npm start`

## How to it works
```
import { processQueue, app } from './src/Queue';

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

## Sample Job Post

### URL
```
POST localhost:3002/job
```

### Header
```
Basic Auth: foo:bar
```

### Sample JSON Body
```
{
   "type": "email",
   "data": {
     "name": "jinggo",
     "account_id": "1"
   },
   "options" : {
     "attempts": 3,
     "priority": "high"
   }
 }
 ```