# queueing-service
Generic Queuing Service With Listener

### Package

 ```
 "dependencies": {
    "queue": "geekhives/queueing-service"
  }
  ```

## Available Scripts

In the project directory, you can run:

### `npm start`

## How to it works
```
import { processQueue, app } from 'queue';

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

 ### CLI
 ```
 curl -i -X POST -H "Content-Type: application/json" -d '{
   "type": "sms",
   "data": {
      "title": "Sample Job Process",
      "name": "alee",
      "to": "jinggov@gmail.com",
      "subject": "Marina Account Activation",
      "link": "https://marina.site.geek-demos.com"
   },
   "options" : {
     "attempts": 3,
     "priority": "high"
   }
 }' localhost:3002/job -u foo:bar
 ```
