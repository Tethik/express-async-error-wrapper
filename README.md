# express-async-error-wrapper
[![npm version](https://badge.fury.io/js/express-async-error-wrapper.svg)](https://badge.fury.io/js/express-async-error-wrapper)

A stupid wrapper for express routes to catch and call `next()` on any errors thrown, allowing you to
use to throw errors while in async functions or promises.

## Example Usage
```javascript
const app = require('express')();
const wrap = require('express-async-error-wrapper');

// Will catch the error and go through the express error handler.
app.use('/with', wrap(async () => {
    throw new Error('Oh noes.')
}));

// Will crash the server and cause timeout in the client.
app.use('/without', async () => {
    throw new Error('Oh noes.')
});

console.log('Starting server on port 8000')
app.listen(8000);
```