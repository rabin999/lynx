### Logging

Currently, logging is writableStream of nodejs. Package `Winston` is used for logging
with `graylog`, where you will get features offered by graylog.
Trown Exception will be handled by graylog automatically and send to garylog server.

#### Getting started

`import logger from <logger_service>`

1. Logging debug level

```javascript
logger.debug('playing with logger version 22 changed', {
  metadata: {
    method: request.headers[':method'],
    host: request.headers[':authority'],
    scheme: request.headers[':scheme'],
    path: request.headers[':path'],
  },
});
```

2. Logging error level

```javascript
try {
  throw new Error('unable to connect mongo do url');
  response.code(200).send({ status: 'UP' });
} catch (e) {
  logger.error(e.message, {
    metadata: {
      stackTrace: e.stack,
    },
  });
  response.code(500).send(e);
}
```
