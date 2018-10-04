// const express = require('express');
// const serveStatic = require("serve-static")
// const path = require('path');
// app = express();
// app.use(serveStatic(path.join(__dirname, 'dist')));
// const port = process.env.PORT || 8080;
// app.listen(port);
// console.log('Server started ' + port);

// Imports.
const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
// Express server.
const staticFileMiddleware = express.static(__dirname);
app.use(staticFileMiddleware);
app.use(history({
 disableDotRule: true,
 verbose: true
}));
app.use(staticFileMiddleware);
const port = process.env.PORT || 5555;
app.listen(port, () => {
 console.log('App listening on port ' + port);
});
